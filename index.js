var clickAllButtons = document.querySelectorAll('.drum');

for (let i = 0; i < clickAllButtons.length; i++) {
    clickAllButtons[i].addEventListener('click', playDrumWithMouseClick);
}

document.addEventListener('keydown', playDrumsWithKeys);

function playDrumWithMouseClick() {
    switch(this.innerHTML) {
        case 'w':
            playCrashByButton(this.innerHTML);
        break;
        case 'a':
            playKickByButton(this.innerHTML);
        break;
        case 's':
            playSnareByButton(this.innerHTML);
        break;
        case 'd':
            playTom1ByButton(this.innerHTML);
        break;
        case 'j':
            playTom2ByButton(this.innerHTML);
        break;
        case 'k':
            playTom3ByButton(this.innerHTML);
        break;
        case 'l':
            playTom4ByButton(this.innerHTML);
        break;
        default:
            console.log(this.innerHTML);
    }
}

function playDrumsWithKeys(event) {
    decideWhichSoundByKey(event);
}

function decideWhichSoundByKey(event) {
    switch(event.key) {
        case 'w':
            playCrashByKey(event);
        break;
        case 'a':
            playKickByKey(event);
            break;
        case 's':
            playSnareByKey(event);
            break;
        case 'd':
            playTom1ByKey(event);
            break;
        case 'j':
            playTom2ByKey(event);
            break;
        case 'k':
            playTom3ByKey(event);
            break;
        case 'l':
            playTom4ByKey(event);
            break;
        default:
            console.log(event.key);
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add('pressed');
    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100);
}

function playCrashByKey(event) {
    let crash = new Audio('sounds/crash.mp3');
    crash.loop = false;
    crash.play();
    buttonAnimation(event.key);
}

function playKickByKey(event) {
    let kickBass = new Audio('sounds/kick-bass.mp3');
    kickBass.loop = false;
    kickBass.play();
    buttonAnimation(event.key);
}

function playSnareByKey(event) {
    let snare = new Audio('sounds/snare.mp3');
    snare.loop = false;
    snare.play();
    buttonAnimation(event.key);
}

function playTom1ByKey(event) {
    let tom1 = new Audio('sounds/tom-1.mp3');
    tom1.loop = false;
    tom1.play();
    buttonAnimation(event.key);
}

function playTom2ByKey(event) {
    let tom2 = new Audio('sounds/tom-2.mp3');
    tom2.loop = false;
    tom2.play();
    buttonAnimation(event.key);
}

function playTom3ByKey(event) {
    let tom3 = new Audio('sounds/tom-3.mp3');
    tom3.loop = false;
    tom3.play();
    buttonAnimation(event.key);
}

function playTom4ByKey(event) {
    let tom4 = new Audio('sounds/tom-4.mp3');
    tom4.loop = false;
    tom4.play();
    buttonAnimation(event.key);
}

function playCrashByButton(event) {
    let crash = new Audio('sounds/crash.mp3');
    crash.loop = false;
    crash.play();
    buttonAnimation(event);
}

function playKickByButton(event) {
    let kickBass = new Audio('sounds/kick-bass.mp3');
    kickBass.loop = false;
    kickBass.play();
    buttonAnimation(event);
}

function playSnareByButton(event) {
    let snare = new Audio('sounds/snare.mp3');
    snare.loop = false;
    snare.play();
    buttonAnimation(event);
}

function playTom1ByButton(event) {
    let tom1 = new Audio('sounds/tom-1.mp3');
    tom1.loop = false;
    tom1.play();
    buttonAnimation(event);
}

function playTom2ByButton(event) {
    let tom2 = new Audio('sounds/tom-2.mp3');
    tom2.loop = false;
    tom2.play();
    buttonAnimation(event);
}

function playTom3ByButton(event) {
    let tom3 = new Audio('sounds/tom-3.mp3');
    tom3.loop = false;
    tom3.play();
    buttonAnimation(event);
}

function playTom4ByButton(event) {
    let tom4 = new Audio('sounds/tom-4.mp3');
    tom4.loop = false;
    tom4.play();
    buttonAnimation(event);
}