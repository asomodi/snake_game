// create a board
const canvas = document.querySelector('.canvas');
const context = canvas.getContext('2d');
const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');

// set a size the elements of board
let scale = 30;
let rows = canvas.height / scale;
let columns = canvas.width / scale;
let score = 0;

var snake;

// build the board: create a snake, food, etc.
(function setup() {
  snake = new Snake();
  food = new Food();
  food.setLocationOfFood();
  //console.log(food);

  // create a millisecond timer aka setInterval(250ms)
  window.setInterval(() => {
    // set the snake movement, just the head going forward, not the whole snake(aka not going bigger)
    context.clearRect(0, 0, canvas.width, canvas.height);
    food.drawTheFood();
    snake.update();
    snake.drawTheSnake();

    if (snake.eat(food)) {
      //console.log("eat");
      // new apple coming
      food.setLocationOfFood();
    }

    // always refresh the score h1
    snake.checkCollision();
    document.querySelector('.score').innerText = snake.totalEatenApples;
  }, 250);
})();

// set the arrow keys,
window.addEventListener('keydown', (event) => {
  const direction = event.key.replace('Arrow', '');
  // put the snake movement to them
  snake.changeDirection(direction);
});

// Rules and close event handlers
rulesBtn.addEventListener('click', () => rules.classList.add('show'));
closeBtn.addEventListener('click', () => rules.classList.remove('show'));
