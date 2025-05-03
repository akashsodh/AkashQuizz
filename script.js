document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    if (name && email && password) {
        message.textContent = 'Registration successful!';
    } else {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
    }
});
