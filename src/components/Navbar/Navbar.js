import React, { useContext } from 'react'
import { PhotoContext } from '../../contexts/PhotoContext';
import './Navbar.scss'

const Navbar = props => {

    const { photos } = useContext(PhotoContext);

    const categories = photos.map((photo) => 
        <ul>
            <li>{photo.category}</li>
        </ul>
    )

    return (
        <nav className="navbar">
            <div className="navbar__category">currently this categories are available:{categories}</div>
            <div className="navbar__dropdown">dropdown filter</div>
        </nav>
    )
}

export default Navbar