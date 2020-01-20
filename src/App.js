import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import PhotoContextProvider from './contexts/PhotoContext';

function App() {
    return (
        <div className="App">
            <PhotoContextProvider>
                <Navbar />
                {/* <Slider /> */}
            </PhotoContextProvider>
        </div>
    );
}

export default App;
