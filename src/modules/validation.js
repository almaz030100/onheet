import 'jquery-validation';
import 'imask';

document.addEventListener('DOMContentLoaded', () => {

    $('form').each(function() {
        jQuery.validator.addMethod("checkMask", function (e, t) {
            return /.\d..\d{3}..\d{3}.\d{2}.\d{2}/g.test(e);
        });

        $(this).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                    maxlength: 50
                },
                phone: {
                    required: true,
                    checkMask: true
                },
                email: {
                    required: true,
                    minlength: 2,
                    maxlength: 50,
                    email: true
                }
            },
        });
    });

    let elements = document.querySelectorAll('input[name="phone"]');
    let maskOptions = {
        mask: '+{7} (000) 000-00-00',
        lazy: false
    };
    elements.forEach(element => {
        element.addEventListener('focus', () => {
            let mask = IMask(element, maskOptions);
        });
    });


    document.querySelectorAll('input[name="file"]').forEach(el => {

        el.addEventListener('input', () => {
            if (el.files.length !== 0) {
                console.log(el.files);
                let fileName = el.files[0].name;
                el.parentElement.parentElement.lastElementChild.textContent = `${fileName.slice(0, 20)} ...`;
            }
        });

    });

});