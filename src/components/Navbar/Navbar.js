import React, { useContext } from 'react'
import { PhotoContext } from '../../contexts/PhotoContext'
import './Navbar.scss'

const Navbar = () => {

    const { photos } = useContext(PhotoContext)

    const categories = photos.map((photo) => <li key={photo.id}>{photo.category}</li>)

    return (
        <nav className="navbar">
            <div className="navbar__category">currently this categories are available:
                <ul>
                    {categories}
                </ul>
            </div>
            <button className="navbar__dropdown">dropdown filter</button>
        </nav>
    )
}

export default Navbar