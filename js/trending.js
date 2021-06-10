'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // Nav behavior: 
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]

    toggleButton.addEventListener('click', function () {
        navbarLinks.classList.toggle('active')
    })

    // Mobile Trending anime functions:

    fetch(`https://api.jikan.moe/v3/top/anime/1`)
        .then(function (response) {
            return response.json();
        })
        .then(function (anime) {
            createResultsMobile(anime);
            createResultsDesktop(anime);

        })
        .catch(function (error) {
            console.error("ERROR: ", error);
        })

    function createResultsMobile(anime) {
        const animeList = anime.top;
        //changes the array length from 50 to 25:
        animeList.length = 15;
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

    // Desktop Treding Anime Functions:
    function createResultsDesktop(anime) {
        // Splits the array with 15 results into three smaller arrays with 5 results
        const animeArray = anime.top;
        const section1Anime = animeArray.slice(0, 5);

        const section2Anime = animeArray.slice(5, 10);

        const section3Anime = animeArray.slice(10, 15);

        section1Anime.forEach(function (anime) {
            //Grabs the first section
            const section1 = document.getElementById('section1');

            //Creates an item div for each anime in the first list
            const section1item = document.createElement('div');
            section1item.classList.add('item');
            section1.append(section1item);

            //Creates the title 
            const sec1AnimeTitle = document.createElement('h2');
            sec1AnimeTitle.classList.add('heading');
            sec1AnimeTitle.innerText = `${anime.title}`
            section1item.append(sec1AnimeTitle);

            //Creates the a element:
            const sec1AElement = document.createElement('a');
            sec1AElement.setAttribute('href', anime.url);
            sec1AElement.setAttribute('target', '_blank');
            section1item.append(sec1AElement);

            //Creates the image and grabs url:
            const sec1AnimeImage = document.createElement('img');
            const imageSrc = anime.image_url;
            sec1AnimeImage.src = imageSrc;
            sec1AElement.appendChild(sec1AnimeImage);

        })

        section2Anime.forEach(function (anime) {
            //Grabs the first section
            const section2 = document.getElementById('section2');

            //Creates an item div for each anime in the first list
            const section2item = document.createElement('div');
            section2item.classList.add('item');
            section2.append(section2item);

            //Creates the title 
            const sec2AnimeTitle = document.createElement('h2');
            sec2AnimeTitle.classList.add('heading');
            sec2AnimeTitle.innerText = `${anime.title}`
            section2item.append(sec2AnimeTitle);

            //Creates the a element:
            const sec2AElement = document.createElement('a');
            sec2AElement.setAttribute('href', anime.url);
            sec2AElement.setAttribute('target', '_blank');
            section2item.append(sec2AElement);

            //Creates the image and grabs url:
            const sec2AnimeImage = document.createElement('img');
            const imageSrc = anime.image_url;
            sec2AnimeImage.src = imageSrc;
            sec2AElement.appendChild(sec2AnimeImage);

        })

        section3Anime.forEach(function (anime) {
            //Grabs the first section
            const section3 = document.getElementById('section3');

            //Creates an item div for each anime in the first list
            const section3item = document.createElement('div');
            section3item.classList.add('item');
            section3.append(section3item);

            //Creates the title 
            const sec3AnimeTitle = document.createElement('h2');
            sec3AnimeTitle.classList.add('heading');
            sec3AnimeTitle.innerText = `${anime.title}`
            section3item.append(sec3AnimeTitle);

            //Creates the a element:
            const sec3AElement = document.createElement('a');
            sec3AElement.setAttribute('href', anime.url);
            sec3AElement.setAttribute('target', '_blank');
            section3item.append(sec3AElement);

            //Creates the image and grabs url:
            const sec3AnimeImage = document.createElement('img');
            const imageSrc = anime.image_url;
            sec3AnimeImage.src = imageSrc;
            sec3AElement.appendChild(sec3AnimeImage);

        })
    }

})

