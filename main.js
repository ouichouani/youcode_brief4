

const CARDS_CONTAINER = document.getElementById('cards_container');
const PAGINATION_CONTAINER = document.getElementById('pagination_conatiner');
const FILTAR_BAR = document.getElementById("filter_bar");
let favorit = [];
let cart = [];

const data = [
    { id: 1, img: "img/cards/card1.jpg", rarety: "Nice", price: 300 },
    { id: 2, img: "img/cards/card2.jpg", rarety: "Cool", price: 100 },
    { id: 3, img: "img/cards/card3.jpg", rarety: "Nice", price: 300 },
    { id: 4, img: "img/cards/card4.jpg", rarety: "Cool", price: 100 },
    { id: 5, img: "img/cards/card5.jpg", rarety: "Nice", price: 300 },
    { id: 6, img: "img/cards/card6.jpg", rarety: "Nice", price: 300 },
    { id: 7, img: "img/cards/card7.jpg", rarety: "Cool", price: 100 },
    { id: 8, img: "img/cards/card8.jpg", rarety: "Nice", price: 300 },
    { id: 9, img: "img/cards/card10.jpg", rarety: "Nice", price: 300 },
    { id: 10, img: "img/cards/card11.jpg", rarety: "Cool", price: 100 },
    { id: 11, img: "img/cards/card12.jpg", rarety: "Cool", price: 100 },
    { id: 12, img: "img/cards/card13.jpg", rarety: "Cool", price: 100 },
    { id: 13, img: "img/cards/card14.jpg", rarety: "Very_Rare", price: 900 },
    { id: 14, img: "img/cards/card15.jpg", rarety: "Cool", price: 100 },
    { id: 15, img: "img/cards/card16.jpg", rarety: "Nice", price: 300 },
    { id: 16, img: "img/cards/card17.jpg", rarety: "Cool", price: 100 },
    { id: 17, img: "img/cards/card18.jpg", rarety: "Cool", price: 100 },
    { id: 18, img: "img/cards/card19.jpg", rarety: "Cool", price: 100 },
    { id: 19, img: "img/cards/card20.jpg", rarety: "Cool", price: 100 },
    { id: 20, img: "img/cards/card21.jpg", rarety: "Cool", price: 100 },
    { id: 21, img: "img/cards/card22.jpg", rarety: "Very_Rare", price: 900 },
    { id: 22, img: "img/cards/card23.jpg", rarety: "Cool", price: 100 },
    { id: 23, img: "img/cards/card24.jpg", rarety: "Rare", price: 500 },
    { id: 24, img: "img/cards/card25.jpg", rarety: "Rare", price: 500 },
    { id: 25, img: "img/cards/card26.jpg", rarety: "Cool", price: 100 },
    { id: 26, img: "img/cards/card27.jpg", rarety: "Cool", price: 100 },
    { id: 27, img: "img/cards/card28.jpg", rarety: "Epic", price: 400 },
    { id: 28, img: "img/cards/card29.jpg", rarety: "Nice", price: 300 },
    { id: 29, img: "img/cards/card30.jpg", rarety: "Epic", price: 400 },
    { id: 30, img: "img/cards/card31.jpg", rarety: "Nice", price: 300 },
    { id: 31, img: "img/cards/card32.jpg", rarety: "Nice", price: 300 },
    { id: 32, img: "img/cards/card33.jpg", rarety: "Nice", price: 300 },
    { id: 33, img: "img/cards/card34.jpg", rarety: "Cool", price: 100 },
    { id: 34, img: "img/cards/card35.jpg", rarety: "Cool", price: 100 },
    { id: 35, img: "img/cards/card36.jpg", rarety: "Cool", price: 100 },
    { id: 36, img: "img/cards/card37.jpg", rarety: "Cool", price: 100 },
    { id: 37, img: "img/cards/card38.jpg", rarety: "Rare", price: 500 },
    { id: 38, img: "img/cards/card39.jpg", rarety: "Rare", price: 500 },
    { id: 39, img: "img/cards/card40.jpg", rarety: "Rare", price: 500 },
    { id: 40, img: "img/cards/card41.jpg", rarety: "Cool", price: 100 },
    { id: 41, img: "img/cards/card42.jpg", rarety: "Epic", price: 400 },
    { id: 42, img: "img/cards/card43.jpg", rarety: "Epic", price: 400 },
    { id: 43, img: "img/cards/card44.jpg", rarety: "Epic", price: 400 },
    { id: 44, img: "img/cards/card45.jpg", rarety: "Nice", price: 300 },
    { id: 45, img: "img/cards/card46.jpg", rarety: "Cool", price: 100 },
    { id: 46, img: "img/cards/card47.jpg", rarety: "Cool", price: 100 },
    { id: 47, img: "img/cards/card48.jpg", rarety: "Cool", price: 100 },
    { id: 48, img: "img/cards/card49.jpg", rarety: "Nice", price: 300 },
    { id: 49, img: "img/cards/card50.jpg", rarety: "Rare", price: 500 },
    { id: 50, img: "img/cards/card51.jpg", rarety: "Cool", price: 100 },
    { id: 51, img: "img/cards/card52.jpg", rarety: "Cool", price: 100 }
];

function add_to_cart(added_card){

    if(cart.find(element => element.id == added_card.id)){
        
        cart = cart.filter(element => (element.id != added_card.id ))
        console.log(cart)
        
        
    }else{
        cart.push(added_card)
        console.log(cart)
        
    }
    
}

function like(liked_element){

    if(favorit.find(element => element.id == liked_element.id)){
        
        favorit = favorit.filter(element => (element.id != liked_element.id ))
        console.log(favorit)
        
        
    }else{
        favorit.push(liked_element)
        console.log(favorit)
        
    }
    
}

function show_cards(index, array) {
    CARDS_CONTAINER.innerHTML = '';

    for (let i = (index * 24) - 24; i < index * 24; i++) {

        if (array.length > i) {
            CARDS_CONTAINER.innerHTML += `
            <div class="card">
            <img src="${array[i].img}" alt="">
            <aside>
            <span>${array[i].price}$</span>
            <button class="like"><img src="./img/assets/like.svg" alt=""></button>
            <button class="cart">add</button>
            </aside>
            </div>
            `
        }
    }

    //ADD EVENT LISTINER TO EVERY BUTTON INSIDE CARDS
    for (let i = (index * 24) - 24; i < index * 24; i++){

        CARDS_CONTAINER.children[i].children[1].children[1].addEventListener('click', (e) => {
            like(array[i]) ;
        });

        CARDS_CONTAINER.children[i].children[1].children[2].addEventListener('click', (e) => {
            add_to_cart(array[i]);
        });

    }
}

function filter_cards(rarety) {
    let filtred_array = data.filter((item) => item.rarety == rarety);
    handle_pagination(filtred_array)
    show_cards(1, filtred_array);
}

//COUND AND CREATE NAVIGATION BUTTONS AND SHOW CARDS WHEN WE CLICK ON IT
function handle_pagination(arr) {

    let NUMBER_PAGINATION = Math.ceil(arr.length / 24);
    // console.log(NUMBER_PAGINATION);
    
    if (NUMBER_PAGINATION > 0) {

        PAGINATION_CONTAINER.innerHTML = '';
        for (let i = 0; i < NUMBER_PAGINATION; i++) {
            PAGINATION_CONTAINER.innerHTML += `<button><p>${i + 1}</p></button>`
        }

        const PAGINATION_BUTTONS = document.querySelectorAll("#pagination_conatiner button");
        for (let i = 0; i < NUMBER_PAGINATION; i++) {
            PAGINATION_BUTTONS[i].addEventListener('click', () => {
                PAGINATION_BUTTONS.forEach(element => {
                    element.classList.remove('activate');
                });
                PAGINATION_BUTTONS[i].classList.add('activate');
                show_cards(i + 1, arr);
            })
        }
    }

}

show_cards(1, data);
handle_pagination(data);

//APPLAY AN EVENT FOR EVERY ELEMENTS IN FILTERBAR
Array.from(FILTAR_BAR.children).forEach((item) => {
    item.addEventListener('click', () => {
        filter_cards(item.className);
    })
})

