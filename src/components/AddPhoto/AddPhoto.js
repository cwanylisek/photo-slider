import React, { useEffect, useContext } from 'react'
import { PhotoContext } from '../../contexts/PhotoContext'

const AddPhoto = () => {

    const { saveImage, newImage } = useContext(PhotoContext)

    const photoSelectHandler = event => {
        console.log(event.target.files[0], 'event target log')
        saveImage(event.target.files[0])
    }

    const fileToLocalStorage = () => {
        const imageData = new FormData()
        console.log(newImage, 'newImage in save button')
        imageData.append('image', newImage, newImage.name)
        console.log(imageData, 'imagedata')
    }

    return (
        <div className="add-photo">
            <input type="file" onChange={photoSelectHandler} />
            <button onClick={fileToLocalStorage}>Save</button>
        </div>
    )
}

export default AddPhoto