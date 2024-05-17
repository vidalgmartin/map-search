import { useState } from 'react'
import SearchForm from './components/SearchForm'
import Map from './components/Map'
import './app.css'

export default function App() {
  const [ place, setPlace ] = useState(null)

  return (
      <div className="main-container">
        <SearchForm searchFunction={(e) => setPlace(e)}  />
        <Map place={place} />
      </div>
  )
}
