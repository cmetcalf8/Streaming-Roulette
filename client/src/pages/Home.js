import React from 'react';
import "../App.css";

function homePage() {
    return (
        <div className='home'>
            <div>
                <h1>Welcome to Streaming Roulette</h1>
            </div>
            <div>
                <h4>Hit the start button below and be presented with a random movie to watch.</h4>
            </div>
            <div>
                <button>
                    Start
                </button>
            </div>
        </div>
    )
}

export default homePage;