function agregar(){
    const cards = document.querySelector('#cards');
    const card = document.querySelector('#card');
    cards.classList.add('cards');
    card.classList.add('card');
}

function quitar(){
    const cards = document.querySelector('#cards');
    const card = document.querySelector('#card');
    cards.classList.remove('cards');
    card.classList.remove('card');
}
