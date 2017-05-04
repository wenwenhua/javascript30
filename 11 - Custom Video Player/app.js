const player = document.querySelector('.player');
const video = player.querySelector('.viewer')
console.log(video);
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

/* build out functions */
function togglePlay(){
    // if (video.paused) {video.play(); }else{video.pause() }
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
/* 切换button的状态*/
function updateButton(){
    toggle.textContent = this.paused ? '►' : '❚ ❚';
}
/* 前进和后退 */
function skip(){
    video.currentTime += parseFloat(this.dataset.skip)
}
/* 调整音量和播放速度 */
function handleRangeUpdate(){
    video[this.name] = this.value;
}
/* 进度条 */
function hanleProgress(){
    const percent = (video.currentTime / video.duration) *100;
    progressBar.style.flexBasis = `${percent}%`
}
/* 进度条拖动 */
function scrub(e){
    // 计算进度条的位置相应的播放位置
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    console.log(e.offsetX);
    video.currentTime = scrubTime;
}
/* hook up the event listeners */
// video play when click the video or the btn
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
/* toggle the button when the video play and pause */
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', hanleProgress);

/*  */
skipButtons.forEach(btn => btn.addEventListener('click', skip))
//
ranges.forEach(btn => btn.addEventListener('change', handleRangeUpdate))
ranges.forEach(btn => btn.addEventListener('mousemove', handleRangeUpdate))

/*progress.addEventListener('mousemove', () => {
    if (flag && video.currentTime) {
        scrub();
    }
})*/
let flag = false;
// 鼠标点击时执行scrub()
progress.addEventListener('click', scrub)
// 鼠标移动时 flag = true 时 执行scrub()
progress.addEventListener('mousemove', e => flag && scrub(e))
// 鼠标按下时 flag=true
progress.addEventListener('mousedown', () => {flag = true;});
// 鼠标抬起时 flag=false
progress.addEventListener('mouseup', () => {flag = false;});
// 光标移除后 flag= false
progress.addEventListener('mouseout', () => {flag = false});
