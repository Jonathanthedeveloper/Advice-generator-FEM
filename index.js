const button = document.querySelector(".dice-contain");
const dice = document.querySelector(".dice");
const id = document.querySelector(".id");
const advice = document.querySelector(".advice");

button.addEventListener("click", getData);

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
}
document.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        getData();

    }
});

getData();
