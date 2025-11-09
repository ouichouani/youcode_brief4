


let liked_cards = data.filter((item) => item.liked);

function LIKE(liked_element, target , index_pag) {


    if (liked_element.liked) {

        liked_element.liked = false;
        target.src = '/img/assets/unlike.svg';
        CHANGE_LOCAL_STORAGE('data', data);

        liked_cards = liked_cards.filter((item) => item.liked);

        HANDLE_PAGINATION(liked_cards, index_pag - 1 , 5);
        SHOW_CARDS(1, liked_cards, 5);
    }

}

//ADD EVENT LISTINER TO EVERY BUTTON IN 
Array.from(FILTAR_BAR.children).forEach((item) => {
    item.addEventListener('click', () => {
        FILTER_CARDS(item.className , liked_cards);
    })
})


SHOW_CARDS(1, liked_cards, 5);
HANDLE_PAGINATION(liked_cards, 0, 5);




