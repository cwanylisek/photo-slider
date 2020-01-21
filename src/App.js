import React from 'react';
import './App.scss';
import { Route } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import AddPhoto from './components/AddPhoto/AddPhoto'
import PhotoContextProvider from './contexts/PhotoContext';

function App() {
    return (
        <div className="App">
            <PhotoContextProvider>
                <Navbar />
                <Route exact path="/" component={Slider} />
                <Route path="/addphoto" component={AddPhoto} />
            </PhotoContextProvider>
        </div>
    );
}

export default App;
