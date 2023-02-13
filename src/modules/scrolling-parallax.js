function isInSight(el) {
    if (el.getBoundingClientRect().top - window.innerHeight < 30) {
        return true;
    }
}
function topValueIsPositive(el) {
    if (parseFloat(getComputedStyle(el).top) > 0) {
        return true;
    }
}
function bottomOffset(el) {
    return document.documentElement.clientHeight - el.getBoundingClientRect().top;
}

document.addEventListener('DOMContentLoaded', () => {

    let elementsAnimated = document.querySelectorAll('.parallax-element');
    let oldScrollY = window.scrollY - 1;

    const isScrollingDown = () => {
        let down = undefined;
        if (oldScrollY < window.scrollY) {
            down = true;
        } else if (oldScrollY > window.scrollY) {
            down = false;
        }
        oldScrollY = window.scrollY;
        return down;
    }

    elementsAnimated.forEach((el) => {

        let speed = 5;

        switch (el.getAttribute('data-parallax')) {
            case '1':
                speed = 7;
                break;
            case '2':
                speed = 7;
                break;
            case '3':
                speed = 19;
                break;
            case '4':
                speed = 25;
                break;
            case '5':
                speed = 30;
                break;
            case '6':
                speed = 20;
                break;
        }

        window.addEventListener('scroll', () => {

            if (isInSight(el) && topValueIsPositive(el)) {
                if (isScrollingDown() === true) {
                    if (parseFloat(getComputedStyle(el).top) < 10) {
                        el.style.top = 0;
                    } else {
                        el.style.top = parseFloat(getComputedStyle(el).top) - speed + 'px';
                    }
                } else if (isScrollingDown() === false) {
                    el.style.top = parseFloat(getComputedStyle(el).top) + speed + 'px';
                }
            }

        });

    });

    let typesTitle = document.querySelector('.types__title');
    let typesShadow = document.querySelector('.types__top-shading');

    window.addEventListener('scroll', () => {
        let titleOffset = bottomOffset(typesTitle);
        typesShadow.style.top = titleOffset - typesShadow.offsetHeight + 'px';
    });

});