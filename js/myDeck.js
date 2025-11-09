

//APPLAY AN EVENT FOR EVERY ELEMENTS IN FILTERBAR
Array.from(FILTAR_BAR.children).forEach((item) => {
    item.addEventListener('click', () => {
        FILTER_CARDS(item.className , collection);
    })
})

//collection

function SHOW_CARDS(index, array, limit_cards) {
    CARDS_CONTAINER.innerHTML = '';

    for (let i = (index * limit_cards) - limit_cards; i < index * limit_cards && i < array.length; i++) {
        if (array.length > i) {
            CARDS_CONTAINER.innerHTML += `
            <div class="card">
                <img src="${array[i].img}" alt="">
                <aside>
                    <span>${array[i].price}$</span>
                    <span> x ${array[i].quantity}</span>
                    <button class="cart"><img src = "./img/assets/x.svg"></button>
                </aside>
            </div>
            `
        }
    }

    //ADD EVENT LISTINER TO EVERY BUTTON INSIDE CARDS
    for (let i = 0; i < limit_cards; i++) {
        if (array.length - ((index - 1) * limit_cards + i) > 0) {

            CARDS_CONTAINER.children[i].children[1].children[2].addEventListener('click', (e) => {
                REMOVE_FROM_DECK(array[i])
            });
        }
    }
}

function REMOVE_FROM_DECK(element) {

    collection = collection.filter(item => item.id != element.id)
    CHANGE_LOCAL_STORAGE("collection", collection)
    SHOW_CARDS(1, collection, 20)
}

SHOW_CARDS(1, collection, 20)
HANDLE_PAGINATION(collection, 0, 20);
