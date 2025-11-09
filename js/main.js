


//DECLARATION DES VARIABLE ISSENCIEL
const CARDS_CONTAINER = document.getElementById('cards_container');
const PAGINATION_CONTAINER = document.getElementById('pagination_conatiner');
const FILTAR_BAR = document.getElementById("filter_bar");

!localStorage.getItem('data') && CHANGE_LOCAL_STORAGE('data', BASE_DATA);
!localStorage.getItem('cart') && CHANGE_LOCAL_STORAGE('cart', []);
!localStorage.getItem('collection') && CHANGE_LOCAL_STORAGE('collection', []);

let data = JSON.parse(localStorage.getItem('data'));
let cart = JSON.parse(localStorage.getItem('cart'));
let collection = JSON.parse(localStorage.getItem('collection'));


//ADD EVENT LISTINER TO EVERY BUTTON IN 

// Array.from(FILTAR_BAR.children).forEach((item) => {
//     item.addEventListener('click', () => {
//         FILTER_CARDS(item.className , data);
//     })
// })

//DATABASE
const BASE_DATA = [
    { id: 1, img: "img/cards/card1.jpg", rarety: "Nice", price: 300, liked: false },
    { id: 2, img: "img/cards/card2.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 3, img: "img/cards/card3.jpg", rarety: "Nice", price: 300, liked: false },
    { id: 4, img: "img/cards/card4.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 5, img: "img/cards/card5.jpg", rarety: "Nice", price: 300, liked: false },
    { id: 6, img: "img/cards/card6.jpg", rarety: "Nice", price: 300, liked: false },
    { id: 7, img: "img/cards/card7.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 8, img: "img/cards/card8.jpg", rarety: "Nice", price: 300, liked: false },
    { id: 9, img: "img/cards/card10.jpg", rarety: "Nice", price: 300, liked: false },
    { id: 10, img: "img/cards/card11.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 11, img: "img/cards/card12.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 12, img: "img/cards/card13.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 13, img: "img/cards/card14.jpg", rarety: "Very_Rare", price: 900, liked: false },
    { id: 14, img: "img/cards/card15.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 15, img: "img/cards/card16.jpg", rarety: "Nice", price: 300, liked: false },
    { id: 16, img: "img/cards/card17.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 17, img: "img/cards/card18.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 18, img: "img/cards/card19.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 19, img: "img/cards/card20.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 20, img: "img/cards/card21.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 21, img: "img/cards/card22.jpg", rarety: "Very_Rare", price: 900, liked: false },
    { id: 22, img: "img/cards/card23.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 23, img: "img/cards/card24.jpg", rarety: "Rare", price: 500, liked: false },
    { id: 24, img: "img/cards/card25.jpg", rarety: "Rare", price: 500, liked: false },
    { id: 25, img: "img/cards/card26.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 26, img: "img/cards/card27.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 27, img: "img/cards/card28.jpg", rarety: "Epic", price: 400, liked: false },
    { id: 28, img: "img/cards/card29.jpg", rarety: "Nice", price: 300, liked: false },
    { id: 29, img: "img/cards/card30.jpg", rarety: "Epic", price: 400, liked: false },
    { id: 30, img: "img/cards/card31.jpg", rarety: "Nice", price: 300, liked: false },
    { id: 31, img: "img/cards/card32.jpg", rarety: "Nice", price: 300, liked: false },
    { id: 32, img: "img/cards/card33.jpg", rarety: "Nice", price: 300, liked: false },
    { id: 33, img: "img/cards/card34.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 34, img: "img/cards/card35.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 35, img: "img/cards/card36.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 36, img: "img/cards/card37.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 37, img: "img/cards/card38.jpg", rarety: "Rare", price: 500, liked: false },
    { id: 38, img: "img/cards/card39.jpg", rarety: "Rare", price: 500, liked: false },
    { id: 39, img: "img/cards/card40.jpg", rarety: "Rare", price: 500, liked: false },
    { id: 40, img: "img/cards/card41.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 41, img: "img/cards/card42.jpg", rarety: "Epic", price: 400, liked: false },
    { id: 42, img: "img/cards/card43.jpg", rarety: "Epic", price: 400, liked: false },
    { id: 43, img: "img/cards/card44.jpg", rarety: "Epic", price: 400, liked: false },
    { id: 44, img: "img/cards/card45.jpg", rarety: "Nice", price: 300, liked: false },
    { id: 45, img: "img/cards/card46.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 46, img: "img/cards/card47.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 47, img: "img/cards/card48.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 48, img: "img/cards/card49.jpg", rarety: "Nice", price: 300, liked: false },
    { id: 49, img: "img/cards/card50.jpg", rarety: "Rare", price: 500, liked: false },
    { id: 50, img: "img/cards/card51.jpg", rarety: "Cool", price: 100, liked: false },
    { id: 51, img: "img/cards/card52.jpg", rarety: "Cool", price: 10, liked: false }
];

function ADD_TO_CART(card) {

    if (cart.find(element => element.id == card.id)) {
        card.quantity = 0
        cart = cart.filter(element => (element.id != card.id))
        CHANGE_LOCAL_STORAGE('cart', cart);

        console.log(cart)

    } else {
        card.quantity = 1;
        cart.push(card)
        CHANGE_LOCAL_STORAGE('cart', cart);
        console.log(cart)

    }

}

function CHANGE_LOCAL_STORAGE(item, arr1) {
    localStorage.setItem(item, JSON.stringify(arr1));
}

function LIKE(liked_element, target) {

    console.log(liked_element);
    if (liked_element.liked) {

        liked_element.liked = false;
        target.src = '/img/assets/unlike.svg';
        CHANGE_LOCAL_STORAGE('data', data);


    } else {
        target.src = '/img/assets/like.svg';
        liked_element.liked = true;
        console.log('favorite', liked_element);
        CHANGE_LOCAL_STORAGE("data", data);
    }

}

function SHOW_CARDS(start_page, array, limit_cards) {
    CARDS_CONTAINER.innerHTML = '';

    for (let i = (start_page * limit_cards) - limit_cards; i < start_page * limit_cards && i < array.length; i++) {
        if (array.length > i) {
            CARDS_CONTAINER.innerHTML += `
            <div class="card">
                <img src="${array[i].img}" alt="">
                <aside>
                    <span>${array[i].price}$</span>
                    <button class="like"><img src="${array[i].liked ? './img/assets/like.svg' : './img/assets/unlike.svg'}" alt=""></button>
                    <button class="cart"><img src = "./img/assets/add.svg"></button>
                </aside>
            </div>
            `
        }
    }

    //ADD EVENT LISTINER TO EVERY BUTTON INSIDE CARDS
    for (let i = 0; i < limit_cards; i++) {
        if (array.length - ((start_page - 1) * limit_cards + i) > 0) {

            CARDS_CONTAINER.children[i].children[1].children[1].addEventListener('click', (e) => {
                // i + START start_page THAT SHOWS THE CONTENT OF THIS PAGE
                LIKE(array[i + ((start_page * limit_cards) - limit_cards)], e.target, start_page);
            });

            CARDS_CONTAINER.children[i].children[1].children[2].addEventListener('click', (e) => {
                ADD_TO_CART(array[i]);
            });
        }
    }
}

function FILTER_CARDS(rarety, array) {
    let filtred_array = array.filter((item) => item.rarety == rarety);
    HANDLE_PAGINATION(filtred_array, 0, 24)
    SHOW_CARDS(1, filtred_array, 24);

}

//COUND AND CREATE NAVIGATION BUTTONS AND SHOW CARDS WHEN WE CLICK ON IT
function HANDLE_PAGINATION(arr, activ_button_index, limit_cards) {

    let NUMBER_PAGINATION = Math.ceil(arr.length / limit_cards);

    if (NUMBER_PAGINATION > 0) {

        PAGINATION_CONTAINER.innerHTML = '';
        for (let i = 0; i < NUMBER_PAGINATION; i++) {
            PAGINATION_CONTAINER.innerHTML += `<button ${activ_button_index == i && "class = 'activate' "}}><p>${i + 1}</p></button>`
        }

        const PAGINATION_BUTTONS = document.querySelectorAll("#pagination_conatiner button");
        for (let i = 0; i < NUMBER_PAGINATION; i++) {
            PAGINATION_BUTTONS[i].addEventListener('click', () => {
                PAGINATION_BUTTONS.forEach(element => {
                    element.classList.remove('activate');
                });
                PAGINATION_BUTTONS[i].classList.add('activate');
                SHOW_CARDS(i + 1, arr, limit_cards);
            })
        }
    }

}

function DISPLAY_CART() {
    let cart_side_bar = document.createElement("aside");
    let cart_container = document.createElement("section");

    cart_side_bar.className = 'cart_side_bar';
    cart_side_bar.innerHTML = `
    
        <div class='header' >
            <h2>CART</h2>
            <button><img src="img/index/card.svg" alt="" class="mr-[10px] cursor-pointer"></button>
        </div>

        <div class="controle">
            <span class="total_price">${cart.reduce((total_quantity, current_quantity) => total_quantity + (current_quantity.quantity * current_quantity.price), 0)}</span>
            <button class="buy">buy</button>
            <button class="clear">clear</button>
        </div>
    `

    cart_side_bar.appendChild(cart_container);

    function display_cart_cards() {

        cart_side_bar.querySelector('.controle span').textContent = cart.reduce((total_quantity, current_quantity) => total_quantity + (current_quantity.quantity * current_quantity.price), 0);
        cart_container.innerHTML = '';
        cart.forEach(element => {
            const card = document.createElement('div')
            card.className = "card";
            card.innerHTML = `
            <img src="${element.img}" alt="">
            <aside>
            <span class="total_price">${element.price * element.quantity}$</span>
            <span class="quantity" >${element.quantity}</span>
            <div>
                <button class="add" ><img src = "./img/assets/add.svg"></button>
                <button class="minus" ><img src = "./img/assets/minus.svg"></button>
                <button class="cart" ><img src = "./img/assets/x.svg"></button>
            </div>
            </aside>
            `
            cart_container.appendChild(card);
            const REFRECH_TEXTCONTENT = () => {
                card.querySelector('.total_price').textContent = `${element.price * element.quantity}$`;
                card.querySelector('.quantity').textContent = element.quantity;
                cart_side_bar.querySelector('.controle span').textContent = cart.reduce((total_quantity, current_quantity) => total_quantity + (current_quantity.quantity * current_quantity.price), 0);

            }

            card.querySelector('.add').addEventListener('click', () => {
                element.quantity++
                REFRECH_TEXTCONTENT()
                CHANGE_LOCAL_STORAGE('cart', cart);
            });

            card.querySelector('.minus').addEventListener('click', () => {
                if (element.quantity == 1) {
                    ADD_TO_CART(element);
                    display_cart_cards();

                } else {
                    element.quantity--;
                    REFRECH_TEXTCONTENT()
                    CHANGE_LOCAL_STORAGE('cart', cart);
                }

            });

            card.querySelector('.cart').addEventListener('click', () => {
                ADD_TO_CART(element);
                display_cart_cards();
            });

        });
    }

    function clear_cart() {
        cart_container.innerHTML = '';
        cart.length = 0
        CHANGE_LOCAL_STORAGE('cart', []);
    }

    function buy_cards() {

        collection.forEach(collection_item => {
            cart.forEach(cart_item => {
                console.log('collection : ', collection_item.id, ' cart : ', cart_item.id)
                if (collection_item.id == cart_item.id) {

                    collection_item.quantity += cart_item.quantity;
                    cart = cart.filter(item => item.id != cart_item.id);

                }
            })
        })

        CHANGE_LOCAL_STORAGE('collection', collection.concat(cart));

        clear_cart()
        display_cart_cards()

    }

    cart_side_bar.querySelector('button').addEventListener('click', (e) => {
        cart_side_bar.style.right = '-100%';
    })

    document.querySelector('#cart_button').addEventListener('click', (e) => {
        cart_side_bar.style.right = '0';
        display_cart_cards()

    })

    cart_side_bar.querySelector('.buy').addEventListener('click', (e) => {
        console.log('buy');
        buy_cards();

    })

    cart_side_bar.querySelector('.clear').addEventListener('click', (e) => {
        console.log('clear');
        clear_cart()

    })

    cart_side_bar.appendChild(cart_container);
    Array.from(document.getElementsByTagName('main')).forEach(e => { e.appendChild(cart_side_bar) });

}

//THIS FUNCTION IS COMMUN BETWEEN ALL PAGES
DISPLAY_CART();
