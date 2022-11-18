import React from 'react';

function homePage() {
    return (
        <div>
            <div>
                <h1>Welcome to Streaming Roulette</h1>
            </div>
            <div>
                <h2>Select your streaming platform and genre then hit start.</h2>
            </div>
            <div>
            <select className="platformList" id="platformList">
                <option value="option 1">Netflix</option>
                <option value="option 2">Hulu</option>
                <option value="option 3">Prime</option>
                <option value="option 4">HBO</option>
                <option value="option 5">Disney+</option>
            </select>
            </div>
            <div>
            <select className="genreList" id="genreList">
                <option value="option 1">Comedy</option>
                <option value="option 2">Drama</option>
                <option value="option 3">Horror</option>
                <option value="option 4">Action</option>
                <option value="option 5">Romance</option>
            </select>
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