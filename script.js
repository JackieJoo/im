var DOM = {
    items: document.querySelector('.items'),
    cards: document.querySelectorAll('.item-card')
}


function select(event) {
    event.preventDefault();
    var target = event.target;

    if (!target.matches('.item-card, .item-card *, .buy')) return;
    if (!target.closest('.item').classList.contains('disabled')) {
        target.closest('.item').classList.toggle('selected');
    }
}

function selectHover(event) {
    var target = event.target;

    if (!target.matches('.selected .item-card')) return;
    target.closest('.item.selected').classList.add('selected-hover');
}

function disableHover(event) {
    var target = event.target;

    if (!target.matches('.selected .item-card')) return;
    target.closest('.item.selected').classList.remove('selected-hover');
}

function init() {
    DOM.items.addEventListener('click', select);

    [].forEach.call(DOM.cards, function(elem) {
        elem.addEventListener('mouseleave', selectHover);
        elem.addEventListener('mouseenter', disableHover);
    });

}


init();