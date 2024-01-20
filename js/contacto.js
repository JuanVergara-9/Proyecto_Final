document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        text: document.getElementById('text').value
    };

    sessionStorage.setItem('formData', JSON.stringify(formData));
    location.reload();
});
