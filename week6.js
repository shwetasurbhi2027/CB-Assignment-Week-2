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

        function fetchRandomQuote() {
            fetch('https://api.quotable.io/random')
                .then(response => response.json())
                .then(data => {
                    // Display the fetched quote information on the webpage
                    const quoteContainer = document.getElementById('quoteContainer');
                    const quoteInfo = `
                        <blockquote>
                            <p>${data.content}</p>
                            <footer>${data.author}</footer>
                        </blockquote>
                    `;
                    quoteContainer.innerHTML = quoteInfo;
                })
                .catch(error => {
                    console.error('Error fetching quote:', error);
                });
        }

        
        window.onload = fetchRandomQuote;

