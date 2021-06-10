'use strict';

//Fetching Favorite Anime
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]

    toggleButton.addEventListener('click', function () {
        navbarLinks.classList.toggle('active')
    })

    const favoriteButton1 = document.querySelector('#favoriteButton1');
    const favoriteButton2 = document.querySelector('#favoriteButton2');
    const favoriteButton3 = document.querySelector('#favoriteButton3');
    function fetchFavoriteAnime1() {
        fetch(`https://api.jikan.moe/v3/anime/263`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                favoriteAnime1(data)
            })
            .catch(function (error) {
                console.error('ERROR: ', error)
            });
    }
    function fetchFavoriteAnime2() {
        fetch(`https://api.jikan.moe/v3/anime/32281`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                favoriteAnime2(data)
            })
            .catch(function (error) {
                console.error('ERROR: ', error)
            });
    }
    function fetchFavoriteAnime3() {
        fetch(`https://api.jikan.moe/v3/anime/33`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                favoriteAnime2(data)
            })
            .catch(function (error) {
                console.error('ERROR: ', error)
            });
    }

    //Fetches data for favorite anime 1
    function favoriteAnime1(data) {
        console.log(data);

        //Creates container for image, appends to modal content
        const modal = document.querySelector('#modal');
        const imgContainer = document.createElement('div');
        imgContainer.setAttribute('id', 'imgContainer')
        modal.append(imgContainer);

        const animeImg = document.createElement('img');
        const imgUrl = data.image_url;
        animeImg.src = imgUrl
        imgContainer.append(animeImg);

        //Creates container for anime information, appends to modal content
        const animeTitle = document.createElement('h6');
        animeTitle.setAttribute('id', 'animeTitle');
        const infoContainer = document.createElement('div');
        infoContainer.setAttribute('id', 'infoContainer')
        const title = data.title;
        animeTitle.innerText = title;
        infoContainer.append(animeTitle);
        modal.append(infoContainer);

        const animeType = document.createElement('p');
        const type = data.type;
        console.log(type)
        animeType.innerText = `Type: ${type}`;
        infoContainer.append(animeType);

        const animeScore = document.createElement('p');
        const score = data.score;
        animeScore.innerText = score;
        infoContainer.append(animeScore);

        //Creates link to page with all the information for the anime, appends to info container
        const learnMoreBtn = document.createElement('a');
        learnMoreBtn.setAttribute('href', data.url)
        learnMoreBtn.innerText = "LEARN MORE";
        infoContainer.append(learnMoreBtn);

    }

    //Fetches data for favorite anime 2
    function favoriteAnime2(data) {
        console.log(data)

        //Creates container for image, appends to modal content
        const modal = document.querySelector('#modal');
        const imgContainer = document.createElement('div');
        imgContainer.setAttribute('id', 'imgContainer')
        modal.append(imgContainer);

        const animeImg = document.createElement('img');
        const imgUrl = data.image_url;
        animeImg.src = imgUrl
        imgContainer.append(animeImg);

        //Creates container for anime information, appends to modal content
        const animeTitle = document.createElement('h6');
        animeTitle.setAttribute('id', 'animeTitle');
        const infoContainer = document.createElement('div');
        infoContainer.setAttribute('id', 'infoContainer')
        const title = data.title;
        animeTitle.innerText = title;
        infoContainer.append(animeTitle);
        modal.append(infoContainer);

        const animeType = document.createElement('p');
        const type = data.type;
        console.log(type)
        animeType.innerText = `Type: ${type}`;
        infoContainer.append(animeType);

        const animeScore = document.createElement('p');
        const score = data.score;
        animeScore.innerText = score;
        infoContainer.append(animeScore);

        //Creates link to page with all the information for the anime, appends to info container
        const learnMoreBtn = document.createElement('a');
        learnMoreBtn.setAttribute('href', data.url)
        learnMoreBtn.innerText = "LEARN MORE";
        infoContainer.append(learnMoreBtn);

    }

    //Fetches data for favorite anime 3
    function favoriteAnime3(data) {
        console.log(data)

        //Creates container for image, appends to modal content
        const modal = document.querySelector('#modal');
        const imgContainer = document.createElement('div');
        imgContainer.setAttribute('id', 'imgContainer')
        modal.append(imgContainer);

        const animeImg = document.createElement('img');
        const imgUrl = data.image_url;
        animeImg.src = imgUrl
        imgContainer.append(animeImg);

        //Creates container for anime information, appends to modal content
        const animeTitle = document.createElement('h6');
        animeTitle.setAttribute('id', 'animeTitle');
        const infoContainer = document.createElement('div');
        const title = data.title;
        animeTitle.innerText = title;
        infoContainer.append(animeTitle);
        modal.append(animeTitle);

        const animeType = document.createElement('p');
        const type = data.type;
        console.log(type)
        animeType.innerText = `Type: ${type}`;
        infoContainer.append(animeType);

        const animeScore = document.createElement('p');
        const score = data.score;
        animeScore.innerText = score;
        infoContainer.append(animeScore);

        //Creates link to page with all the information for the anime, appends to info container
        const learnMoreBtn = document.createElement('a');
        learnMoreBtn.setAttribute('href', data.url)
        learnMoreBtn.innerText = "LEARN MORE";
        infoContainer.append(learnMoreBtn);

    }

    //Function to make overlay visible/invisible
    function toggleModal() {
        const overlay = document.querySelector('#overlay');
        overlay.classList.toggle('visible');
    }

    //Clears information inside modal
    function clearFavorites() {
        document.querySelector('#modal').innerText = '';
    }

    //Button for overlay, favorite anime data
    favoriteButton1.addEventListener('click', function () {
        fetchFavoriteAnime1();
        toggleModal();

    })

    //Button for overlay, favorite anime data
    favoriteButton2.addEventListener('click', function () {
        fetchFavoriteAnime2();
        toggleModal();

    })

    //Button for overlay, favorite anime data
    favoriteButton3.addEventListener('click', function () {
        fetchFavoriteAnime3();
        toggleModal();

    })

    //Runs toggleModal function when clicking anywhere on the overlay
    const overlay = document.querySelector('#overlay');
    overlay.addEventListener('click', function () {
        toggleModal();
        clearFavorites();
    })

    //Should run toggleModal function when clicking on the X button
    const closeModalButton = document.querySelector('#closeModal');
    closeModalButton.addEventListener('click', function () {
        toggleModal();
    })
})