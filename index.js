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

let playlist = ['Twenty one pilots - Shy Away', 'Щенки - Такую как ты', 'Motorama- Wind in her hair', 'Bonaparte - Weinbar'];

let index = 0;

let isPlay = false;

background[index].classList.add('active');
cover[index].classList.add('active');
songInfo[index].classList.add('active');
playerBackground.style.background = background[index];
playerPicture.style.background = cover[index];

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
        audio.src = `music/${playlist[index]}.mp3`;
        if (isPlay) {
        playSong.classList.toggle('active');
        isPlay = false;
        }
    }
})