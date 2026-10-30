import { CloudSun, Search, LocateFixed } from 'lucide-react'
import './Navbar.css'
import { useState } from 'react'
function Navbar() {
  
    // Memory box for the text typed in the search box (starts empty)
  const [query, setQuery] = useState('')
  return (
    <header className="navbar">
      <div className="brand">
        <CloudSun size={32} />
        <span className="brand-name">atmosphere</span>
      </div>

      <nav className="nav-links">
        <a href="#" className="nav-link active">Overview</a>
        <a href="#" className="nav-link">Weather maps</a>
        <a href="#" className="nav-link">Saved places</a>
      </nav>

      <div className="location-controls">
        <form className="search-form" id="search-form">
          <Search size={16} />
          <input
            type="text"
            id="city-input"
            className="search-input"
            placeholder="Search city or zip code"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <span className="shortcut">⌘ K</span>
        </form>

        <button type="button" className="locate-button" aria-label="Use my location">
          <LocateFixed size={18} />
        </button>

        <div className="unit-toggle">
          <button type="button" className="unit active">°C</button>
          <button type="button" className="unit">°F</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar