import React from 'react';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel } from "react-responsive-carousel";
// import {carousel } from "react-bootstrap-carousel";
import  tps1 from './images/tps1.jpg';
import  tps2 from './images/tps2.jpg';
import  tps3 from './images/tps3.jpg';
import  ministere from './images/ministere.jpg';
import './Slide.css';
import Navbar from '../../components/Navbar';
import Menu from './Menu';
const  Slide = () =>{
    return (  

 <>
 <header className="header__middle">
            <div className="container">
                <div className="row">
 <Carousel autoPlay interval={6000} infiniteLoop thumbWidth={120} showIndicators={false} showStatus={false}>
        <div>
            <img src={tps1} alt="slide 1"/>
            <div className="overlay">
                <h2 className="overlay_title">Slide 1</h2>
                <p className="overlay_text">Descriiption du slide 2</p>
            </div>
        </div>
        <div>
            <img src={tps1} alt="slide 1"/>
            <div className="overlay">
                <h2 className="overlay_title">Slide 2</h2>
                <p className="overlay_text">Descriiption du slide 2</p>
            </div>
        </div>
        <div>
        <img src={tps2} alt="slide 2"/>
            <div className="overlay">
                <h2 className="overlay_title"> slide 3</h2>
                <p className="overlay_text">Descriiption du slide 3</p>
            </div>
        </div>
        <div>
        <img src={ministere} alt="slide 3"/>
            <div className="overlay">
                <h2 className="overlay_title"> Slide 4 </h2>
                <p className="overlay_text">Descriiption du slide 4</p>
            </div>
        </div>
        <div>
        <img src={tps3} alt="slide 4"/>
            <div className="overlay">
                <h2 className="overlay_title">Slide 5</h2>
                <p className="overlay_text">Descriiption du slide 5</p>
            </div>
        </div>   
        
</Carousel> 
</div>
</div>
</header>

</>
    )
    }

export default Slide;


