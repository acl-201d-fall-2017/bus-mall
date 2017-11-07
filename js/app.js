'use strict';

let clicks = 0;

const bag = new Product('bag', 'bag.jpg');
const banana = new Product('banana', 'banana.jpg');
const bathroom = new Product('bathroom', 'bathroom.jpg');
const boots = new Product('boots', 'boots.jpg');
const breakfast = new Product('breakfast', 'breakfast.jpg');
const bubblegum = new Product('bubblegum', 'bubblegum.jpg');
const chair = new Product('chair', 'chair.jpg');
const cthulhu = new Product('cthulhu', 'cthulhu.jpg');
const dogDuck = new Product('dog duck', 'dog-duck.jpg');
const dragon = new Product('dragon', 'dragon.jpg');
const pen = new Product('pen', 'pen.jpg');
const petSweep = new Product('pet sweep', 'pet-sweep.jpg');
const scissors = new Product('scissors', 'scissors.jpg');
const shark = new Product('shark', 'shark.jpg');
const sweep = new Product('sweep', 'sweep.png');
const tauntaun = new Product('tauntaun', 'tauntaun.jpg');
const unicorn = new Product('unicorn', 'unicorn.jpg');
const usb = new Product('usb', 'usb.gif');
const waterCan = new Product('water can', 'water-can.jpg');
const wineGlass = new Product('wine glass', 'wine-glass.jpg');

const products = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

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
}

const choice = document.getElementById('select');
choice.addEventListener('click', clickHandler);

// write a function that will store clicks and displays, and then re-append random product each time the page is clicked on.

appendRandomProduct();

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

    if (clicks >= 5) { //change to 25 later!!
        endSurvey();
        console.table(products);
    }
}

// function to remove event listener at 25 clicks, add data to page

const prodNames = [];
const clickedSet = [];
const displayedSet = [];

function endSurvey () {
    const select = document.getElementById('select');
    select.removeEventListener('click', clickHandler);

    for (let i = 0; i < products.length; i++) {
        prodNames.push(products[i].name);
        clickedSet.push(products[i].clicked);
        displayedSet.push(products[i].displayed);
    }
}

// add chart.js chart using Canvas element:

const chartCanvas = document.getElementById('chart');
const chartCtx = chartCanvas.getContext('2d');

const chart = new Chart(
    chartCtx,
    {
        type: 'bar',
        data: {
            labels: prodNames,
            datasets: [
                {
                    label:'Product Name',
                    data: clickedSet,
                    backgroundColor: 'rgba(255,100,20,1)',
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