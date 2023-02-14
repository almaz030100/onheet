import {Fancybox} from "@fancyapps/ui";

document.addEventListener('DOMContentLoaded', () => {

    Fancybox.bind("[data-fancybox]", {
        autoFocus: false,
        dragToClose: false
    });

});