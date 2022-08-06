import React from "react";
// import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/22bdq6.jpg",
  });

  const [allMemes, setAllMeme] = React.useState([]);

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);

  console.log(allMemes);
  function getMemeImage(event) {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    setMeme((prevData) => {
      // const { name, value } = event.target;
      return {
        ...prevData,
        // [name] :  value
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <main className="meme-container">
      <div className=" form">
        <input
          type="text"
          name="topText"
          value={meme.topText}
          placeholder="top text"
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          value={meme.bottomText}
          placeholder="bottom text"
          onChange={handleChange}
        />
        <button className="form--btn" onClick={getMemeImage}>
          Get a new meme image
          <i className="fa-solid fa-image ps-2"></i>
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme-img" className="meme-img" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
