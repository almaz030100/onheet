import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth >= 992) {

        let fadingTexts = gsap.utils.toArray('[data-fading-text]');
        fadingTexts.forEach(el => {
            gsap.fromTo(el, {opacity: 0}, {
                opacity: 1,
                scrollTrigger: {
                    trigger: el,
                    start: 'bottom bottom',
                    scrub: true
                }
            });
        });

        let typesItemTitles = gsap.utils.toArray('.types__item-title');
        typesItemTitles.forEach(el => {
            gsap.fromTo(el, {opacity: 0}, {
                opacity: 1,
                scrollTrigger: {
                    trigger: el.parentElement,
                    start: 'top center',
                    end: 'top center',
                    scrub: true
                }
            });
        });

        let typesItems = gsap.utils.toArray('.types__item');
        typesItems.forEach(el => {
           gsap.fromTo(el, {backgroundSize: '120%'}, {
               backgroundSize: '100%',
               scrollTrigger: {
                   trigger: el,
                   start: 'top center',
                   end: 'top center',
                   scrub: true
               }
           });
        });

        let parallaxItems = gsap.utils.toArray('[data-parallax="1"]');
        parallaxItems.forEach(el => {
            gsap.to(el, {
                y: 0,
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom',
                    end: 'top 60%',
                    scrub: true
                }
            });
        });

        gsap.fromTo('.contact__wrapper', {y: 400}, {
            y: -400,
            scrollTrigger: {
                trigger: '.contact__wrapper',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        gsap.fromTo('[data-fading-welcome]', {opacity: 0}, {
            opacity: 1,
            scrollTrigger: {
                trigger: '[data-fading-welcome]',
                start: 'top 60%',
                end: 'top 60%',
                scrub: true
            }
        });

    }


    let promoStar = document.querySelector('.promo__star');
    let starInput = document.querySelector('input#star-input');
    promoStar.addEventListener('mouseover', () => {
        starInput.checked = true;
    });
    promoStar.addEventListener('mouseout', () => {
        starInput.checked = false;
    });
    promoStar.addEventListener('click', () => {
        starInput.checked = starInput.checked === false;
    });

});

window.onload = function() {

    if (window.innerWidth >= 992) {
        let tl = gsap.timeline();
        tl
            .to('.onheet-title', {
                y: '-100%',
                duration: 1
            })
            .to('.loading__logos', {
                delay: 1,
                onStart: function() {
                    document.querySelector('.loading__logos').classList.add('loading__logos_animated');
                }
            })
            .to('.onheet-title', {
                y: 0,
                top: '30px',
                width: '194px',
                delay: 2,
                duration: 0.7
            })
            .to('.loading', {
                opacity: 0,
                duration: 2
            }, '<')
            .set('body', {
                overflowY: 'scroll'
            }, '<');
    }

};