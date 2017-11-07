'use strict';

const clicks = 0;

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



// Function to select a random product and put it on the page

// function appendRandomProduct () {
//     const select = document.getElementById('select');
//     const randomProduct = products[Math.floor(Math.random() * products.length)];
//     const randomProductEle = randomProduct.render();
//     select.appendChild(randomProductEle);
//     randomProduct.wasDisplayed();
// }


// Put three random products on page

function appendRandomProduct () {
    for (let i = 0; i < 3; i ++) {
        const select = document.getElementById('select');
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        const randomProductEle = randomProduct.render();
        select.appendChild(randomProductEle);
        randomProduct.wasDisplayed();
    };
}

appendRandomProduct();



const choice = document.getElementById('select');
choice.addEventListener('click', clickHandler);

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
}







// function getRandomArrayElements(arr, count) {
//     const shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
//     while (i-- > min) {
//         index = math.floor((i+1) * Math.random());
//         temp = shuffled[index];
//         shuffled[index] = shuffled[i];
//         shuffled[i] = temp;
//     }
//     return shuffled.slice(min);
// }



// function endGame () {
//     +    // remove click listener on game section
//          const select = document.getElementById('select');
//          game.removeEventListener('click', clickHandler);
//     -    clearInterval(play);

//          console.table(products);
//      } 
