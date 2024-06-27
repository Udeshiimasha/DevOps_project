import React from "react";
import './FirstPage.css';
import bg from "../assets/images/firstPageImg_.png";
import image1 from "../assets/images/img.jpg";
import image2 from "../assets/images/firstPageimg.png";
import { Parallax } from 'react-parallax';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="App">
      <Parallax className="parallax img" strength={300} bgImage={bg} bgImageAlt="background">
        <div className="FPcontainer">
          <div className="text_content">
            <div style={{ fontSize: 60 }}>
              Herblin Cosmetics Store
            </div>
            <div style={{ fontSize: 45, fontStyle: "oblique", color: "ivory", width: 450 }}>
              It’s okay to take time for yourself
            </div>
            <div style={{ fontSize: 22, fontStyle: "oblique", color: "cornsilk", width: 450 }}>
              Nature is our muse and our mission. We are cruelty-free, paraben-free, & 100% vegan.
            </div>
            <div style={{ fontSize: 20, fontStyle: "oblique", color: "beige", width: 450 }}>
              Using conventional, antiquated herbal formulations, we develop herbal cosmetic products.
            </div>
          </div>
        </div>
      </Parallax>
      <div className="contnt">
        <div className="cont">
          <img src={image1} alt="Image 1" style={{ width: '300px', height: '400px', padding: '15px 15px' }} />
          <img src={image2} alt="Image 2" style={{ width: '250px', height: '250px', padding: '15px 15px' }} />
          <div className="box_content">
            <h1>
              You can LogIn or Sign In.
            </h1>
            <p style={{ textAlign: "center" }}>
              You can view All Cosmetics in Herblin Cosmetics Store.
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>

              <button className="my-button" onClick={navigateToRegister}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
