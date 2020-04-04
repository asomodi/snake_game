function Food() {
    this.x;
    this.y;

    // create a food in a random place on board matrix
    this.setLocationOfFood = function () {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    // draw an apple rectangle on the board canvas
    this.drawTheFood = function () {
        context.fillStyle = "#A0272F";
        context.fillRect(this.x, this.y, scale, scale);
    }
}