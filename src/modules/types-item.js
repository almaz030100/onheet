document.addEventListener('DOMContentLoaded', () => {

    function resizeBlockToSquare(elements) {
        elements.forEach(el => {
            el.style.height = el.offsetWidth + 'px';
        })
    }

    let typesItems = document.querySelectorAll('.types__item');

    resizeBlockToSquare(typesItems);

    window.addEventListener('resize', () => {
        resizeBlockToSquare(typesItems);
    });

});