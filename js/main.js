window.addEventListener('load', init);
let musicPlayer;
let apiUrl = './webservice';
let musicLibrary;
let musicRow;


function init() {
    getMusic(apiUrl, getMusicSuccessHandler)
    musicRow = document.getElementById('musicRow');
    let musicItem = document.getElementsByClassName('musicButton');
    //Add event listener to all items
    for (let i = 0; i < musicItem.length; i++) {
        musicItem[i].addEventListener('click', musicClickHandler);
    }
}


function getMusic(url, successfulFunction) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(successfulFunction)
        .catch(getMusicErrorHandler)
}

function getMusicSuccessHandler(data) {

    musicLibrary = JSON.parse(data);
    createMusicLibrary();
}

function createMusicLibrary()
{
    for (let music of musicLibrary)
    {
        console.log(music);
        let musicObject = document.createElement('img');
        musicObject.src = `images/${music.id}.png`;
        musicObject.id = `${music.id}`;
        musicObject.classList.add("musicButton");
        musicRow.appendChild(musicObject);
    }
}

function getMusicErrorHandler(data) {
    console.error(data)
}

function musicClickHandler(e) {

    let clickedItem = e.target;

    if (clickedItem.id === "stopAudio" && musicPlayer) {
           musicPlayer.pause();
    }

    if (clickedItem.id !== "stopAudio") {
        let musicTrack = `${clickedItem.id}`;

        if (musicPlayer) {
            musicPlayer.pause();
        }
        musicPlayer = new Audio(`music/${musicTrack}.mp3`);
        musicPlayer.play();
    }


}