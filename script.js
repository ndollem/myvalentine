const messages = [
    "Are you sure?",
    "Really sure??",
    "Think again?",
    "Are you absolutely sure?",
    "Are you positive???",
    "Don't do this to me",
    "Pookie please...",
    "But we're perfect together!",
    "Just think about it!",
    "Give me a chance!",
    "Don't be like that!",
    "Change your mind please?",
    "Would you reconsider?",
    "This is your last chance!",
    "I'm gonna cry...",
    "You're breaking my heart ;(",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "You're making me sad :(",
    "Ok fine, I will stop asking...",
    "Just kidding, PLEASE SAY YES!",
    "I'm not giving up!",
    "I'll wait forever...",
    "Just say yes already!"
];

const images = [
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnZiYnJjOW00c2FobWVqazNvOWdjODkwcW9tejY4bmhtcTBsYnViayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/5eFtKFqu5D34WNno9u/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXd1aHhtNjFzZWIwaHNwMWZpODV3d3B4djNrOWkyMjdlamgzM3VpayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UTMtgm0mpAu0nSgvox/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzFuMjRuYmZwZGNjOWs1aXI1NWc3Y2N1azVwbnJwOW11ajNmNWxiMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WxKdPPaxNLCdxgLoBN/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3dkaWx0ZmRvdHFuN2tqNnE5aDk1M2ZzcjhwYmlmbjRibTA0ZjF4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/uWzRXTQRoQzxDO9W0p/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmkwdzBxYXdwbjdwbjdsaTI2MTlxdDgyMWY0eWg4MDMwanR5MGsxayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MQGNf0r6Xagrw5KfVL/giphy.gif"
];

let messageIndex = 0;
let clickCount = 0;
let imageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const questionImage = document.querySelector('.question_expr');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Change image every 2 clicks
    if (clickCount % 2 === 0) {
        imageIndex = (imageIndex + 1) % images.length;
        questionImage.src = images[imageIndex];
    }
    clickCount++;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

const yesImages = [
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWNwZnhvc2QyMmtlOTNjN2Q5eDA0NzBpd2N2dzAyb2p6dW9vNWZzcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/sRLfDd1R33y1OHGMUB/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDlzdzNobzFhc2sxZ2RlcXIxdzZoZmhuYTVidGhnNmFza2cwMHM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/DVwUa7CmyEqAERURvo/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2xhanoxcXFndTVxYWs1b2JqYjJqaDM2eW1vczRsZXo4aTJmeWJzeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/5Yfcn9JO3ZMN6YtXPJ/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDhzYWt0YmQ2eGkyYWVzZXZ3Mzl5MTR6ZmxqOGVrajBhdWVqY3YxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/YVhpNLN6aBCpczlLGs/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2o2dm5qMGltbHI5aHlvOGVvNGl3YzliczY1b3ZxMmdmdDFnbHRmayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/wNk71OcVtOPncxNHVT/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2w0d2Z2aWtqZ3FkeGpwNnhwNDNoZTM1bnR0dmhzeDJsMmpkcWhkciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9XY4f3FgFTT4QlaYqa/giphy.gif"
];

function handleYesClick() {
    // Hide the question gif
    const questionGif = document.querySelector('.question_gif');
    questionGif.style.display = 'none';

    // Hide the buttons
    const buttons = document.querySelector('.buttons');
    buttons.style.display = 'none';

    // Change the h1 text
    const heading = document.querySelector('h1');
    heading.textContent = 'I knew you would say yes for me!';

    // Show random yes gif
    const yesGif = document.querySelector('.yes_gif');
    const randomIndex = Math.floor(Math.random() * yesImages.length);
    yesGif.innerHTML = `<img src="${yesImages[randomIndex]}" alt="Happy GIF">`;
    yesGif.style.display = 'block';
}