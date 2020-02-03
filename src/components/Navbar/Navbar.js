import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { PhotoContext } from '../../contexts/PhotoContext'
import Select from 'react-select'
import './Navbar.scss'

const Navbar = () => {

    const { photos, filterPhotos } = useContext(PhotoContext)

    const options = photos.map(item => ({
        value: item.category,
        label: item.category
    }))

    const styles = {
        control: (provided, state) => ({
            ...provided,
            background: '#FDFDFD',
            border: '1px solid rgba(248, 41, 73, 0.25)',
            boxSizing: 'border-box',
            borderRadius: '20px',
            width: '90%',
            height: '32px',
            padding: '0 15px'
        }),
        menu: (provided) => ({
            ...provided,
            width: '80%',
            zIndex: '110',
        }),
        container: (provided) => ({
            ...provided,
            width: '195px'
        })
    }

    const { selectedOption } = []

    const handleFilter = selectedOption => {
        const categorySelected = selectedOption.value
        filterPhotos(categorySelected)
    };

    //const categories = photos.map((photo) => <li key={photo.id}>{photo.category}</li>)

    const location = useLocation()
    let routeButton
    location.pathname === '/addphoto' ? routeButton = <Link to="/" className="navbar__button">slider</Link> : routeButton = <Link to="/addphoto" className="navbar__button">add photo</Link>

    return (
        <nav className="navbar">
            {/* <div className="navbar__category">currently this categories are available:
                <ul>
                    {categories}
                </ul>
            </div> */}
            <Select
                value={selectedOption}
                onChange={handleFilter}
                options={options}
                styles={styles}
                placeholder={'filter photos'}
                theme={theme => ({
                    ...theme,
                    borderRadius: 0,
                    colors: {
                        ...theme.colors,
                        primary25: '#f82949',
                        primary: '#f82949',
                    },
                })}
            />
            {routeButton}
        </nav>
    )
}

export default Navbar