let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function  timer(seconds) {
    // clear any existing timers
    clearInterval(countDown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then)

    countDown = setInterval(() => {
        // 消除事件差
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it
        if (secondsLeft <= 0) {
            clearInterval(countDown)
            return;
        }
        displayTimeLeft(secondsLeft)
    }, 1000);
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const reminderSeconds = seconds  % 60;
    const display = `${minutes < 10 ? '0' :''}${minutes} : ${reminderSeconds < 10 ? '0' :''}${reminderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minute = end.getMinutes();
    endTime.textContent = `Be Back At ${hour}:${minute < 10 ? '0' : ''}${minute}`;
}

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
})





