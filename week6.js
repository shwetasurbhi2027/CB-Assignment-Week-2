function validateForm(event) {
    event.preventDefault();

    
    let emailInput = document.getElementById('email');
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!'); 
}

