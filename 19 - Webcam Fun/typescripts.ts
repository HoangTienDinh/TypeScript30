/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Webcam fun
 * Concepts: Accessing user media; Painting video to canvas; pixel manipulation
 * Key takeaways: Pixel manipulation is straightforward with the ImageData object and a canvas;
 *   Create a download link with the download attribute
 * Sidenotes: Small update was required to get the media stream to work (video.srcObject)
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */

interface GreenScreenConfig {
  [index: string]: number;
}

const video = document.querySelector('.player') as HTMLVideoElement;
const canvas = document.querySelector('.photo') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip')! as HTMLDivElement;
const snap = document.querySelector('.snap') as HTMLAudioElement;

function redEffect(pixels: ImageData) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] += 100;
    pixels.data[i + 1] += -50;
    pixels.data[i + 2] *= 0.5;
  }
  return pixels;
}

function rgbSplit(pixels: ImageData) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0];
    pixels.data[i + 100] = pixels.data[i + 1];
    pixels.data[i - 150] = pixels.data[i + 2];
  }
  return pixels;
}

function greenScreen(pixels: ImageData) {
  const levels: GreenScreenConfig = {};

  const inputs = document.querySelectorAll('.rgb input');
  if (!inputs) return pixels;
  inputs.forEach((input: HTMLInputElement) => levels[input.name] = Number(input.value));

  for (let i = 0; i < pixels.data.length; i = i + 4) {
    const red = pixels.data[i + 0];
    const green = pixels.data[i + 1];
    const blue = pixels.data[i + 2];

    if (
      red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax
    ) {
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;

  function paintVideoLoop() {
    if (!ctx) return;
    ctx.drawImage(video, 0, 0, width, height)
    let pixels = ctx.getImageData(0, 0, width, height);

    // pixels = redEffect(pixels);
    // pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.1;
    pixels = greenScreen(pixels);
    ctx.putImageData(pixels, 0, 0);
    requestAnimationFrame(paintVideoLoop);
  }
  paintVideoLoop();
}

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.srcObject = localMediaStream;
      video.onloadedmetadata = () => {
        video.play();
        paintToCanvas();
      };
    })
    .catch(err => console.error(`😬 I'm gonna need your webcam for this...`, err));
}
getVideo();

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Photo booth photo" />`;
  strip.insertBefore(link, strip.firstChild);
}

