

const COLLECTION_CONTAINER = document.querySelector('.cards_container');
const PLAY_COLLECTION = document.querySelector('.cards_container .cards');
const HAND = document.querySelector('.hand');
const ARENA = document.querySelector(".arena");

const PLAY_COLLECTION_CARDS = [...collection];

ADD_EVENT_TO_LISTENERS();

let dragedCard = null;


function ADD_EVENT_TO_LISTENERS() {

    HAND.addEventListener('drop', (e) => ADD_CARD_TO_HAND(e));
    HAND.addEventListener('dragover', (e) => e.preventDefault());

    for (let i = 0; i < ARENA.querySelector('.player_cards').childElementCount; i++) {
        ARENA.querySelector('.player_cards').querySelectorAll('.card_container')[i].addEventListener('drop', (e) => ADD_CARD_TO_ARENA(e));
        ARENA.querySelector('.player_cards').querySelectorAll('.card_container')[i].addEventListener('dragover', (e) => e.preventDefault());
    }

}

function SHOW_CARDS(array) {
    PLAY_COLLECTION.innerHTML = '';

    array.forEach(element => {

        for (let i = 0; i < element.quantity; i++) {
            const DIV = document.createElement('div');
            DIV.className = 'card'
            DIV.setAttribute("draggable", true);
            DIV.setAttribute("id", element.id);
            DIV.setAttribute("clone", i + 1);

            DIV.innerHTML = `
                <img draggable = 'false' src="${element.img}" alt="">
        ` ;
            PLAY_COLLECTION.appendChild(DIV);
            DIV.addEventListener('dragstart', (e) => HANDLEDRAG_START(e));

        }
    })
}

function HANDLEDRAG_START(e) {
    dragedCard = e.target;
}

function ADD_CARD_TO_HAND() {

    if (HAND.childElementCount >= 5) {
        return e.preventDefault();
    }
    else {
        HAND.appendChild(dragedCard);
        COLLECTION_CONTAINER.querySelector('.header h1').textContent = `${PLAY_COLLECTION.childElementCount} cards`
    }


}

function ADD_CARD_TO_ARENA(e) {
    e.target.appendChild(dragedCard);
}

SHOW_CARDS(PLAY_COLLECTION_CARDS);