import React from "react";
import TextField from '@mui/material/TextField';
import Style from "./footer.module.css";
import Inputs from "./input"
import Icons from "../../../utils/assets/Social (1).png";
import Logo from "../../../utils/assets/Logo-azul.png"
import InputSubscription from "./input";
function footer(){
    return(

            <> 
            <div className={Style["footer"]}>
            {/* <div className={Style["forma"]}></div> */}
            <div className={Style["Informacoes"]}>
                <div className={Style["centraliza"]}>
                <h1>Receba informações!</h1>
               <div className={Style["teste"]}>
               
                <InputSubscription/>
                </div>
               </div>
            </div>
            <div className={Style["Info"]}>
            <div className={Style["opcoes"]}>
                    <a>Sobre</a>
                    <a>Serviços</a>
                    <a>FAQ</a>
                    <a>Suporte</a>
                    </div>
                 <img src={Icons} alt=""/>    
            </div>
            <div className={Style["linha"]}></div>
            <div className={Style["burocracia"]}>
               <p>© 2024 Senior Care. All rights reserved.</p>
               <img src={Logo} alt="" />
               <p>Terms of Service  </p>
                  <p className={Style["privacy"]}>  Privacy Policy</p>
            </div> 
            </div>
            </>

    );
}

export default footer;