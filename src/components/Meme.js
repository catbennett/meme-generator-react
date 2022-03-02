import React from "react"
import memesData from "../memesData.js"


export default function Meme() {
    
    
    const [memeImage, changeMeme] = React.useState("")

    function getMeme() {
        const memes = memesData.data.memes
        const randomNum = Math.floor(Math.random() * memes.length)
        changeMeme(memes[randomNum].url)
        // 
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top-text"
                    className="form--input"    
                />
                <input 
                    type="text" 
                    placeholder="Bottom-text"
                    className="form--input"    
                />
                <button onClick = {getMeme} className = "meme--button">Get a new meme image  🖼</button>
                <img className = "meme--image" src={memeImage}/>
            </div>
        </main>
    )
}