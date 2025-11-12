

const COLLECTION_CONTAINER = document.querySelector('.cards_container');
const PLAY_COLLECTION = document.querySelector('.cards_container .cards');
const HAND = document.querySelector('.hand');
const ARENA = document.querySelector(".arena");
const PLAYER_CARDS = ARENA.querySelector('.player_cards');

const PLAY_COLLECTION_CARDS = [];

let turn = true;
let dragedCard = null;

// const chi = confirm('chi l3ba o safi') HMMM INTERISTING

collection.forEach(item => {
    for (let i = 0; i < item.quantity; i++) {
        PLAY_COLLECTION_CARDS.push({ ...item, quantity: 1, copy: i });
    }
})

ADD_EVENT_TO_LISTENERS();

function BOT_TURN(){}

function ATTACK() {
    if (!turn) return;
    alert('attack le hhh');
}

function ADD_EVENT_TO_LISTENERS() {

    HAND.addEventListener('drop', (e) => ADD_CARD_TO_HAND(e));
    HAND.addEventListener('dragover', (e) => e.preventDefault());

    for (let i = 0; i < PLAYER_CARDS.childElementCount; i++) {
        PLAYER_CARDS.querySelectorAll('.card_container')[i].addEventListener('drop', (e) => ADD_CARD_TO_ARENA(e));
        PLAYER_CARDS.querySelectorAll('.card_container')[i].addEventListener('dragover', (e) => e.preventDefault());
    }

    document.querySelector('.player_details').querySelector('button').addEventListener('click', CHANGE_TURN)

}

function SHOW_CARDS(array) {
    PLAY_COLLECTION.innerHTML = '';

    array.forEach(element => {

        for (let i = 0; i < element.quantity; i++) {
            const DIV = document.createElement('div');
            DIV.className = 'card'
            DIV.setAttribute("draggable", true);
            DIV.setAttribute("id", array.findIndex(el => el.id == element.id && el.copy == element.copy));

            DIV.innerHTML = `
                <img draggable = 'false' src="${element.img}" alt="">
        ` ;
            PLAY_COLLECTION.appendChild(DIV);
            DIV.addEventListener('dragstart', (e) => HANDLEDRAG_START(e));

        }
    })
}

function HANDLEDRAG_START(e) {

    if (!turn) return;

    console.log(PLAY_COLLECTION_CARDS[e.target.getAttribute('id')].from && PLAY_COLLECTION_CARDS[e.target.getAttribute('id')].from)
    if (!PLAY_COLLECTION_CARDS[e.target.getAttribute('id')].from) {
        PLAY_COLLECTION_CARDS[e.target.getAttribute('id')].from = 'collection';
    }
    dragedCard = e.target;


}

function ADD_CARD_TO_HAND() {

    if (!turn) return;

    if (HAND.childElementCount >= 5) {
        return e.preventDefault();
    }
    if (PLAY_COLLECTION_CARDS[dragedCard.getAttribute('id')].from == 'collection') {
        HAND.appendChild(dragedCard);
        COLLECTION_CONTAINER.querySelector('.header h1').textContent = `${PLAY_COLLECTION.childElementCount} cards`
        PLAY_COLLECTION_CARDS[dragedCard.getAttribute('id')].from = 'hand'
    }


}

function ADD_CARD_TO_ARENA(e) {

    if (!turn) return;

    if (e.target.className == 'card_container' && PLAY_COLLECTION_CARDS[dragedCard.getAttribute('id')].from == 'hand') {
        ATTACK_OR_DEFEND(dragedCard);
        const ATTACK_BUTTON = document.createElement('aside');
        ATTACK_BUTTON.innerHTML = '<button>ATTACK</button>';
        ATTACK_BUTTON.querySelector('button').addEventListener('click', ATTACK);
        dragedCard.appendChild(ATTACK_BUTTON)
        e.target.appendChild(dragedCard);
    }

}

function ATTACK_OR_DEFEND(placed_card) {

    // if (!turn) return;

    if (!document.querySelector('.play_layer')) {

        const LAYER = document.createElement('div')
        LAYER.className = 'play_layer';
        LAYER.innerHTML = `
            <section>
                <p>WHAT IS THE POSITION OF THIS CARD ?</p>
                <button class='attack'>ATTACK ⚔️</button>
                <button class = 'defence'>DEFENCE 🛡️</button>
            </section>` ;

        document.body.appendChild(LAYER);

        LAYER.querySelectorAll('button').forEach(item => {
            item.addEventListener('click', () => {

                placed_card.classList.contains('attack') && placed_card.classList.remove('attack');
                placed_card.classList.contains('defence') && placed_card.classList.remove('defence');
                placed_card.classList.add(item.className);
                ATTACK_OR_DEFEND();
                CHANGE_TURN() ;

            });
        });
        
    }


    else {
        document.body.removeChild(document.querySelector('.play_layer'));
    }
}

function CHANGE_TURN() {

    COLLECTION_CONTAINER.classList.toggle('desactivate');
    HAND.classList.toggle('desactivate');
    PLAYER_CARDS.classList.toggle('desactivate');
    turn = !turn;

    console.log('end of turn')

    BOT_TURN()
    setTimeout(() => {
        COLLECTION_CONTAINER.classList.toggle('desactivate');
        HAND.classList.toggle('desactivate');
        PLAYER_CARDS.classList.toggle('desactivate');
        turn = !turn;
    }, 5000);


}



SHOW_CARDS(PLAY_COLLECTION_CARDS);
