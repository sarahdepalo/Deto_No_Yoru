'use strict';

//Fetching Favorite Anime
document.addEventListener('DOMContentLoaded', function () {
    const favoriteButton1 = document.querySelector('#favoriteButton1');
    const favoriteButton2 = document.querySelector('#favoriteButton2');
    const favoriteButton3 = document.querySelector('#favoriteButton3');
    function fetchFavoriteAnime () {
        fetch(`https://api.jikan.moe/v3/anime/32281`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            favoriteAnime(data)
        })
        .catch(function (error) {
            console.error('ERROR: ', error)
        });
    }
    function favoriteAnime(data) {
        const paragraphText = document.getElementById('headshotText1')
        console.log(data)
        console.log(data.title);
        paragraphText.innerText = data.title
    }

    favoriteButton1.addEventListener('click', function () {       
        fetchFavoriteAnime();
    })
})