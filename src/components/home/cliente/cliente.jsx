import Styles from "./cliente.module.css"
import React from "react";
import Card from "../Cards/card"


function clientes() {
    return (
        
   <>

        <div className={Styles["cliente"]}>
         
          <h1>Clientes</h1>
          <h1 className={Styles["cor"]}>que aprovam</h1>
          
          <div className={Styles["cards-centralizar"]}>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
         </div>
       </div>
        </>
          )
     }
        
        export default clientes;