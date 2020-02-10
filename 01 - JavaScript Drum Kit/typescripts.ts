/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager https://willwager.dev
 * Project: TypeScript Drum Kit
 * Concepts:
 *   keyCodes, Audio, transitionend events
 * Key takeaways:
 *   Attribute selectors, HTMLAudioElement properties and methods, classList usage, and
 *   using transitionend events to keep the visuals in sync.
 * Sidenotes:
 *   keyCode is deprecated, but the replacement 'code' is not implemented in Edge and IE.
 *   The sound is reset when pressed multiple times, but the visual state is not so there
 *   is a flicker when holding the key.
 */

const keys = document.querySelector('.keys');

function handleKey(e) {
  const audio: HTMLAudioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
}

// Updated to use event delegation here.
function handleEnd(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

document.addEventListener('keydown', handleKey);
keys.addEventListener('transitionend', handleEnd);