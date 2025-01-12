const hour = document.querySelector(".hour-hand")
const minute = document.querySelector(".minute-hand")
const second = document.querySelector(".second-hand")

function clockTick(){
    const data = new Date();
    const seconds = data.getSeconds() / 60;
    const minutes = (seconds + data.getMinutes()) / 60;
    const hours = (minutes + data.getHours()) / 12;
    
    rotateClockHand(hour, hours)
    rotateClockHand(minute, minutes)
    rotateClockHand(second, seconds)
}

function rotateClockHand(element, rotation){
    element.style.setProperty('--rotate', rotation * 360)
}

setInterval(clockTick, 1000)