import React from 'react';
import "../App.css";
import { MDBBtn } from 'mdb-react-ui-kit';

function homePage() {
    const handleClick = () => {

    }
    return (
        <div className='home'>
            <div>
                <h1>Welcome to Streaming Roulette</h1>
            </div>
            <div>
                <h4>Hit the start button below to get a random movie to watch.</h4>
            </div>
            <div>
                <MDBBtn rounded className='text-light' color='dark' onClick={handleClick}>
                    Start
                </MDBBtn>
            </div>
        </div>
    )
}

export default homePage;