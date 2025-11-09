

Array.from(FILTAR_BAR.children).forEach((item) => {
    item.addEventListener('click', () => {
        FILTER_CARDS(item.className , data);
    })
})

SHOW_CARDS(1, data , 24);
HANDLE_PAGINATION(data , 0 , 24) ;



