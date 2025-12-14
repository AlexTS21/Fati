function updateCountdown() {
    const target = new Date("December 14, " + new Date().getFullYear() + " 00:00:00").getTime();
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
        // Show rewind section after countdown ends with a delay
        console.log("aui")
        setTimeout(() => {
            document.getElementById('countdownPage').style.display = 'none';
            document.getElementById('rewindSection').style.display = 'block';
            document.getElementById('scrollIndicator').style.display = 'block';
        }, 2000);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").textContent =
        `${days}d ${hours}h ${mins}m ${secs}s`;
}

updateCountdown();

const audio = document.getElementById("audio");
const btn = document.getElementById("toggleBtn");
const catImage = document.getElementById("cat-image");

// Click event: play/pause
btn.addEventListener("click", () => {
    if (audio.paused) {
        catImage.src = "assets/hablando.gif";  
        audio.play();
        btn.classList.remove("play");
        btn.classList.add("pause");
    } else {
        catImage.src = "assets/hablando.png"; 
        audio.pause();
        btn.classList.remove("pause");
        btn.classList.add("play");
    }
});

// When audio finishes
audio.addEventListener("ended", () => {
    catImage.src = "assets/hablando.png";     
    btn.classList.remove("pause");
    btn.classList.add("play");
});


const audio2 = document.getElementById("audio2");
const btn2 = document.getElementById("toggleBtn2");
const catImage2 = document.getElementById("cat-image2");

btn2.addEventListener("click", () => {
    if (audio2.paused) {
        catImage2.src = "assets/hablando.gif";  
        audio2.play();
        btn2.classList.remove("play");
        btn2.classList.add("pause");
    } else {
        catImage2.src = "assets/hablando.png"; 
        audio2.pause();
        btn2.classList.remove("pause");
        btn2.classList.add("play");
    }
});

// When audio finishes
audio2.addEventListener("ended", () => {
    catImage2.src = "assets/hablando.png";     
    btn2.classList.remove("pause");
    btn2.classList.add("play");
});
