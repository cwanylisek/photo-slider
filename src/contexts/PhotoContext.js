import React, { createContext, useState } from 'react'
import kircholm from '../assets/img/kircholm.jpg'
import landscape from '../assets/img/nature.jpg'
import uuid from 'uuid/v1' 

export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
    const [photos, setPhoto] = useState([
        {photo: kircholm, text: 'randomtext 1', category: 'art', id: 1},
        {photo: landscape, text: 'randomtext 2', category: 'nature', id: 2}
    ])

    return (
        <PhotoContext.Provider value={{photos, setPhoto}}>
            {props.children}
        </PhotoContext.Provider>
    )
}

export default PhotoContextProvider;