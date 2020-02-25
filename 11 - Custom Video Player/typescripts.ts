/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Custom Video Player
 * Concepts: Video methods and events
 * Key takeaways: Simply read inputs and update the video elements;
 *   offsetX/Y and offsetWidth/Height to determine click location in an element;
 *   Again, then isDrawing/mousedown pattern
 * Sidenotes: Implicit any required for the handleRangeUpdate method
 *    querySelector with strictNullChecks requires the "! as" cast.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --target es5 typescripts.ts
 */

/* Select elements */
const player = document.querySelector('.player')! as HTMLElement;
const video = player.querySelector('.viewer')! as HTMLVideoElement;
const progress = player.querySelector('.progress')! as HTMLElement;
const progressBar = player.querySelector('.progress__filled')! as HTMLElement;
const toggle = player.querySelector('.toggle')! as HTMLButtonElement;
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen') as HTMLButtonElement;

/* Implement functionality */
// Play, pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  toggle.textContent = (this.paused ? '▶' : '▮▮');
}

function skip() {
  video.currentTime += Number(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = video.currentTime / video.duration * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e: MouseEvent) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function handleFullscreen() {
  if (document.fullscreenElement === player) {
    document.exitFullscreen();
  } else {
    player.requestFullscreen();
  }
}

/* Hook up listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', e => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
player.addEventListener('mouseout', () => mousedown = false);

fullscreen.addEventListener('click', handleFullscreen);

/* init */
handleProgress();