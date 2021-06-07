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
        
    }
    const mainBtn = document.getElementById('mainBtn');

    mainBtn.addEventListener('click', function() {
        //Takes the input value and then sends it to the fetch request. 
        let zipCodeInput = document.querySelector('input').value;
        let zipCode = zipCodeInput
        fetchRestaurants(zipCode)
    })

    function fetchAnime() {
        fetch(`https://api.jikan.moe/v3/genre/anime/2`)
        .then(function(response) {
            return response.json;
        })
        .then(function(data) {
            console.log(data.anime)
        })
        .catch(function (error) {
            console.error("ERROR: ", error);
        })
    }

    fetchAnime();

  
    

})



