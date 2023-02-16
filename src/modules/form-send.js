document.addEventListener('DOMContentLoaded', () => {

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
       form.addEventListener('submit', formSend);
    });

    async function formSend(e) {
        e.preventDefault();
        let form = e.currentTarget;

        if (isValidated(form)) {
            let formData = new FormData(form);

            form.classList.add('_sending');

            let response = await fetch('send.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert('Ошибка!');
                form.classList.remove('_sending');
            }
        }
    }

    function isValidated(checkingForm) {
        let isValidated = true;
        let inputs = Array.from(checkingForm.elements).filter(el => el.matches('input'));
        inputs.forEach(input => {
           if (input.classList.contains('valid') && isValidated) {
               checkingForm.classList.add('is-validated');
           } else {
               checkingForm.classList.remove('is-validated');
               isValidated = false;
           }
        });
        return isValidated;
    }

});