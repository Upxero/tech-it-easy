// OPDRACHTEN

// Opdracht 1b

const soldOut = inventory.filter((tv) => {
    return tv.sold === tv.originalStock;
})

console.log(soldOut);

// Opdracht 1c

const hasAmbiLight = inventory.filter((tv) => {
    return tv.options.ambiLight === true;
})

console.log(hasAmbiLight);

// Opdracht 1d

const lowToHighPrice = inventory.sort((a, b) => a.price - b.price);

console.log(lowToHighPrice);

// Opdracht 2a

let soldItems = 0;

for (let i = 0; i < inventory.length; i++) {
    soldItems = soldItems + inventory[i].sold;
}

console.log(soldItems);

// Opdracht 2b

const soldItemsContainer = document.getElementById('items-sold');

soldItemsContainer.innerHTML = `
  <h3>Aantal verkochte items<h3>
  <h2>${soldItems}</h2>
`;

// opdracht 2c

let purchasedItems = 0;

for (let i = 0; i < inventory.length; i++) {
    purchasedItems = purchasedItems + inventory[i].originalStock;
}

console.log(purchasedItems);

// opdracht 2d

const boughtItemsContainer = document.getElementById('items-bought');

boughtItemsContainer.innerHTML =
    `<h3>Aantal ingekochte items<h3>
     <h2>${purchasedItems}</h2>`;

// Opdracht 2e

const itemsToSellContainer = document.getElementById('to-sell');

itemsToSellContainer.innerHTML = `
  <h3>Items te verkopen<h3>
  <h2>${purchasedItems - soldItems}</h2>
`;

// Opdracht 3a/3b

function getBrandList(array) {
    const brandsList = document.getElementById('inventory-brands');
    const listItems = array.map((tv) => {
        return `<li>${tv.brand}</li>`;
    });

    brandsList.innerHTML = `${listItems.join('')}`;
}

getBrandList(inventory);

// Opdracht 4a

function getTv(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

console.log(getTv);

// Opdracht 4b

function getPrice(tv) {
    return `€${tv.price},-`;
}

console.log(getPrice);

// Opdracht 4c

function getScreenSize(array) {
    let outcome = '';
    for (i = 0; i < array.length; i++) {
        const screenSizeInch = array[i];
        const screenSizeCm = array[i] * 2.54;
        outcome = outcome + `${screenSizeInch} inch (${screenSizeCm} cm)`;
        if (i < array.length - 1) {
            outcome = `${outcome} | `;
        }
    }
    return outcome;
}

// Opdracht 4d

const singleTv = document.getElementById('single-tv');

singleTv.innerHTML =
    `<p>${getTv(inventory[4])}</p>
     <p>${getPrice(inventory[4])}</p>
     <p>${getScreenSize(inventory[4].availableSizes)}</p>`;
    
// Opdracht 4e

function getTvList(tvArray) {
    const tvList = document.getElementById('all-tv');
    const tvModels = tvArray.map((tv) => {
        return `
      <li>
        <p>${getTv(tv)}</p>
        <p>${getPrice(tv)}</p>
        <p>${getScreenSize(tv.availableSizes)}</p>
      </li>
    `;
    });

    tvList.innerHTML = `${tvModels.join('')}`;
}

getTvList(inventory);
