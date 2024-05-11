import Styles from "./cliente.module.css"
import React from "react";
import Card from "../Cards/card"
import Card2 from "../Cards/card2"
// import Icom from "../../../utils/assets/Ellipse 43.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "soft", background: "#2C7595"  ,borderRadius: "15px"}}
      onClick={onClick}
    />
  );
}

function clientes() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
      nextArrow:  <SamplePrevArrow />,
      prevArrow: <SamplePrevArrow />
    };
    
   
  

    return (
        
        <div className={Styles["cliente"]}>
          <div className={Styles["titulo"]}>
          <h1>Clientes</h1>
          <h1 className={Styles["cor"]}>que aprovam</h1>
          </div>
          
          {/* <div className={Styles["cards-centralizar"]}> */}
         {/* </div> */}
         <div className={Styles["slider"]}>
         <Slider {...settings}>
       <Card/>
       <Card2/>
       <Card/>
       <Card2/>
       <Card/>
       <Card2/>
       </Slider>
       </div>
       </div>
      
          )
     }
        
        export default clientes;