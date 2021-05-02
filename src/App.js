import React from 'react';
import './App.css';
import phone from './assets/Phone.png'
import followers from './assets/Followers.png'
import design from './assets/DesignStats.png'
import connect from './assets/Connect.png'
import remote from './assets/RemoteMeeting.png'

import Header from "./components/Header";
import Footer from "./components/Footer";
import SlidesContainer from "./components/SlidesContainer";

const exampleContentData = [
    {
        title: 'Example Title 01',
        image: phone,
        text: 'This is example description text for this slide.'
    },
    {
        title: 'Example Title 02',
        image: followers,
        text: 'This is example description text for this slide.'
    },
    {
        title: 'Example Title 03',
        image: design,
        text: 'This is example description text for this slide.'
    },
    {
        title: 'Example Title 04',
        image: connect,
        text: 'This is example description text for this slide.'
    },
    {
        title: 'Example Title 05',
        image: remote,
        text: 'This is example description text for this slide.'
    }
]

function App() {
    return (
        <div className="App">
            <Header />
            <SlidesContainer data={exampleContentData}
                             size={80}
            />
           <Footer />
        </div>

    );
}

export default App;
