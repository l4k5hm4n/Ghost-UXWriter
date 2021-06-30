let height;

function scrollHandler() {
    height = document.querySelector('.hero__image video').height;
    document.querySelector('.hero__image video').style.transform = `rotateX(0}deg)`;
    document.querySelector('.hero__image video').style.height = height;
    if(window.innerWidth > 768) {
        scrollEventListener();
    }
}

window.addEventListener("resize", scrollHandler);

height = document.querySelector('.hero__image video').height;


let scrollEventListener = () => { document.querySelector('body').onscroll = () => {
        if(scrollY < 100){
        document.querySelector('.hero__image video').style.height = height+'px'
        document.querySelector('.hero__image video').style.transform = `rotateX(${scrollY/2}deg)`;
        document.querySelector('.hero__image video').style.marginTop = -Math.max(scrollY/6,0) + 'px';
        document.querySelector('.hero__image').classList.remove('active')
        }

        else {
            document.querySelector('.hero__image video').style.height = (height-scrollY/1.25)+'px';
            document.querySelector('.hero__image').classList.add('active')        
        }
    }

}

if(window.innerWidth > 768) {
    scrollEventListener();
}

document.querySelector('body').onload = () => {
    document.querySelector('.preloader').remove();
    document.querySelector('body').classList.add('loaded');
}

document.querySelector('.tryout__toolbar--figma, .tryout__toolbar--figma svg').onclick = () => {
    window.open( "https://www.figma.com/community/plugin/960778033371641874/Ghost-UXWriter","_blank")
}

function videoStoppedPlaying() {
    document.querySelector('.plugin__tryout .plugin__tryout--btn span').innerText = 'Rerun Ghost UXWriter';
    document.querySelector('.tryout__container').classList= 'tryout__container'
    videoPlaying = false;
    videoPaused = false;
}

let videoPlaying = false;
let videoPaused = false;

document.querySelector('.plugin__tryout .plugin__tryout--btn').onclick = () => {
    if(!videoPlaying && !videoPaused) {
        document.querySelector('.plugin__tryout .plugin__tryout--btn span').innerText = 'Pause Ghost UXWriter'
        document.querySelector('.plugin__tryout--right video').play();
        document.querySelector('.tryout__container').classList= 'tryout__container video_playing'
        document.querySelector('.plugin__tryout--right video').addEventListener("ended", videoStoppedPlaying);
        videoPlaying = true
    }

    else if (videoPaused) {
        document.querySelector('.plugin__tryout--right video').play();
        document.querySelector('.plugin__tryout .plugin__tryout--btn span').innerText = 'Pause Ghost UXWriter';
        document.querySelector('.tryout__container').classList= 'tryout__container video_playing'
        videoPaused = false;
        videoPlaying = true;
    }

    else if (videoPlaying) {
        document.querySelector('.plugin__tryout--right video').pause();
        document.querySelector('.plugin__tryout .plugin__tryout--btn span').innerText = 'Resume Ghost UXWriter';
        document.querySelector('.tryout__container').classList= 'tryout__container video_paused'
        videoPaused = true;
        videoPlaying = false;
    }

}