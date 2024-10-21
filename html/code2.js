document.getElementById('showFormButton').addEventListener('click', function() {
    const form = document.getElementById('contactForm');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
        document.getElementById('contactForm').reset();
        document.getElementById('contactForm').style.display = 'none';
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});