let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    
    if (voices.length > 0) {
        voiceSelect.innerHTML = '';
        voices.forEach((voice, i) => {
            let option = new Option(voice.name, i);
            voiceSelect.add(option);
        });
        speech.voice = voices[0];
    } else {
        setTimeout(loadVoices, 100);
    }
}

window.speechSynthesis.onvoiceschanged = loadVoices;
loadVoices(); // Appel initial

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});


