# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents


  - [The challenge](#the-challenge)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)




### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon



- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [live site URL](http://advice-generator-fem-five.vercel.app/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Making GET request to an API

```js
function getData() {
    dice.classList.add('dice-animate')
  const url = `https://api.adviceslip.com/advice`;
  fetch(url)
    .then(function (response) {

      return response.json();
    })
    .then(function (data) {
        dice.classList.remove('dice-animate')
      id.textContent = data.slip.id;
      advice.textContent = data.slip.advice;
      
    });
```



## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Errorman2003)
- Twitter - [@yourusername](https://www.twitter.com/err_or_man)
