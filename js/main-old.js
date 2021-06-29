let categories = [
    { icon: "images/categories/payment_errors.svg", title: "Payment Errors"},
    { icon: "images/categories/file_errors.svg", title: "File Errors"},
    { icon: "images/categories/system_errors.svg", title: "System Errors"},
    { icon: "images/categories/user_input_errors.svg", title: "User Input Errors"},
    { icon: "images/categories/file_errors.svg", title: "Server Errors"},
    { icon: "images/categories/system_errors.svg", title: "Network States"},
    { icon: "images/categories/user_input_errors.svg", title: "Login Errors"},
    { icon: "images/categories/payment_errors.svg", title: "Payment Errors"},
]

function randomCategories() {
    let generatedBlocks = [];
    let generatedCategories = [];

    document.querySelectorAll('.random__categories.main .random__categories--item').forEach(item => {
        item.classList.remove('active')
        item.innerHTML = ''
    })
    
    let randomLength = Math.ceil((Math.random()+0.5)*3)

    for(let i=0; i<randomLength; i++) {
        let randomCategory, randomBlock;

        function uniqueBlocks() {
            randomBlock = Math.ceil(Math.random()*6); // 6 blocks in UI layout
            if(generatedBlocks.includes(randomBlock)) {
                uniqueBlocks();
            }
        }

        function uniqueCategories() {
            randomCategory = Math.ceil(Math.random()*6); // 6 blocks in UI layout
            if(generatedCategories.includes(randomCategory)) {
                uniqueCategories();
            }
        }

        uniqueBlocks();
        uniqueCategories();
            
        generatedBlocks = [...generatedBlocks, randomBlock]      
        generatedCategories = [...generatedCategories, randomCategory]  



        setTimeout( () => {  
            document.querySelector(`.random__categories.main #random_${randomBlock}`).classList.remove('active')
            document.querySelector(`.random__categories.main #random_${randomBlock}`).innerHTML = `
            <img src="${categories[randomCategory].icon}" />
            <span>${categories[randomCategory].title}</span>
        `
        document.querySelector(`.random__categories.main #random_${randomBlock}`).classList.add('active')
   }, 100)
       
    }
    
}

randomCategories();

setInterval( () => {
    let shadow__block = document.querySelector('.random__categories.main').cloneNode(true)
    shadow__block.id = 'shadow__block',
    shadow__block.classList.remove('main')
    document.querySelector('.features__container--right').insertAdjacentElement('afterBegin', shadow__block)
    setTimeout( () => {  
             document.querySelector('#shadow__block').remove();  
    }, 1200)
    setTimeout( () => {  
             randomCategories(); 
    }, 400)
    document.querySelector('.random__categories.main').classList.toggle('active')
}, 4000 )

let height;

function scrollHandler() {
    height = document.querySelector('.hero__image video').height;
    document.querySelector('.hero__image video').style.transform = `rotateX(0}deg)`;
    document.querySelector('.hero__image video').style.height = height;
}

window.addEventListener("resize", scrollHandler);

height = document.querySelector('.hero__image video').height;

document.querySelector('body').onscroll = () => {
    if(scrollY < 200){
    document.querySelector('.hero__image video').style.height = height+'px'
    document.querySelector('.hero__image video').style.transform = `rotateX(${scrollY/4}deg)`;
    document.querySelector('.hero__image video').style.marginTop = -Math.max(scrollY/6,0) + 'px';
    document.querySelector('.hero__image').classList.remove('active')
    }

    else {
        document.querySelector('.hero__image video').style.height = (height-scrollY/1.6)+'px';
        document.querySelector('.hero__image').classList.add('active')        
    }
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
2