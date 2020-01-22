import React, { useEffect, useContext, useRef } from 'react'
import { PhotoContext } from '../../contexts/PhotoContext'
import './AddPhoto.scss'

const AddPhoto = () => {

    const { saveImage, newImage, addPhoto } = useContext(PhotoContext)

    const photoInput = useRef()

    const addPhotoButton = () => {
        photoInput.current.click()
    }

    const photoSelectHandler = event => {
        console.log(URL.createObjectURL(event.target.files[0]), 'event target log')
        saveImage(URL.createObjectURL(event.target.files[0]))
    }

    const fileToLocalStorage = (e) => {
        e.preventDefault()
        e.persist()
        console.log(e.target.text.value, 'id', e.target.category.value, 'category')
        //const imageData = new FormData()
        console.log(newImage.name, 'newImage in save button')
        //imageData.append('image', newImage, newImage.name)
        //console.log(imageData, 'imagedata')
        addPhoto(newImage, e.target.text.value, e.target.category.value)
    }

    return (
        <form className="add-photo" onSubmit={fileToLocalStorage}>
            <input className="add-photo__form-input" style={{display: 'none'}} type="file" onChange={photoSelectHandler} ref={photoInput} />
            <button className="add-photo__form-input navbar__button" type="button" onClick={addPhotoButton}>pick photo</button>
            <input className="add-photo__form-input" name="text" id="text" placeholder="type some text" />
            <input className="add-photo__form-input" name="category" id="category" placeholder="add category" />
            <button className="add-photo__form-input navbar__button" type="submit">Save</button>
        </form>
    )
}

export default AddPhoto