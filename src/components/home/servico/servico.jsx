import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "./servico.module.css"
import Imagem from "../../../utils/assets/nuvem.png"
import Imagem1 from "../../../utils/assets/nuvem1.png"
function Servico() {
    const navigate = useNavigate();
    return (
        <frameElement>
        <div id="section3" className={Style["servico"]}>
            <span className={Style["obj1"]}></span>
            <h1>Serviços</h1>
            <p>
                Não importa se você precisa de um cuidador em tempo integral para auxiliar em casa ou ocasionalmente durante a semana - o Senior Care ajuda você a se conectar e conversar com cuidadores qualificados perto de você.
            </p>
            <button onClick={()=> navigate("/cadastro")}>Comece agora</button>
          
            {/* <span className={Style["obj2"]}></span> */}
           
            <img src={Imagem} alt=""  className={Style["obj2"]} />
            <img src={Imagem1} alt=""  className={Style["obj1"]} />
        </div>
        </frameElement>
    );
}

export default Servico;