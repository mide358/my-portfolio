import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeImage from "./HomeImage";
import Popup from "./Popup";

const Home = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="container">
      <div className="homeImg">
        <HomeImage />
      </div>

      <div className="home-text carousel-caption">
        <div id="bground">
          <p id="first-text">Hi, my name is</p>
          <h1 className="home-title">
            <span>Iyimide Adegunloye</span>
          </h1>{" "}
          <p> Welcome to my website</p>
          <p id="second-text">
            I am a frontend web developer who creates beautiful and exceptional
            web sites!
          </p>
        </div>
        <button
          href="/"
          type="button"
          variant="primary"
          className="btn-home btn-primary"
          onClick={() => setButtonPopup(true)}
        >
          See more
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className="pop-details">
            <Link to="/about">About </Link>
            <br></br>
            <Link to="/portfolio">Porfolio</Link> <br />
            <Link to="/contact">Contact</Link>
          </div>
        </Popup>
      </div>
    </div>
  );
};

export default Home;
