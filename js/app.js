'use strict';

let clicks = 0;

let products = [];

const prodNames = [];
const clickedSet = [];
const displayedSet = [];

if (localStorage.products){
    const productsArray = JSON.parse(localStorage.products);
    console.log('productsArray:', productsArray);

    for(let i = 0; i < productsArray.length; i++) {
        const product = new Product(productsArray[i].name, productsArray[i].src, productsArray[i].displayed, productsArray[i].clicked );
        products.push(product);
    }
}
else {
    const bag = new Product('bag', './img/bag.jpg');
    const banana = new Product('banana', './img/banana.jpg');
    const bathroom = new Product('bathroom', './img/bathroom.jpg');
    const boots = new Product('boots', './img/boots.jpg');
    const breakfast = new Product('breakfast', './img/breakfast.jpg');
    const bubblegum = new Product('bubblegum', './img/bubblegum.jpg');
    const chair = new Product('chair', './img/chair.jpg');
    const cthulhu = new Product('cthulhu', './img/cthulhu.jpg');
    const dogDuck = new Product('dog duck', './img/dog-duck.jpg');
    const dragon = new Product('dragon', './img/dragon.jpg');
    const pen = new Product('pen', './img/pen.jpg');
    const petSweep = new Product('pet sweep', './img/pet-sweep.jpg');
    const scissors = new Product('scissors', './img/scissors.jpg');
    const shark = new Product('shark', './img/shark.jpg');
    const sweep = new Product('sweep', './img/sweep.png');
    const tauntaun = new Product('tauntaun', './img/tauntaun.jpg');
    const unicorn = new Product('unicorn', './img/unicorn.jpg');
    const usb = new Product('usb', './img/usb.gif');
    const waterCan = new Product('water can', './img/water-can.jpg');
    const wineGlass = new Product('wine glass', './img/wine-glass.jpg');

    products = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

}

appendRandomProduct();

// Put three random products on page, no duplicates in each three

function appendRandomProduct () {
    const tempArray = [];
    const select = document.getElementById('select');
    for (let i = 0; i < 3; i ++) {
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        if (tempArray.includes(randomProduct) === true) {
            i = i - 1;
        }
        else {
            const randomProductEle = randomProduct.render();
            select.appendChild(randomProductEle);
            randomProduct.wasDisplayed();
            tempArray.push(randomProduct);
        }
    };
    localStorage.setItem('products', JSON.stringify(products));
}

const choice = document.getElementById('select');
choice.addEventListener('click', clickHandler);

function clickHandler (e) {
    const clickedProduct = e.target;
    console.log(clickedProduct);

    // Checks name of DOM element, ties to JS object, adjusts object props accordingly
    for (let i = 0; i < products.length; i ++) {
        const productName = clickedProduct.name;
        if (products[i].name === productName) {
            products[i].wasClicked();
            console.log(products[i]);
        }
    }
    clicks ++;

    const select = clickedProduct.parentNode;
    //removes the three images:
    while (select.hasChildNodes()) {
        select.removeChild(select.lastChild);
    }

    appendRandomProduct();

    if (clicks >= 3) { //change to 25 later!!
        endSurvey();
        console.table(products);

        const chart = new Chart( //eslint-disable-line
            chartCtx,
            {
                type: 'bar',
                data: {
                    labels: prodNames,
                    datasets: [
                        {
                            label:'Product Name',
                            data: clickedSet,
                            backgroundColor: 'rgb(117, 45, 30)',
                        }
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Products Chosen',
                    }
                }
            }
        );
    }
}

// add chart.js chart using Canvas element:

const chartCanvas = document.getElementById('chart');
const chartCtx = chartCanvas.getContext('2d');

// function to remove event listener at 25 clicks, add data to page

function endSurvey () {
    const select = document.getElementById('select');
    select.removeEventListener('click', clickHandler);

    for (let i = 0; i < products.length; i++) {
        prodNames.push(products[i].name);
        clickedSet.push(products[i].clicked);
        displayedSet.push(products[i].displayed);
    }
}