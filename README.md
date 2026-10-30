# Atmosphere · Weather Dashboard

A live weather dashboard built with **React + Vite**, based on my own Figma design "Atmosphere". It shows the current weather, the next 24 hours and a 5-day forecast for a city, using real data from the OpenWeatherMap API.

![Screenshot of the dashboard](screenshot.png)

## Features

- **Current weather:** temperature, condition, feels like, wind (km/h + compass direction), humidity and chance of rain
- **Changing backdrop:** the weather card's photo changes with the real weather (clear, clouds, rain, storm, snow, fog)
- **The day ahead:** the next 24 hours in 3-hour steps, with a moon icon at night and the warmest hour highlighted
- **5-day forecast:** daily lows and highs, temperature bars, rain chance and a summary sentence
- **Design system:** colors, fonts and spacing stored as CSS variables
- **Error handling:** failed requests (no internet, wrong key, unknown city) are caught and logged

## Built with

- React 19 + Vite
- JavaScript (async/await, fetch, Promise.all)
- CSS (Flexbox, Grid, CSS variables)
- [Lucide](https://lucide.dev) icons
- [OpenWeatherMap API](https://openweathermap.org/api) (current weather + 5-day / 3-hour forecast)
- Figma for the design

## Run it yourself

1. Clone the repository and install the packages:

   ```bash
   git clone https://github.com/jivanipriyank7-create/weather-dashboard-react.git
   cd weather-dashboard-react
   npm install
   ```

2. Get a free API key at [openweathermap.org](https://openweathermap.org/api).

3. Create a file called `.env.local` in the project folder with this line:

   ```text
   VITE_WEATHER_API_KEY=your_key_here
   ```

4. Start the app:

   ```bash
   npm start
   ```

   Then open http://localhost:5173.

## Project structure

```text
src
├── api/weather.js      Fetches the current weather and forecast
├── components/         One .jsx + .css file per part of the page
├── assets/             Weather photos
├── App.jsx             Loads the data and places the components
└── index.css           CSS reset + design system
```

## What's next

- Search for any city
- Detail cards from the Figma design (air quality, UV index, sunrise & sunset)
- Temperature chart for the day ahead