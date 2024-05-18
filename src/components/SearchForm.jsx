import { useState } from 'react'
import './components.css'

export default function SearchForm({ searchFunction }) {
    const [ search, setSearch ] = useState('')
    const [ location, setLocation ] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${search}&format=geojson&addressdetails=1&layer=address&limit=5`)
        const data = await res.json()

        const details = data.features.map((feature) => {
            const place = {
                name: feature.properties.display_name,
                longitude: feature.geometry.coordinates[0],
                latitude: feature.geometry.coordinates[1]
            }
            
            return place
        })

        setLocation(details)
    }

    return (
        <div className="search-form-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <input 
                    placeholder="Search for a location..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>

            {location && location.map((place, index) => (
                <div className="location" key={index}>
                    <p >{place.name}</p>
                    <button onClick={() => searchFunction(place)}>Search</button>
                </div>
            ))}
        </div>
    )
}