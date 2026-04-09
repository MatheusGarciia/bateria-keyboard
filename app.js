const buttons = document.querySelectorAll('.drum');

const sounds = {
    w: new Audio('sounds/tom-1.mp3'),
    a: new Audio('sounds/tom-2.mp3'),
    s: new Audio('sounds/tom-3.mp3'),
    d: new Audio('sounds/tom-4.mp3'),
    j: new Audio('sounds/snare.mp3'),
    k: new Audio('sounds/crash.mp3'),
    l: new Audio('sounds/kick-bass.mp3')
};

function makeSound(key) {
    const audio = sounds[key];
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}

function buttonAnimation(key) {
    const activeButton = document.querySelector('.' + key);

    if (!activeButton) return;

    activeButton.classList.add('pressed');

    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 100);
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const key = this.innerHTML;
        makeSound(key);
        buttonAnimation(key);
    });
});

document.addEventListener('keydown', event => {
    makeSound(event.key);
    buttonAnimation(event.key);
});