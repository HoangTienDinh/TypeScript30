/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Speech Synthesis
 * Concepts: Web Speech API
 * Key takeaways: Specifying this in a handler function signature;
 *   Set options with element name pattern (not very TS friendly).
 * Sidenotes: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
 *   Chrome required.
 *   Targeted es6 to get Array.find; Allowed implicit any for msg[input.name];
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --target es6 typescripts.ts
 */

const msg = new SpeechSynthesisUtterance();
let voices: SpeechSynthesisVoice[] = [];
const voicesDropdown = document.querySelector('[name="voice"]')! as HTMLSelectElement;
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak')! as HTMLButtonElement;
const stopButton = document.querySelector('#stop')! as HTMLButtonElement;
msg.text = (document.querySelector('[name="text"]')! as HTMLInputElement).value;

function populateVoices(this: SpeechSynthesis) {
  voices = this.getVoices();
  voicesDropdown.innerHTML = (voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join(''));
}

function setVoice() {
  const newVoice = voices.find(voice => voice.name === this.value);
  if (newVoice) {
    msg.voice = newVoice;
    toggle();
    return true;
  } else {
    console.error('Selected voice not found');
    return false;
  }
}

function toggle(e?: Event, startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  msg[this.name] = Number(this.value);
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', e => toggle(e, false));
