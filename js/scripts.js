'use strict'

document.addEventListener('DOMContentLoaded', function () {

    function fetchRestaurants(zipCode) {
        fetch(`https://api.documenu.com/v2/restaurants/zip_code/${zipCode}?key=b1b2d23b1d20a5481f7b5222b3ee79b3`)
            .then(function (response) {
                return response.json();
            })
            .then(function (restaurants) {
                console.log(restaurants);
                radomizeRestaurants(restaurants);
            })
            .catch(function (error) {
                console.error("ERROR: ", error);
            })
        
    }
    function radomizeRestaurants(restaurants) {
        // Randomizes the restaurants.data array
        const random = Math.floor(Math.random() * restaurants.data.length);
        // Use restaurants.data[random].restaurant_name structure to grab data
        console.log(restaurants.data[random]);
        // need to add pieces here to update innerHTML
    }


    function grabGenre(genreChoice) {
        // Matches the genre with the number from Jikan
        let genre = 0;
        if (genreChoice === "action") {
            genre = 1;
        }  else if (genreChoice === "comedy") {
            genre = 4;
        } else if (genreChoice === "drama") {
            genre = 8;
        } else if (genreChoice === "horror") {
            genre = 14;
        } else if (genreChoice === "romance") {
            genre = 22;
        }
        else {
            console.log('hello')
        }
        fetchAnime(genre);

    }

    function fetchAnime(genre) {
        fetch(`https://api.jikan.moe/v3/genre/anime/${genre}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(animeList) {
            randomizeAnime(animeList)
            // console.log(animeList);
        })
        .catch(function (error) {
            console.error("ERROR: ", error);
        })
    }

    function randomizeAnime(animeList) {
        const randomAnime = Math.floor(Math.random() * animeList.anime.length);
        console.log(animeList.anime[randomAnime]);
        // Still need to add in the pieces to update innerHTML
    }

    const mainBtn = document.getElementById('mainBtn');

    mainBtn.addEventListener('click', function() {
        //Takes the input value and then sends it to the fetch request. 
        let zipCodeInput = document.querySelector('input').value;
        let zipCode = zipCodeInput

        // Takes the selected genre and sends it to grabGenre
        const genreChoice = document.querySelector('select').value;

        fetchRestaurants(zipCode)
        grabGenre(genreChoice);
    })
    

})