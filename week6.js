function validateForm(event) {
    event.preventDefault();

    
    let emailInput = document.getElementById('email');
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!'); 
    const apiKey = 'YOUR_API_KEY';
const city = 'DELHI'; 
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


function fetchWeatherData() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `
                <p><strong>City:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}


window.onload = fetchWeatherData;

}
