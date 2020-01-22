import React, { useContext, use } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { PhotoContext } from '../../contexts/PhotoContext'
import Select from 'react-select'
import './Navbar.scss'

const Navbar = () => {

    const { photos } = useContext(PhotoContext)

    const options = photos.map(item => ({
        value: item.category,
        label: item.category
    }))

    const styles = {
        control: (provided, state) => ({
            ...provided,
            background: '#FDFDFD',
            border: '1px solid rgba(0, 83, 177, 0.25)',
            boxSizing: 'border-box',
            borderRadius: '20px',
            width: '90%',
            height: '32px',
            padding: '0 15px',
            marginTop: '15px'
        }),
        menu: (provided) => ({
            ...provided,
            width: '80%',
            zIndex: '110',
        })
    }

    const { selectedOption } = [];
       
    const handleChange = selectedOption => {
        console.log(`Option selected:`, selectedOption.value);
    };

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
            {/* <button className="navbar__button">dropdown filter</button> */}
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
                styles={styles}
            />
            {routeButton}
        </nav>
    )
}

export default Navbar