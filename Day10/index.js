const cards = document.querySelectorAll(".card");
console.log(cards);
const move = document.querySelector('.move');
//variables
var isFlipped = false;
var firstCard;
var secondCard;
var lock=false;
var count=0;
const book = () => {
  move.innerHTML = "No of Flips: " + count;
}
book();
cards.forEach((card) => card.addEventListener("click", flip));
function flip() {
  if(lock)
  {
    return;
  }
  if(this===firstCard)
  {
    return;
  }
  //   console.log("Card flipped");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();
  }
  count++;
  book();
}

function checkIt() {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  //   console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  //   console.log("Failed");
  lock=true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}

function reset() {
  lock=false;
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

//TODO: shuffle

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
