window.addEventListener('load', init);
let musicPlayer;
let apiUrl = './webservice';
let musicLibrary;
let buttonRow;
let activeAudio
let activeAudioButton;
let detailModel;
let detailModelContent;
let detailModelCloseButton;
let curentMusic;
let favorites;


function init() {
    if (localStorage.getItem('favorites'))
    {
        favorites = JSON.parse(localStorage.getItem('favorites'));
    }
    detailModel = document.getElementById('music-detail');
    detailModelContent = detailModel.querySelector('.modal-content');
    detailModelCloseButton = detailModel.querySelector('.modal-close');
    getMusic(apiUrl, getMusicSuccessHandler)
    buttonRow = document.getElementById('buttonRow');
    let musicItem = document.getElementsByClassName('musicButton');
    //Add event listener to all items

    buttonRow.addEventListener('click', musicClickHandler)
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

    musicLibrary = data;
    createMusicLibrary();
}

function createMusicLibrary() {
    for (let music of musicLibrary) {
        let container = document.createElement('div');
        buttonRow.appendChild(container);
        let musicObject = document.createElement('img');
        musicObject.src = `images/${music.fileSource}.png`;
        musicObject.id = `${music.id}`;
        musicObject.dataset.source = music.fileSource;
        musicObject.classList.add("musicImage");
        musicObject.dataset.id = music.id;
        let title = document.createElement('h2');
        title.innerHTML = `${music.name}`;
        title.classList.add("musicTitle");
        container.appendChild(title);
        container.classList.add("musicContainer");
        container.appendChild(musicObject);
        if (favorites && favorites.indexOf(musicObject.id) !== -1)
        {
            musicObject.parentElement.classList.add('favorite');
        }
        let musicButton = document.createElement('button');
        musicButton.dataset.fileSource = music.fileSource;
        musicButton.classList.add('musicButton');
        musicButton.innerHTML = "Play"
        container.appendChild(musicButton);
    }
}

function getMusicErrorHandler(data) {
    console.error(data)
}

function musicClickHandler(e) {
    let clickedItem = e.target;

    if (clickedItem.nodeName === 'BUTTON') {
        if (clickedItem.dataset.fileSource === activeAudio) {
            musicPlayer.pause();
            activeAudio = null;
            clickedItem.innerHTML = "Play";
            clickedItem.classList.remove('activeAudio');
            return;
        }

        activeAudio = `${clickedItem.dataset.fileSource}`;

        if (musicPlayer) {
            musicPlayer.pause();
            activeAudioButton.classList.remove('activeAudio');
            activeAudioButton.innerHTML = "Play";
        }
        musicPlayer = new Audio(`music/${clickedItem.dataset.fileSource}.mp3`);
        musicPlayer.play();
        clickedItem.innerHTML = "Pauzeer";
        clickedItem.classList.add('activeAudio');
        activeAudioButton = clickedItem;
    }

    if (clickedItem.nodeName === 'IMG') {
       detailModelContent.dataset.curentImage = clickedItem.dataset.id;

        getMusic(`${apiUrl}?id=${clickedItem.id}`, musicDetails);
    }

    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }


}

function musicDetails(data) {
    let download = `music/${data.fileSource}.mp3`;
    detailModelContent.innerHTML = '';
    let artist = document.createElement('h1');
    artist.innerHTML = `Artiest: ${data.Artist}`;
    let fileSize = document.createElement('p');
    fileSize.innerHTML = `File size ${data.fileSourceSize}`;
    detailModelContent.appendChild(artist);
    detailModelContent.appendChild(fileSize);
    let downloadButton = document.createElement('button');
    downloadButton.id = "downloadButoon";
    downloadButton.innerHTML = `<a href= ${download}>Download</a>`;
    detailModelContent.appendChild(downloadButton);
    let favorite = document.createElement('button');
    favorite.id = 'favoriteButton';

    favorite.innerHTML = "Favoriet Maken";
    detailModelContent.appendChild(favorite);
    if (favorites.indexOf(favorite.parentElement.dataset.curentImage) !== -1)
    {
        favorite.innerHTML = 'Uit favorieten verwijderen';
    }

    //open model
    detailModel.classList.add('open');

    detailModel.addEventListener('click', closeListener);
}


function closeListener(e) {
    let clickedItem = e.target;
    if (clickedItem.id === 'modal-close') {
        detailModel.classList.remove('open');
    }

    if (clickedItem.id === 'favoriteButton') {
        let id = clickedItem.parentElement.dataset.curentImage;
        let image = document.getElementById(id);
        if (favorites)
        {
            if (favorites.indexOf(id) === -1)
            {
                favorites.push(id);
                localStorage.setItem('favorites',JSON.stringify(favorites));
                image.parentElement.classList.add('favorite');
                clickedItem.innerHTML = "Uit favorieten halen";
            }
            else
            {
                let position = favorites.indexOf(id);
                favorites.splice(position,1);

                localStorage.setItem('favorites',JSON.stringify(favorites));
                image.parentElement.classList.remove('favorite');
                clickedItem.innerHTML = "favoriet maken";
            }
        }
        else
        {
            favorites = [id];
            localStorage.setItem('favorites',JSON.stringify(favorites));
            image.parentElement.classList.add('favorite');

        }
    }

}