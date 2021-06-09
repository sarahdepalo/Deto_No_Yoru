'use strict';

document.addEventListener('DOMContentLoaded', function () {

    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]

    toggleButton.addEventListener('click', function () {
        navbarLinks.classList.toggle('active')
    })

    fetch (`https://api.jikan.moe/v3/top/anime/1`)
        .then(function (response) {
            return response.json();
        })
        .then(function(anime) {
            createResults(anime);
           
        })
        .catch(function(error) {
            console.error("ERROR: ", error);
        })

    function createResults(anime) {
        const animeList = anime.top;
        //changes the array length from 50 to 25:
        animeList.length = 20;
        console.log(anime.top);

        animeList.forEach(function (anime) {
            //Grabs the main container that the following div will attach to
            const mainContainer = document.getElementById('mainContainer');

            //Creates individual container for each anime:
            const animeContainer = document.createElement('div');
            animeContainer.classList.add('anime-container');
            mainContainer.append(animeContainer);

            //Creates the image column for the anime:
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('col')
            animeContainer.append(imageContainer);

            //Creates the image for the col:
            const animeImage = document.createElement('img');
            const imageSrc = anime.image_url;
            animeImage.src = imageSrc;
            imageContainer.append(animeImage);

            //Creates content Column:
            const infoContainer = document.createElement('div');
            infoContainer.classList.add('col');
            animeContainer.append(infoContainer);

            //Creates Anime Title
            const animeName = document.createElement('h2');
            animeName.innerText = `${anime.title}`;
            infoContainer.append(animeName);
            
            //Creates Anime Type
            const animeType = document.createElement('p');
            animeType.innerText = `Type: ${anime.type}`;
            infoContainer.append(animeType);

            //Creates Start Date
            const animeStartDate = document.createElement('p');
            animeStartDate.innerText = `Start Date: ${anime.start_date}`;
            infoContainer.append(animeStartDate);

            //Creates End Date
            const animeEndDate = document.createElement('p');
            animeEndDate.innerText = `End Date: ${anime.end_date}`;
            infoContainer.append(animeEndDate);

            //Creates Learn More Button:
            const learnMoreBtn = document.createElement('a');
            learnMoreBtn.innerText = `LEARN MORE`;
            learnMoreBtn.setAttribute('href', anime.url);
            learnMoreBtn.setAttribute('target', '_blank');
            learnMoreBtn.classList.add('learnMoreBtn')
            infoContainer.append(learnMoreBtn);

            //Creates Rating Column:
            const ratingsContainer = document.createElement('div');
            ratingsContainer.classList.add('col')
            animeContainer.append(ratingsContainer);

            //Creates h3 Rating Title:
            const ratingTitle = document.createElement('h3');
            ratingTitle.innerText = "Rating";
            ratingsContainer.append(ratingTitle);

            //Creates Neon Text Rating
            const rating = document.createElement('p');
            rating.innerText = `${anime.score}`;
            rating.classList.add('neonText');
            ratingsContainer.append(rating);
        })
    }

})

