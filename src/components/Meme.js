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
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <div>
            <div className='form'>
                <div className='input'>
                    <input type="text" placeholder='top text' className='form-input'></input>
                    <input type="text" placeholder='bottom text' className='form-input'></input>
                </div>
                <button className='form-btn' onClick={getMemeImage}>Get a new meme image  🖼</button>
            </div>
            <div className='meme-image'>
                <img src={meme.randomImage}></img>
            </div>
        </div>
    )
}