var verifyPlay;
var verifyRepeat;
var PlayListUrl = 'https://open.spotify.com/playlist/';
var ArtistUrl = 'https://open.spotify.com/artist/';

function navUrlPlayList() {
    var plID = document.getElementById("idPlayList").value;
    chrome.tabs.query( { active: true, currentWindow: true }, function( tabs ) {
        chrome.tabs.update( tabs[0].id, { url: PlayListUrl + plID } ); 
    });

}

function navUrlArtist() {
    var artistID = document.getElementById("idArtist").value;
    chrome.tabs.query( { active: true, currentWindow: true }, function( tabs ) {
        chrome.tabs.update( tabs[0].id, { url: ArtistUrl + artistID } ); 
    });

}

// go to playlist
document.getElementById('goPlayList').addEventListener('click', navUrlPlayList);

// start attack
document.getElementById('goArtist').addEventListener('click', navUrlArtist);