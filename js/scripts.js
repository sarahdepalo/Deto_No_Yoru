'use strict';

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

        const restaurantContainer = document.querySelector('#restaurantContainer');

        // Restaurant Name
        const restaurantName = document.createElement('p');
        restaurantName.innerText = restaurants.data[random].restaurant_name;
        restaurantContainer.append(restaurantName);

        // Restaurant Phone number
        const restaurantNumber = document.createElement('p');
        restaurantNumber.innerText = restaurants.data[random].restaurant_phone;
        restaurantContainer.append(restaurantNumber);

        // Restaurant Address:
        const restaurantAddress = document.createElement('p');
        restaurantAddress.innerText = restaurants.data[random].address.formatted;
        restaurantContainer.append(restaurantAddress);


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
            console.log('Error')
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
            
        })
        .catch(function (error) {
            console.error("ERROR: ", error);
        })
    }

    function randomizeAnime(animeList) {
        //grabs random Anime
        const randomAnime = Math.floor(Math.random() * animeList.anime.length);
        console.log(animeList.anime[randomAnime]);

        const animeInfoContainer = document.querySelector('#animeInfoContainer')

        //Anime Title
        const animeTitle = document.createElement('p');
        animeTitle.innerText = animeList.anime[randomAnime].title;
        animeInfoContainer.append(animeTitle);

        //Anime Synopsis
        const animeSynopsis = document.createElement('p');
        animeSynopsis.innerText = animeList.anime[randomAnime].synopsis;
        animeInfoContainer.append(animeSynopsis);
       

        // Learn More Button
        const learnMoreBtn = document.createElement('a');
        learnMoreBtn.setAttribute('href', animeList.anime[randomAnime].url);
        learnMoreBtn.setAttribute('target', '_blank');
        learnMoreBtn.innerText = "LEARN MORE";
        animeInfoContainer.append(learnMoreBtn);
        
        const imageContainer = document.querySelector('#imageContainer');

        //Anime Image
        const animeImage = document.querySelector('#animeImage');
        const imageSrc = animeList.anime[randomAnime].image_url;
        animeImage.src = imageSrc;
        imageContainer.append(animeImage);
    }

    // Clears all three divs with each search:
    function clearContent() {
        document.getElementById('restaurantContainer').innerHTML = '';
        document.getElementById('animeInfoContainer').innerHTML = '';
        document.getElementById('animeImage').innerHTML = '';
    }

    const mainBtn = document.getElementById('mainBtn');

    mainBtn.addEventListener('click', function() {
        //Takes the input value and then sends it to the fetch request. 
        let zipCodeInput = document.querySelector('input').value;
        let zipCode = zipCodeInput

        // Takes the selected genre and sends it to grabGenre
        const genreChoice = document.querySelector('select').value;
        clearContent();
        fetchRestaurants(zipCode);
        grabGenre(genreChoice);
       
    })
    

})



