import React, { useContext, useRef } from 'react'
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
        getBase64(event.target.files[0]).then(Base64 => {
            localStorage["photoBase64"] = Base64
            console.debug('file stored to localS', Base64)
        })
    }

    const getBase64 = (file) => {
        return new Promise((resolve,reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    }

    const fileToLocalStorage = (e) => {
        e.preventDefault()
        e.persist()
        console.log(e.target.text.value, 'id', e.target.category.value, 'category')
   
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