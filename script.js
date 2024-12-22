function fetchCityInfo() {
    const city = document.getElementById('cityInput').value;
    const cityInfoDiv = document.getElementById('cityInfo');

    if (!city) {
        cityInfoDiv.style.display = 'none';
        alert('Please enter a city name');
        return;
    }

    fetch(`https://geocode.xyz/${city}?json=1`)
        .then(response => response.json())
        .then(data => {
            cityInfoDiv.style.display = 'block';
            cityInfoDiv.innerHTML = `
                <h2>${data.standard.city}, ${data.standard.countryname}</h2>
                <p>Latitude: ${data.latt}</p>
                <p>Longitude: ${data.longt}</p>
            `;
        })
        .catch(error => {
            cityInfoDiv.style.display = 'none';
            console.error('Error fetching city info:', error);
            alert('Failed to fetch city information');
        });
}
