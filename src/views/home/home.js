import React from "react";
import Footer from "../../components/footer";
import ImgHome from "../../assets/images/home.png";
import "./styles.scss";
import Menu from "../../components/navbar";

// import { ReactDOM } from "react";

function Home() {
  return (
    <div className="home-container">
      <div className="navbar">
        <Menu/>
      </div>

      <div className="title-container">
        <h1>LUDOVYKO</h1>        
        <p>MULTIARTISTA VISUAL</p>
        <br />
   
        
      </div>
      <div className="home-body-container">
      
        <img src={ImgHome} alt="img-home" />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
