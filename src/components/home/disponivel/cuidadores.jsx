import React from "react";
import CardCuidador from "../Cards/cards-disponivel/card-cuidador";
import Style from "./cuidadores.module.css"
function disponivel(){
    return(
<>
       <div className={Style["cuidador"]}>
         <div className={Style["cards"]}>
            <CardCuidador />
            <CardCuidador/>
            <CardCuidador/>
            <CardCuidador/>
            <CardCuidador/>
            <CardCuidador/>
        </div>
        <div>
                <button>Ver Todos Os Cuidadores</button>
            </div>
        </div>

</>

        );
    }

    export default disponivel;