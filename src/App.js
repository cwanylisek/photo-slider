import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import PhotoContextProvider from './contexts/PhotoContext';

function App() {
    return (
        <div className="App">
            <PhotoContextProvider>
                <Navbar />
                <Slider />
            </PhotoContextProvider>
        </div>
    );
}

export default App;
