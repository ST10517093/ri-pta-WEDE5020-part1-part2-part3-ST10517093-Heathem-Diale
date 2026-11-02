document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const name = form.querySelector('input[type="text"]');
            const phone = form.querySelector('input[type="tel"]');
           
            if (name && name.value.trim() === '') {
                e.preventDefault();
                alert('Please enter your name.');
            } else if (phone && !/^[0-9]{10}$/.test(phone.value.trim())) {
                e.preventDefault();
                alert('Please enter a valid 10-digit phone number.');
            } else {
                alert('Success! Form submitted.');
            }
        });
    });
});