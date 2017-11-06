function Product (name, src) {
    this.name = name;
    this.src = './img/' + src;
    this.displayed = 0;
    this.clicked = 0;
}

Product.prototype.wasDisplayed = function () {
    this.displayed += 1;
};

Product.prototype.wasClicked = function () {
    this.clicked += 1;
};

Product.prototype.render = function () {
    const ele = document.createElement('img');
    ele.src = this.src;
    ele.name = this.name;
    return ele;
};

