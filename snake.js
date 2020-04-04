function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = scale * 1
  this.ySpeed = 0;
  this.totalEatenApples = 0;
  this.bodyOfSnake = [];

  // draw a snake color, size, etc.
  this.drawTheSnake = function () {
    context.fillStyle = "#5C9327";

    // loop through of the snake body, and draw the new size 
    for (let i = 0; i < this.bodyOfSnake.length; i++) {
      context.fillRect(this.bodyOfSnake[i].x, this.bodyOfSnake[i].y, scale, scale);
    }

    // draw the current position
    context.fillRect(this.x, this.y, scale, scale);
  };

  // make longer the snake 
  this.update = function () {
    // update the snake body
    for (let i = 0; i < this.bodyOfSnake.length - 1; i++) {
      this.bodyOfSnake[i] = this.bodyOfSnake[i + 1];
    }

    // the body of snake is an array, and we put the eaten apples in the array!
    this.bodyOfSnake[this.totalEatenApples - 1] = { x: this.x, y: this.y };

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // when the snake touch the border, come out an the other side 
    // x + y = the head of the snake: x the nose, y the top of the head 
    if (this.x > canvas.width) {
      this.x = 0
    }

    if (this.y > canvas.height) {
      this.y = 0;
    }

    if (this.x < 0) {
      this.x = canvas.width;
    }

    if (this.y < 0) {
      this.y = canvas.height;
    }
  }

  // set the movement
  this.changeDirection = function (direction) {
    switch (direction) {
      //set the new coordinate to the key
      case "Up":
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case "Down":
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case "Left":
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case "Right":
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  }

  this.eat = function (food) {
    //console.log(food);
    // if nose of the snake in a same place as the apple
    if (this.x === food.x && this.y === food.y) {
      this.totalEatenApples++;
      return true;
    }
    return false;
  }

  this.checkCollision = function () {
    for (let i = 0; i < this.bodyOfSnake.length; i++) {
      // whenever the nose meet another bodypart
      if (this.x === this.bodyOfSnake[i].x && this.y === this.bodyOfSnake[i].y) {
        //console.log("colliding");
        // reset the numbers of eaten apple, and start a new game
        this.totalEatenApples = 0;
        this.bodyOfSnake = [];
      }
    }
  }

}
