
const CARDS_CONTAINER = document.getElementById('cards_container');
const PAGINATION_CONTAINER = document.getElementById('pagination_conatiner');
const FILTAR_BAR = document.getElementById("filter_bar");


function change_local_storage(item, arr1) {
    localStorage.setItem(item, JSON.stringify(arr1));
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
            <button class="like"><img src="${array[i].liked ? './img/assets/like.svg' : './img/assets/unlike.svg'}" alt=""></button>
            <button class="cart"><img src = "./img/assets/add.svg"></button>
            </aside>
            </div>
            `
        }
    }

    //ADD EVENT LISTINER TO EVERY BUTTON INSIDE CARDS
    for (let i = 0; i < 24; i++) {
        if (array.length - ((index - 1) * 24 + i) > 0) {

            CARDS_CONTAINER.children[i].children[1].children[1].addEventListener('click', (e) => {
                like(array[i], e.target);
            });

            CARDS_CONTAINER.children[i].children[1].children[2].addEventListener('click', (e) => {
                add_to_cart(array[i]);
            });
        }
    }
}

function filter_cards(rarety) {
    let filtred_array = collection.filter((item) => item.rarety == rarety);
    handle_pagination(filtred_array)
    show_cards(1, filtred_array);

}

//APPLAY AN EVENT FOR EVERY ELEMENTS IN FILTERBAR
Array.from(FILTAR_BAR.children).forEach((item) => {
    item.addEventListener('click', () => {
        filter_cards(item.className);
    })
})

//COUND AND CREATE NAVIGATION BUTTONS AND SHOW CARDS WHEN WE CLICK ON IT
function handle_pagination(arr, activ_button_index) {

    let NUMBER_PAGINATION = Math.ceil(arr.length / 24);
    // console.log(NUMBER_PAGINATION);

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
                show_cards(i + 1, arr);
            })
        }
    }

}

function display_cart() {
    let cart_side_bar = document.createElement("aside");
    let cart_container = document.createElement("section");

    cart_side_bar.className = 'cart_side_bar';
    cart_side_bar.innerHTML = `
    
        <div class='header' >
            <h2>CART</h2>
            <button><img src="img/index/card.svg" alt="" class="mr-[10px] cursor-pointer"></button>
        </div>

        <div class="controle">
            <span class="total_price">${200}</span>
            <button class="buy">buy</button>
            <button class="clear">clear</button>
        </div>
        

    `
    cart_side_bar.appendChild(cart_container);

    function display_cart_card() {
        cart_container.innerHTML = '';
        cart.forEach(element => {
            const card = document.createElement('div')
            card.className = "card";
            card.innerHTML = `
            <img src="${element.img}" alt="">
            <aside>
            <span>${element.price * element.quantity}$</span>
            <span class="quantity" >${element.quantity}</span>
            <div>
                <button class="add" ><img src = "./img/assets/add.svg"></button>
                <button class="minus" ><img src = "./img/assets/minus.svg"></button>
                <button class="cart" ><img src = "./img/assets/x.svg"></button>
            </div>
            </aside>
            `
            cart_container.appendChild(card);
            const last_card = cart_container.lastElementChild;

            last_card.querySelector('.add').addEventListener('click', () => {
                element.quantity++
                display_cart_card();

            });
            last_card.querySelector('.minus').addEventListener('click', () => {
                if (element.quantity == 1) {
                    add_to_cart(element);
                    display_cart_card();

                } else {
                    element.quantity--
                    display_cart_card();
                }

            });
            last_card.querySelector('.cart').addEventListener('click', () => {
                add_to_cart(element);
                display_cart_card();
            });
        });
    }
    
    function clear_cart() {
        cart_container.innerHTML = '';
        cart.length = 0
        localStorage.setItem('cart' , []) ;
        console.log(cart)
        console.log (localStorage.getItem('cart'))
    }

    function buy_cards() {
        const collection = JSON.parse(localStorage.getItem('collection')) || []
        localStorage.setItem('collection' ,JSON.stringify(collection.concat(cart)) )
        clear_cart()

    }



    cart_side_bar.querySelector('button').addEventListener('click', (e) => {
        cart_side_bar.style.right = '-100%';
    })
    document.querySelector('#cart_button').addEventListener('click', (e) => {
        cart_side_bar.style.right = '0';
        display_cart_card()

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


let collection = JSON.parse(localStorage.getItem('collection')) || [];
show_cards(1, collection)
handle_pagination(collection , 0)
