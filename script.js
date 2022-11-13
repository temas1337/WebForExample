const hideMenu = document.getElementById('hidenMenu');
const menu = document.getElementById('menu');
const input = document.getElementById('input');
const search = document.getElementById('search');
const items = document.getElementById('items')
const btn = document.getElementById('btn')

const arrayItems = []
arrayItems[0] = {
    name: "ELLERY X M'O CAPSULE",
    description: "Known for her sculptural takes" +
        " on traditional tailoring, Australian " +
        "arbiter of cool Kym Ellery teams up " +
        "with Moda Operandi.",
    price: '$51.00',
    image: "./img/cardItem/itemOne.jpg",
}
arrayItems[1] = {
    name: "ELLERY X M'O CAPSULE",
    description: "Known for her sculptural takes" +
        " on traditional tailoring, Australian " +
        "arbiter of cool Kym Ellery teams up " +
        "with Moda Operandi.",
    price: '$52.00',
    image: "./img/cardItem/itemTwo.jpg",
}
arrayItems[2] = {
    name: "ELLERY X M'O CAPSULE",
    description: "Known for her sculptural takes" +
        " on traditional tailoring, Australian " +
        "arbiter of cool Kym Ellery teams up " +
        "with Moda Operandi.",
    price: '$53.00',
    image: "./img/cardItem/itemThree.jpg",
}
arrayItems[3] = {
    name: "ELLERY X M'O CAPSULE",
    description: "Known for her sculptural takes" +
        " on traditional tailoring, Australian " +
        "arbiter of cool Kym Ellery teams up " +
        "with Moda Operandi.",
    price: '$54.00',
    image: "./img/cardItem/itemFour.jpg",
}
arrayItems[4] = {
    name: "ELLERY X M'O CAPSULE",
    description: "Known for her sculptural takes" +
        " on traditional tailoring, Australian " +
        "arbiter of cool Kym Ellery teams up " +
        "with Moda Operandi.",
    price: '$55.00',
    image: "./img/cardItem/itemFive.jpg",
}
arrayItems[5] = {
    name: "ELLERY X M'O CAPSULE",
    description: "Known for her sculptural takes" +
        " on traditional tailoring, Australian " +
        "arbiter of cool Kym Ellery teams up " +
        "with Moda Operandi.",
    price: '$56.00',
    image: "./img/cardItem/itemSix.jpg",
}

arrayItems.forEach(inner)



function inner (e) {
if (items != null) {
    let row = document.createElement('div')

    row.className = 'item'
    let ones = `
    
    <div class="itemImg"> <img src=${e.image} alt="">
    
    <div class="addToCart"> <img src="img/cart.png" alt="whatever"> ADD TO CART</div>
    </div>
    <div class="itemName"> ${e.name} </div>
    <div class="itemDescription"> ${e.description} </div>
    <div class="itemPrice"> ${e.price}</div>
    <div class="darknes"></div>
    `
    items.append(row)
    row.innerHTML = ones
}

}


menu.addEventListener("click", () => {
    hideMenu.classList.toggle('hide')
})



document.addEventListener('click', (e) => {
      if (e.target.className != "search" ) {
          input.classList.add('hide');
          search.classList.remove('hide');
      } else {
          input.classList.remove('hide');
          search.classList.add('hide');
      }


})

const clear = function () {
    btn.classList.remove('myBtnActive')
}

if (btn != null){
    btn.addEventListener('click', () => {
        btn.classList.add('myBtnActive')
        setTimeout(clear, 200)
    })
}