

const COLLECTION_CONTAINER = document.querySelector('.cards_container');
const PLAY_COLLECTION = document.querySelector('.cards_container .cards');
const HAND = document.querySelector('.hand');
const ARENA = document.querySelector(".arena");
const PLAYER_CARDS = ARENA.querySelector('.player_cards');
const OPONENT_CARDS = ARENA.querySelector('.opponent_cards');

const PLAY_COLLECTION_CARDS = [];
const BOT_COLLECTION_CARDS = [];

let OPPONENT_HELTH = 1000;
let PLAYER_HELTH = 1000;
let turn = true;
let dragedCard = null;



FULL_ARRAYS();
ADD_EVENT_TO_LISTENERS();


function FULL_ARRAYS() {
    collection.forEach(item => {
        for (let i = 0; i < item.quantity; i++) {
            PLAY_COLLECTION_CARDS.push({ ...item, quantity: 1, copy: i });
        }
    })

    for (let i = 0; i < 10; i++) {
        BOT_COLLECTION_CARDS.push(data[Math.floor(Math.random() * data.length)]);
    }
}

function BOT_TURN() {
    //CHOUSE A CARD CONTAINER FROM OPPONENT CARDS IN ARENA
    const RANDOM_ELEMENT = OPONENT_CARDS.children[Math.floor(Math.random() * 5)];

    //CHECK IF THAT CONTAINER IS EMPTY SO IT CAN HOLD A CARD
    if (!RANDOM_ELEMENT.childElementCount) {

        //BOT TURN STARTS , PREVENT PLAYER TO DO SOMTHING
        CHANGE_TURN();


        //MAKE SURE THAT THE SELECTED ELEMENT WONT BE SELECTED AGAIN

        function GENERATE_RANDOM_INDEX() {
            const RANDOM_INDEX = Math.floor(Math.random() * BOT_COLLECTION_CARDS.length);
            console.log('random index : ', RANDOM_INDEX);
            for (const element of OPONENT_CARDS.querySelectorAll('.card_container .card')) {
                if (element.getAttribute('id') == RANDOM_INDEX) {
                    console.log('--------- random index is allready userd --------- ');
                    return GENERATE_RANDOM_INDEX();
                }
            }
            return RANDOM_INDEX;
        }

        const RANDOM_INDEX = GENERATE_RANDOM_INDEX()

        //VARIABLE DATA FROM THE MAIN 
        const RANDOM_CARD = BOT_COLLECTION_CARDS[RANDOM_INDEX];
        const DIV = document.createElement('div');
        RANDOM_ELEMENT.appendChild(DIV);

        DIV.outerHTML = `
        <div class = 'card ${Math.random() * 10 > 4.5 ? 'attack' : 'defence'} ' id = '${RANDOM_INDEX}'>
            <img draggable = 'false' src="${RANDOM_CARD.img}" alt="">
        </div>
        `;

        //AFTER BOT ROOL END , ALLOW PLAYER TO PLAY HIS TURN
        CHANGE_TURN()


    }
    else {
        // 
        for (let i = 0; i < OPONENT_CARDS.childElementCount; i++) {
            if (OPONENT_CARDS.children[i].childElementCount == 0) {
                return BOT_TURN();
            }
        }
        console.log('nothing to play now bro')
    }
}

function DESTROY_CARD(card) {
    console.log('destroy card : ', card);
}

function DEFEND_WITH_CARD(card, DAMAGE_ATTACK) {
    // CARD MUST BE AN OBJECT & FUNCTION RETURNS THE REST OF THE DAMAGE

    if (card.defence <= DAMAGE_ATTACK) {
        DESTROY_CARD(card);
        DAMAGE_ATTACK -= card.defence;
    } else {
        card.defence -= DAMAGE_ATTACK;
        DAMAGE_ATTACK = 0
    }

    return DAMAGE_ATTACK;
}

function ATTACK(DAMAGE_ATTACK, DEFENCE_CARDS, ALLOWED_TO_ATTACK) {

    //IF DEFED CARD IS THERE DO THE NEXT CODE , ELSE DAMAGE THE HELTH
    if (!ALLOWED_TO_ATTACK) {
        return alert('not allowed');
    }
    if (DEFENCE_CARDS.length) {
        for (let i = 0; i < DEFENCE_CARDS.length; i++) {
            if (DAMAGE_ATTACK > 0) {
                console.log('DAMAGE_ATTACK : ', DAMAGE_ATTACK, 'turn : ', i);
                DAMAGE_ATTACK = DEFEND_WITH_CARD(DEFENCE_CARDS[i], DAMAGE_ATTACK);
                console.log('DAMAGE_ATTACK AFTER DEFENCE : ', DAMAGE_ATTACK, 'turn : ', i);
            } else {
                return;
            }
        }
    }

    OPPONENT_HELTH -= DAMAGE_ATTACK;
    alert(`that's hurt , even if i don't have feeling :(  - ${DAMAGE_ATTACK}`, DAMAGE_ATTACK)
    if (OPPONENT_HELTH <= 0) {
        END_GAME();
    }

    //REFRECH PLAYERS HELTH
    document.querySelector('.opponent_helth').textContent = `${OPPONENT_HELTH} HP`;
    document.querySelector('.player_helth').textContent = `${PLAYER_HELTH} HP`;

}

function END_GAME() {
    alert("I'm DONE")
}

function ADD_EVENT_TO_LISTENERS() {

    HAND.addEventListener('drop', (e) => ADD_CARD_TO_HAND(e));
    HAND.addEventListener('dragover', (e) => e.preventDefault());

    for (let i = 0; i < PLAYER_CARDS.childElementCount; i++) {
        PLAYER_CARDS.querySelectorAll('.card_container')[i].addEventListener('drop', (e) => ADD_CARD_TO_ARENA(e));
        PLAYER_CARDS.querySelectorAll('.card_container')[i].addEventListener('dragover', (e) => e.preventDefault());
    }

    document.querySelector('.player_details').querySelector('button').addEventListener('click', BOT_TURN)

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

    const CARD_DATA = PLAY_COLLECTION_CARDS[dragedCard.getAttribute('id')];
    console.log(CARD_DATA);

    if (e.target.className == 'card_container' && CARD_DATA.from == 'hand') {
        ATTACK_OR_DEFEND(dragedCard);
        const ATTACK_BUTTON = document.createElement('aside');
        ATTACK_BUTTON.innerHTML = '<button>ATTACK</button>';
        ATTACK_BUTTON.querySelector('button').addEventListener('click', () => ATTACK(CARD_DATA.attack, [{ defence: 10 }, { defence: 30 }]));
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
                BOT_TURN();

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
}




SHOW_CARDS(PLAY_COLLECTION_CARDS);

