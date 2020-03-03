/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Speech Detection
 * Concepts: Speech Recognition API
 * Key takeaways: Chrome and Edge have native speech recognition;
 *   The transcript can be used to trigger any other actions.
 * Sidenotes: es6 needed for Array.from; needed to extend window interface to add prefixed API.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es6 typescripts.ts
 */

interface Window {
  webkitSpeechRecognition: any;
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words')! as HTMLDivElement;
words.appendChild(p);

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
    if (transcript.includes('unicorn')) {
      console.log('🦄🦄🦄🦄🦄🦄🦄');
    }
  }
});

recognition.addEventListener('end', recognition.start);

recognition.start();