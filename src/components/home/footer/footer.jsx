import React from "react";
import TextField from '@mui/material/TextField';
import Style from "./footer.module.css";
import Inputs from "./input"
import InputSubscription from "./input";
function footer(){
    return(

            <> 
            <div className={Style["footer"]}>
            {/* <div className={Style["forma"]}></div> */}
            <div className={Style["Informacoes"]}>
                <div className={Style["centraliza"]}>
                <h1>Receba informações!</h1>
           
             <InputSubscription/>
            
              
               </div>
                
            </div>
            </div>
            </>

    );
}

export default footer;