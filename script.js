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
        audio.pause(); // Pausa o áudio se estiver tocando
        audio.currentTime = 0; // Reinicia o áudio
        audio.play().catch(error => console.error("Erro ao reproduzir o áudio:", error));
    }

    // Adiciona eventos de clique aos botões
    Object.keys(sounds).forEach(key => {
        sounds[key].button.addEventListener("click", () => playAudio(sounds[key].audio));
    });

    // Adiciona eventos de tecla pressionada
    window.addEventListener("keydown", (event) => {
        const key = event.key.toUpperCase(); // Converte a tecla para maiúscula
        if (sounds[key]) {
            playAudio(sounds[key].audio);
        }
    });

    // Adiciona eventos de toque na tela (para mobile)
    Object.keys(sounds).forEach(key => {
        sounds[key].button.addEventListener("touchstart", (event) => {
            event.preventDefault(); // Evita o clique duplo em dispositivos móveis
            playAudio(sounds[key].audio);
        });
    });
});
