var audio = new Audio("soft-hitnormal - Copy.wav");
var audio2 = new Audio("soft-hitnormal - Copy.wav");
var audio3 = new Audio("soft-hitnormal - Copy.wav");
var audio4 = new Audio("soft-hitnormal - Copy.wav");
var audio5 = new Audio("soft-hitnormal - Copy.wav");
var audio6 = new Audio("soft-hitnormal - Copy.wav");
var audio7 = new Audio("soft-hitnormal - Copy.wav");
var audio8 = new Audio("soft-hitnormal - Copy.wav");
var audio9 = new Audio("soft-hitnormal - Copy.wav");
var audio10 = new Audio("soft-hitnormal - Copy.wav");
var audio11 = new Audio("soft-hitnormal - Copy.wav");
var audio12 = new Audio("soft-hitnormal - Copy.wav");
var audio13 = new Audio("soft-hitnormal - Copy.wav");
var audio14 = new Audio("soft-hitnormal - Copy.wav");
var audio15 = new Audio("soft-hitnormal - Copy.wav");
var audio16 = new Audio("soft-hitnormal - Copy.wav");

audio.volume = 0.5;
audio2.volume = 0.5;
audio3.volume = 0.5;
audio4.volume = 0.5;
audio5.volume = 0.5;
audio6.volume = 0.5;
audio7.volume = 0.5;
audio8.volume = 0.5;
audio9.volume = 0.5;
audio10.volume = 0.5;
audio11.volume = 0.5;
audio12.volume = 0.5;
audio13.volume = 0.5;
audio14.volume = 0.5;
audio15.volume = 0.5;
audio16.volume = 0.5;


function hitSound(){
    audio.play();
}
function hitSound2(){
    audio2.play();
}
function hitSound3(){
    audio3.play();
}
function hitSound4(){
    audio4.play();
}
function hitSound5(){
    audio5.play();
}
function hitSound6(){
    audio6.play();
}
function hitSound7(){
    audio7.play();
}
function hitSound8(){
    audio8.play();
}
function hitSound9(){
    audio9.play();
}
function hitSound10(){
    audio10.play();
}
function hitSound11(){
    audio11.play();
}
function hitSound12(){
    audio12.play();
}
function hitSound13(){
    audio13.play();
}
function hitSound14(){
    audio14.play();
}
function hitSound15(){
    audio15.play();
}
function hitSound16(){
    audio16.play();
}

function getVolume(){
    var vol = document.getElementById('volume').value;
    audio.volume=vol;
    audio2.volume=vol;
    audio3.volume=vol;
    audio4.volume=vol;
    audio5.volume=vol;
    audio6.volume=vol;
    audio7.volume=vol;
    audio8.volume=vol;
    audio9.volume=vol;
    audio10.volume=vol;
    audio11.volume=vol;
    audio12.volume=vol;
    audio13.volume=vol;
    audio14.volume=vol;
    audio15.volume=vol;
    audio16.volume=vol;
    document.getElementById('volume-value').innerHTML=vol;
}

function toggleColor(target){
    targetElement = document.getElementById(target);
    if (targetElement.style.backgroundColor == 'red'){
        targetElement.style.backgroundColor = 'white';
    }
    else{
        targetElement.style.backgroundColor = 'red';
    }
}

var miss = 0;

function checkMiss(target){
    targetElement = document.getElementById(target);
    if (targetElement.style.backgroundColor == 'white'){
        miss++;
    }
}



// checks whether or not the target was hit
// function targetCheck(target){
//     targetElement = document.getElementById(target);
//     if (targetElement.style.backgroundColor == 'red'){
//         targetElement.style.backgroundColor = 'white';
//         for (i = 1; i < 17; i++){
        
//     }
//     else{
//         miss++;
//     }
// }



function updateMiss(){
    document.getElementById('misses').innerHTML = miss;
}

const startingMinutes = 1;
let time = startingMinutes * 60;

const countDownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds: seconds;

    countDownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    time = time < 0 ? 0 : time;

    if (time < 5){
        countDownEl.style.color = 'red';
        countDownEl.style.fontWeight = 'bold';
    }
}


