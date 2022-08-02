import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/22bdq6.jpg",
  });

  const [allMemesImage, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemesImage.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    
    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  }

  return (
    <main className="meme-container">
      <div action="" className=" form">
        <input type="text" name="" id="" placeholder="top text" />
        <input type="text" name="" id="" placeholder="bottom text" />
        <button className="form--btn" onClick={getMemeImage}>
          Get a new meme image
          <i className="fa-solid fa-image ps-2"></i>
        </button>
      </div>
      <img src={meme.randomImage} alt="meme-img" className="meme-img" />
    </main>
  );
}
