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

            if (form.elements.file) {
                formData.append('file', form.elements.file.files[0])
            }

            form.classList.add('_sending');

            let response = await fetch('send.php', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                let result = await response.json();
                console.log(result);
                form.reset();
                form.classList.remove('_sending');
                form.classList.add('_success');
            } else {
                form.classList.remove('_sending');
                form.classList.add('_error');
            }
        }
    }

    function isValidated(checkingForm) {
        let isValidated = true;
        let inputs = Array.from(checkingForm.elements).filter(el => el.matches('input') && el.hasAttribute('required'));
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