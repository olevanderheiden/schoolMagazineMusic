window.addEventListener('load', init);
let musicPlayer;

function init() {
    let musicRow = document.getElementById('musicRow');
    let musicItem = document.getElementsByClassName('musicButton');
    //Add event listener to all items
    for (let i = 0; i < musicItem.length; i++) {
        musicItem[i].addEventListener('click', musicClickHandler);
    }
}


function musicClickHandler(e) {

    let clickedItem = e.target;

    if (clickedItem.id === "stopAudio" && musicPlayer) {
           musicPlayer.pause();
    }

    if (clickedItem.id !== "stopAudio") {
        let musicTrack = `${clickedItem.id}.mp3`;

        if (musicPlayer) {
            musicPlayer.pause();
        }
        musicPlayer = new Audio(`music/${musicTrack}`);
        musicPlayer.play();
    }


}