import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import LocationHeader from './components/LocationHeader.jsx'
import CurrentWeather from './components/CurrentWeather.jsx'
import HourlyForecast from './components/HourlyForecast.jsx'
import DailyForecast from './components/DailyForecast.jsx'
import { getCurrentWeather, getForecast } from './api/weather.js'
import './App.css'

const city = 'Berlin'

// Turns the weather website's word into one of our backdrop names
function toBackdrop(weatherWord) {
  if (weatherWord === 'Clear') return 'clear'
  if (weatherWord === 'Clouds') return 'clouds'
  if (weatherWord === 'Rain' || weatherWord === 'Drizzle') return 'rain'
  if (weatherWord === 'Thunderstorm') return 'storm'
  if (weatherWord === 'Snow') return 'snow'
  return 'mist'
}

function App() {
  const [condition, setCondition] = useState('clouds')
  const [weather, setWeather] = useState(null)     // the current weather answer; empty at first
  const [forecast, setForecast] = useState(null)   // the forecast answer; empty at first

  useEffect(() => {
    // 1. DEFINE the job (the recipe)
    async function loadWeather() {
      try {
        // Plan A: ask for both at the same time, wait until both arrive
        const [current, forecastData] = await Promise.all([
          getCurrentWeather(city),
          getForecast(city),
        ])
        console.log('Weather answer:', current)
        console.log('Forecast answer:', forecastData)

        setWeather(current)
        setForecast(forecastData)
        setCondition(toBackdrop(current.weather[0].main))
      } catch (error) {
        // Plan B: something went wrong (no internet, bad key, unknown city…)
        console.error('Could not load the weather:', error.message)
        setCondition('clouds')
      }
    }

    // 2. INVOKE (call) the job, so it actually runs
    loadWeather()
  }, [])

  return (
    <>
      <Navbar />
      <main className="page">
        <LocationHeader weather={weather} />
        <CurrentWeather condition={condition} weather={weather} forecast={forecast} />
        <div className="forecasts">
          <HourlyForecast forecast={forecast} />
          <DailyForecast forecast={forecast} />
        </div>
      </main>
    </>
  )
}

export default App