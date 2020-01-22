import React, { useEffect, useContext } from 'react'
import { PhotoContext } from '../../contexts/PhotoContext'

const AddPhoto = () => {

    const { saveImage, newImage, addPhoto } = useContext(PhotoContext)

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
            <input type="file" onChange={photoSelectHandler} />
            <input name="text" id="text" />
            <input name="category" id="category" />
            <button type="submit">Save</button>
        </form>
    )
}

export default AddPhoto