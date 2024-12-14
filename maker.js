let twentySecsBtnEle = document.getElementById("twentySecondsBtn");
let thirtySecsBtnEle = document.getElementById("thirtySecondsBtn");
let fortySecsBtnEle = document.getElementById("fortySecondsBtn");
let oneMinBtnEle = document.getElementById("oneMinuteBtn");
let timerTextEle = document.getElementById("timerText");

let secsLeft = 0;
let timeText = "Your moment is completed";
let timeId;

function buttonsClick() {
    clearInterval(timeId);
}
twentySecsBtnEle.onclick = function() {
    secsLeft = 20;
    buttonsClick();
    setTime();
};
thirtySecsBtnEle.onclick = function() {
    sescLeft = 30;
    buttonsClick();
    setTime();

};
fortySecsBtnEle.onclick = function() {
    sescLeft = 40;
    buttonsClick();
    setTime();
};
oneMinBtnEle.onclick = function() {
    sescLeft = 60;
    buttonsClick();
    setTime();
};

function setTime() {
    if (secsLeft > 1) {
        secsLeft -= 1;
        timerTextEle.textContent = secsLeft + " seconds left";
    } else {
        buttonsClick();
        timerTextEle.textContent = timeText;
    }
}