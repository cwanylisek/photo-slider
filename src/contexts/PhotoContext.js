import React, { createContext, useState } from 'react'
import kircholm from '../assets/img/kircholm.jpg'
import landscape from '../assets/img/nature.jpg'
import ramen from '../assets/img/ramen.jpg'
import uuid from 'uuid/v1'

export const PhotoContext = createContext()

const PhotoContextProvider = (props) => {
    const [photos, setPhoto] = useState([
        { photo: kircholm, text: 'randomtext 1', category: 'art', id: 1 },
        { photo: landscape, text: 'randomtext 2', category: 'nature', id: 2 },
        { photo: ramen, text: 'randomtext 3', category: 'food', id: 3 }
    ])

    const [photoIndex, setIndex] = useState(0)

    const [translateValue, setTranslate] = useState(0)

    const [newImage, setNewImage] = useState({})

    const addPhoto = (photo, text, category) => {
        setPhoto([...photos, {photo, text, category, id: uuid() }])
    }

    const filterPhotos = (category) => {
        setPhoto(photos.filter(photo => photo.category == category))
        console.log(photos)
    }

    const rightArrow = () => {
        if (photoIndex === photos.length - 1) {
            setIndex(0)
            setTranslate(0)
        } else {
            setIndex(photoIndex + 1)
            setTranslate(translateValue + -(500))
        }
    }

    const leftArrow = () => {
        if (photoIndex === 0) {
            return
        } else {
            setIndex(photoIndex - 1)
            setTranslate(translateValue + 500)
        }
    }

    const saveImage = (newImage) => {
        setNewImage(newImage)
        console.log(newImage, 'image in state')
    }

    return (
        <PhotoContext.Provider value={{ photos, filterPhotos, addPhoto, rightArrow, leftArrow, photoIndex, translateValue, newImage, saveImage }}>
            {props.children}
        </PhotoContext.Provider>
    )
}

export default PhotoContextProvider;