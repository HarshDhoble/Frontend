const startButton = document.getElementById('start-btn')
const next1 = document.querySelector('.joke');
const questionContainerElement = document.getElementById('question-container')
startButton.addEventListener('click', startGame)
function startGame() {
    startButton.classList.add('hide')
    fetch("http://api.icndb.com/jokes/random")
    .then((res) => {
        res.json().then((result) => {
            let data=result;
            console.log(data);
            next1.innerText = data.value.joke;
        });
    })
    .catch((err) => {
        console.log(err);
    });
    questionContainerElement.classList.remove('hide')
    next();
  }
