import React, { useContext, use } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { PhotoContext } from '../../contexts/PhotoContext'
import './Navbar.scss'

const Navbar = () => {

    const { photos } = useContext(PhotoContext)

    const categories = photos.map((photo) => <li key={photo.id}>{photo.category}</li>)

    const location = useLocation()
    let routeButton 
    location.pathname === '/addphoto' ? routeButton = <Link to="/" className="navbar__button">slider</Link> : routeButton = <Link to="/addphoto" className="navbar__button">add photo</Link>

    return (
        <nav className="navbar">
            <div className="navbar__category">currently this categories are available:
                <ul>
                    {categories}
                </ul>
            </div>
            <button className="navbar__button">dropdown filter</button>
            {routeButton}
        </nav>
    )
}

export default Navbar