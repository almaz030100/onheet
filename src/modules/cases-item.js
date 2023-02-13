document.addEventListener('DOMContentLoaded', () => {

    function resizeCasesItem(elements) {
        elements.forEach(el => {
            el.style.height = el.offsetWidth * 1.385 + 'px';
        })
    }

    let casesItems = document.querySelectorAll('.cases__item-main');

    resizeCasesItem(casesItems);

    window.addEventListener('resize', () => {
        resizeCasesItem(casesItems);
    });

});