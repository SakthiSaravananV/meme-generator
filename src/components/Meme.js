import React from 'react';
import '../App.css';
import memesData from "../memesData.js";

export default function Meme() {

    // const [url, setUrl] = React.useState("");
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            topText:"",
            bottomText:"",
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <div>
            <div className='form'>
                <div className='input'>
                    <input type="text" placeholder='top text' className='form-input' 
                    name="topText" value={meme.topText} onChange={handleChange}></input>
                    <input type="text" placeholder='bottom text' className='form-input'
                    name="bottomText" value={meme.bottomText} onChange={handleChange}></input>
                </div>
                <button className='form-btn' onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}