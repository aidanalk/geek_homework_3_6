//homework 1

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


gmailButton.onclick = () => {
    if(gmailRegex.test(gmailInput.value)){
        gmailResult.innerHTML = "Ok"
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = "NOT Ok"
        gmailResult.style.color = 'red'
    }
}


//homework 2

const childBlock = document.querySelector('.child_block');
const moveChildBlock = 2;
const parentFreeWidth = 449;

let positionX = 0;
let positionY = 0;

const moveBlock = () => {
    if (positionX < parentFreeWidth && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
    } else if (positionY < parentFreeWidth && positionX === parentFreeWidth) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
    } else if (positionX > 0 && positionY === parentFreeWidth) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
    } else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
    }

    setTimeout(moveBlock, moveChildBlock);
};

moveBlock();


const seconds = document.querySelector('#secondsS')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

let interval
let second = 0

const updateSecond = () => {
    clearInterval(interval)
    interval = setInterval(() => {
        second++
        seconds.innerHTML = second
    }, 1000)
}

start.onclick = () => updateSecond()
stop.onclick = () => clearInterval(interval)
reset.onclick = () => {
    clearInterval(interval)
    second = 0
    seconds.innerHTML = second
}

