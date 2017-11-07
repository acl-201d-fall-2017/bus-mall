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
// create arrays for name labels, number of times clicked, number of times displayed

const prodNames = [];
const clickedSet = [];
const displayedSet = [];

for (let i = 0; i < products.length; i++) {
    prodNames.push(products[i].name);
    clickedSet.push(products[i].clicked);
    displayedSet.push(products[i].displayed);
}

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

    for (let i = 0; i < products.length; i ++) {
        const productName = clickedProduct.name;
        if (products[i].name === productName) {
            products[i].wasClicked();
            console.log(products[i]);
        }
    }
    clicks ++;
    const imageScrub = document.getElementById('img');
    // imageScrub.remove(); HOW DO I GET THE FIRST THREE TO GO AWAY?
    appendRandomProduct();
}

// function to remove event listener at 25 clicks, add data to page

function endSurvey () {
    const select = document.getElementById('select');
    select.removeEventListener('click', clickHandler);
//    clearInterval(play);   
}

if (clicks >= 5) { //change to 25 later!!
    endSurvey();
    console.table(products);
}
