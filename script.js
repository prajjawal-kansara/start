const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const performSearch = () => {
    const query = searchInput.value.trim();
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        searchInput.value = '';
    }
};

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') performSearch();
});
searchButton.addEventListener('click', performSearch);

//Weather
const apiKey = 'cc1132a09c959c92752a7424100015b0'; // Replace with your API key
const city = 'Indore'; // Replace with your city
const weatherWidget = document.getElementById('weather-widget');

const fetchWeather = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherWidget.innerHTML = '<p>You\'re disconnected, Babe :(</p>';
    }
};

const displayWeather = (data) => {
    weatherWidget.innerHTML = `
        <div class="weather-info">
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
        </div>
    `;
};

fetchWeather();


// Bookmarks
const bookmarks = [
    {
        label: "Social",
        bookmarks: [
            { label: "Instagram", url: "https://www.instagram.com/sheesh.roo/" },
            { label: "X", url: "https://x.com/home" }
        ]
    },
    {
        label: "AI",
        bookmarks: [
            { label: "ChatGPT", url: "https://chatgpt.com/" },
            { label: "Gemini", url: "https://gemini.google.com/app?hl=en-IN" }
        ]
    },
    {
        label: "Tools",
        bookmarks: [
            { label: "Gmail", url: "https://mail.google.com/mail/u/0/#inbox" },
            { label: "Youtube", url: "https://www.youtube.com/" },
            { label: "Allen", url: "https://www.allen.ac.in/indore/" }
        ]
    },
    {
        label: "Resources",
        bookmarks: [
            { label: "NROER", url: "http://nroer.gov.in/" },
            { label: "Brilliant", url: "https://brilliant.org/" },
            { label: "Unacademy", url: "https://unacademy.com/" }
        ]
    },
    {
        label: "Chill",
        bookmarks: [
            { label: "Movies", url: "https://binged.to/" },
            { label: "Anime", url: "https://hianime.to/" },
            { label: "Manga", url: "https://comick.io/home" },
            { label: "Pinterest", url: "https://in.pinterest.com/" }
        ]
    }
];

const injectBookmarks = () => {
    const bookmarksContainer = document.getElementById("bookmarks");
    bookmarks.forEach(group => {
        bookmarksContainer.innerHTML += `
            <div class="bookmark-group">
                <h2>${group.label}</h2>
                <ul>
                    ${group.bookmarks.map(({ url, label }) => `<li><a href="${url}">${label}</a></li>`).join('')}
                </ul>
            </div>
        `;
    });
};

injectBookmarks();