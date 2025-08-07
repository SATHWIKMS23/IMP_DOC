const main = document.querySelector("main");
const button = document.getElementById("revealBtn");
const volumeDisplay = document.getElementById("volumeDisplay");
const paraBox = document.getElementById("paraBox");
const typedText = document.getElementById("typedText");

const audio = new Audio("SONG1.mp3"); // Your background song
audio.loop = true;
audio.volume = 0.5;

let volumeTimeout;

function myfunc() {
    main.style.backgroundImage = "url('photo.png')"; // Your image
    button.style.display = "none";
    paraBox.style.display = "block";
    audio.play();
    typeText(paragraph); // Start typing effect
    window.addEventListener("wheel", handleVolumeScroll);
}

function handleVolumeScroll(event) {
    // Prevent volume change if the scroll is inside the paragraph
    if (event.target.closest("#paraBox")) return;

    let change = event.deltaY < 0 ? 0.05 : -0.05;
    audio.volume = Math.max(0, Math.min(1, audio.volume + change));
    const volumePercent = Math.round(audio.volume * 100);
    volumeDisplay.textContent = `🔊 Volume: ${volumePercent}%`;
    volumeDisplay.style.display = "block";
    clearTimeout(volumeTimeout);
    volumeTimeout = setTimeout(() => {
        volumeDisplay.style.display = "none";
    }, 5000);
}

window.addEventListener("beforeunload", () => {
    audio.pause();
});

// Typing effect
const paragraph = `To Dearest Ananya,
I don’t know where to begin because no words can truly capture what I feel for you. But if I don’t say this now, I may regret it forever.
I love you.
I love you in ways that I can’t explain, in moments I can’t count, and in dreams I can’t escape. From the first time I saw you, something in me changed. It wasn’t just attraction—it was something deeper, something that made me believe in fate. 
After seeing you once, is it even possible that I don’t fall in love? 
I tried to ignore it, thinking it was just a fleeting feeling. But you never left my thoughts, my prayers, or my dreams. Every time I close my eyes, I see you. 
Without a doubt, today in your dreams, slowly can I walk by? 
Because in reality, I have been walking toward you every single day, hoping that one day, you would turn around and see me. 
I never believed in fairy tales—until you. You made me believe in something greater, something magical. I don’t know what I mean to you or if I mean anything at all, but to me, you are everything. You are the air I breathe, the thought that keeps me awake at night, the name that makes my heart race even in silence. 
You are my dream. But dreams alone aren’t enough, are they? That’s why every day, I push myself to become someone worthy of you. Every late night spent debugging, every challenge I overcome, every small victory I achieve—it’s all a step toward the future I dream of, a future where I can stand beside you, not just as someone who loves you, but as someone you can be proud of.
I wasn’t meant to be a coder. Life pushed me into mechanical engineering, a world of machines, forces, and equations that never truly felt like mine. But somewhere along the way, I found my way back to what I loved—coding, problem-solving, creating something out of nothing. It wasn’t easy, balancing two worlds, feeling like an outsider in both. But every time I wanted to give up, I reminded myself: "If I can’t follow my heart in academics, at least I should follow it in love." So, I kept going—practicing Data Structures and Algorithms (DSA) in stolen moments between mechanical assignments, debugging my own doubts late into the night, and pushing myself toward my dream of becoming a Software Development Engineer (SDE). Because for me, success isn’t just about a career—it’s about building a life where I can proudly stand beside you, where I can give you everything you deserve.
Ananya, my entire life has been about solving problems, finding the right logic, breaking things down until I find a solution. But you… you are the only question I don’t want to solve, the only mystery I want to get lost in forever. I have spent countless hours searching for patterns in code, but the pattern of my heart always leads to you. I have fixed memory leaks, optimized loops, and handled exceptions—but when it comes to you, I am the exception, the one error that no compiler can debug. I don’t want a solution; I just want you.
I deleted your picture once, thinking if I ever got it back, maybe life would give me a sign. And now, I have it again. Maybe that means something. Maybe it means that no matter how hard I try to let you go, you are meant to stay. 
In the tent of a nomad’s small little heart, could you be living all along?
I don’t want to spend another day loving you in silence. I want you to know, to feel, to understand that my love isn’t just words—it’s a promise. A promise that no matter what happens, I will always choose you. Even if the world turns against me, even if I have to wait a lifetime, I will wait. 
Because without you, my life is bereft. For you, my life is devoted. Without you, this life—what is it? Just kill me. 
I don’t know what you feel after reading this. Maybe you think I’m foolish. Maybe you’ll forget these words as soon as you finish reading them. But if, even for a second, your heart raced… if, even for a moment, you thought of me differently… then that is all I need to keep believing.
Ananya, if there is even a 1% chance that you could ever love me back, then tell me. And if not, then let me love you from a distance. But know this— I will love you in every universe, in every lifetime, until the end of time. 
Forever yours,
Sathwik M S`;

function typeText(text) {
    let i = 0;
    typedText.textContent = '';
    const typingInterval = setInterval(() => {
        typedText.textContent += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(typingInterval);
    }, 20);
}

