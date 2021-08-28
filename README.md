# デートの夜 - Date Night

デートの夜  (Deto No Yoru) is a small website dedicated to making date nights easier. If you’re tired of never knowing what to watch or eat, Deto No Yoru is your solution! With the click of one button, our app will tell you which local restaurant you should try and what anime you should watch. If you’re still unsure of what to watch, our trending page will show you the top anime series according to [MyAnimeList](https://myanimelist.net/topanime.php). 

Plan your perfect date night at [Deto No Yoru](https://deto-no-yoru.netlify.app/index.html).

![gif of how to use Deto no Yoru](imgs/homepage.gif)

## Motivation

Each member of our team had been in a situation where hours had been spent debating with their significant other or friends over what to watch and what to eat. We set out to create a solution to end those painful hours scrolling through Netflix or Google maps. Rather than using an API based on recipes, it was important to our team that Deto No Yoru would be an easy date night fix by using local restaurants.  By generating a random restaurant and anime, our goal was to take the “thinking” out of date night planning. 

![gif of trending anime carousel](imgs/carousel.gif)

## Code Example
The following code uses the user-selected genre to fetch information from the jikan API. The array from the selected genre is then randomized. This same pattern was also used to fetch the random local restaurant.
``` javascript
    function fetchAnime(genre) {
        fetch(`https://api.jikan.moe/v3/genre/anime/${genre}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (animeList) {
                randomizeAnime(animeList)

            })
            .catch(function (error) {
                console.error("ERROR: ", error);
            })
    }

    function randomizeAnime(animeList) {
        const randomAnime = Math.floor(Math.random() * animeList.anime.length);
```

## APIs Used
* [Documenu](https://documenu.com/)
* [Jikan](https://jikan.docs.apiary.io/#) 

## Languages Used

![picture of JS, CSS, and HTML icons](imgs/icons.png)

## Contributors

* [Sarah dePalo](https://github.com/sarahdepalo) - Homepage JavaScript, Trending page JavaScript, HTML, and CSS
* [Rodrigo Ruiz](https://github.com/Rodrigo-Ruiz1) - About page JavaScript, HTML, and CSS
* [Alyna Palamarchuk](https://github.com/alynapchuk) - Homepage HTML and CSS
