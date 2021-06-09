'use strict';

// Tester Code - add this into the rest of the js files in the proper spot

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', function () {
    navbarLinks.classList.toggle('active')
})