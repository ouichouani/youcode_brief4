

const COLLECTION_CONTAINER = document.querySelector('.cards_container');
const PLAY_COLLECTION = document.querySelector('.cards_container .cards');
const HAND = document.querySelector('.hand');
const ARENA = document.querySelector(".arena");

const PLAY_COLLECTION_CARDS = [];

[...collection].forEach(item => {
    for (let i = 0; i < item.quantity; i++) {
        PLAY_COLLECTION_CARDS.push({ ...item, quantity: 1, copy: i });
    }
})

ADD_EVENT_TO_LISTENERS();

let dragedCard = null;

function ATTACK(){
    alert('attack le hhh')
}

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

    console.log(PLAY_COLLECTION_CARDS[e.target.getAttribute('id')].from && PLAY_COLLECTION_CARDS[e.target.getAttribute('id')].from)
    if (!PLAY_COLLECTION_CARDS[e.target.getAttribute('id')].from) {
        PLAY_COLLECTION_CARDS[e.target.getAttribute('id')].from = 'collection';
    }
    dragedCard = e.target;


}

function ADD_CARD_TO_HAND() {

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

    if (e.target.className == 'card_container' && PLAY_COLLECTION_CARDS[dragedCard.getAttribute('id')].from == 'hand') {
        ATTACK_OR_DEFEND(dragedCard) ;
        const ATTACK_BUTTON = document.createElement('aside') ;
        ATTACK_BUTTON.innerHTML ='<button>ATTACK</button>' ;
        ATTACK_BUTTON.querySelector('button').addEventListener('click' , ATTACK) ;
        dragedCard.appendChild(ATTACK_BUTTON)
        e.target.appendChild(dragedCard);
    }

}

function ATTACK_OR_DEFEND(placed_card) {
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

            });
        });
    }


    else {
    document.body.removeChild(document.querySelector('.play_layer'));
}
}

SHOW_CARDS(PLAY_COLLECTION_CARDS);
