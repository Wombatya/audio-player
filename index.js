const player = document.querySelector('.player');
const playerBackground = document.querySelector('.player-background');
const background = document.querySelectorAll('.background');
const playerPicture = document.querySelector('.player-picture');
const cover = document.querySelectorAll('.cover')
const songInfo = document.querySelectorAll('.song-info');
const prevSong = document.getElementById('prev-song');
const nextSong = document.getElementById('next-song');
const playSong = document.querySelector('.play-pause');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const audio = document.querySelector('.audio');
const currentTime = document.querySelector('.current-time');
const totalTime = document.querySelector('.total-time');

let playlist = ['Twenty one pilots - Shy Away', 'Щенки - Такую как ты', 'Motorama- Wind in her hair', 'Bonaparte - Weinbar'];

let index = 0;

let isPlay = false;

background[index].classList.add('active');
cover[index].classList.add('active');
songInfo[index].classList.add('active');
playerBackground.style.background = background[index];
playerPicture.style.background = cover[index];
// totalTime.innerHTML = audio.duration;
console.log(audio.duration)
playSong.addEventListener('click', function() {
    if (!isPlay) {
        playSong.classList.toggle('active');
        audio.play();
        isPlay = true;
    }
    else {
        playSong.classList.toggle('active');
        audio.pause();
        isPlay = false;
    }
});

nextSong.addEventListener('click', function() {
    if (!(index >= playlist.length-1)) {
        background[index].classList.toggle('active');
        cover[index].classList.toggle('active');
        songInfo[index].classList.toggle('active');
        index ++;
        playerBackground.style.background = background[index].classList.add('active');
        playerPicture.style.background = cover[index].classList.add('active');
        songInfo[index].classList.add('active');
        progress.style.width = '0px';
        audio.src = `music/${playlist[index]}.mp3`;
        if (isPlay){
        playSong.classList.toggle('active');
        isPlay = false;
        }
    }
    else {
        background[index].classList.toggle('active');
        cover[index].classList.toggle('active');
        songInfo[index].classList.toggle('active');
        index = 0;
        playerBackground.style.background = background[index].classList.add('active');
        playerPicture.style.background = cover[index].classList.add('active');
        songInfo[index].classList.add('active');
        progress.style.width = '0px';
        audio.src = `music/${playlist[index]}.mp3`;
        if (isPlay) {
        playSong.classList.toggle('active');
        isPlay = false;
        }
    }
});

prevSong.addEventListener('click', function() {
    if (index === 0) {
        background[index].classList.toggle('active');
        cover[index].classList.toggle('active');
        songInfo[index].classList.toggle('active'); 
        index = playlist.length-1; 
        playerBackground.style.background = background[index].classList.add('active');
        playerPicture.style.background = cover[index].classList.add('active');
        songInfo[index].classList.add('active');
        progress.style.width = '0px';
        audio.src = `music/${playlist[index]}.mp3`;
        if (isPlay){
        playSong.classList.toggle('active');
        isPlay = false;
        }
    }
    else {
        background[index].classList.toggle('active');
        cover[index].classList.toggle('active');
        songInfo[index].classList.toggle('active'); 
        index --;
        playerBackground.style.background = background[index].classList.add('active');
        playerPicture.style.background = cover[index].classList.add('active');
        songInfo[index].classList.add('active');
        progress.style.width = '0px';
        audio.src = `music/${playlist[index]}.mp3`;
        if (isPlay){
        playSong.classList.toggle('active');
        isPlay = false;
        }
    }
})

audio.addEventListener('timeupdate', function(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
})

progressBar.addEventListener('click', function(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration
}
)

