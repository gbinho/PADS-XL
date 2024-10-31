document.addEventListener("DOMContentLoaded", () => {
    const sounds = {
        'A': { button: document.getElementById("soundA"), audio: document.getElementById("audioA") },
        'S': { button: document.getElementById("soundS"), audio: document.getElementById("audioS") },
        'D': { button: document.getElementById("soundD"), audio: document.getElementById("audioD") },
        'F': { button: document.getElementById("soundF"), audio: document.getElementById("audioF") },
        'G': { button: document.getElementById("soundG"), audio: document.getElementById("audioG") },
        'H': { button: document.getElementById("soundH"), audio: document.getElementById("audioH") },
        'J': { button: document.getElementById("soundJ"), audio: document.getElementById("audioJ") },
        'K': { button: document.getElementById("soundK"), audio: document.getElementById("audioK") }
    };

    function playAudio(audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.play().catch(error => console.error("Erro ao reproduzir o áudio:", error));
    }

    Object.keys(sounds).forEach(key => {
        sounds[key].button.addEventListener("click", () => playAudio(sounds[key].audio));
    });

    window.addEventListener("keydown", (event) => {
        const key = event.key.toUpperCase();
        if (sounds[key]) {
            playAudio(sounds[key].audio);
            sounds[key].button.classList.add("active");
        }
    });

    window.addEventListener("keyup", (event) => {
        const key = event.key.toUpperCase();
        if (sounds[key]) {
            sounds[key].button.classList.remove("active");
        }
    });

    Object.keys(sounds).forEach(key => {
        sounds[key].button.addEventListener("touchstart", (event) => {
            event.preventDefault();
            playAudio(sounds[key].audio);
        });
    });
});
