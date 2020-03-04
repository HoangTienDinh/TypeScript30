const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;
function populateVoices() {
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
    }
    else {
        console.error('Selected voice not found');
        return false;
    }
}
function toggle(e, startOver = true) {
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
