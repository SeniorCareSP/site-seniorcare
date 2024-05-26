import Style from "./JunteSe.module.css"
import React from "react";
import Imagem from "../../../utils/assets/senhora1.png"
import Imagem2 from "../../../utils/assets/senhora2.png"
function JunteSe() {
    return (
        <>
        <div className={Style["JunteSe"]}>
            <div className={Style["texto"]}>
            <h1>Junte-se ao time</h1>
            </div>
            <div className={Style["centraliza"]}>
            <button>Seja um cuidador Senior Care </button>
            <div className={Style["obj4"]}> </div>
            <div className={Style["borda"]}> </div>
            <div className={Style["img1"]}>
           
             <img src={Imagem} alt=""/>
            </div>
            <button className={Style["botao"]}>Encontre um cuidador </button>
            <div className={Style["obj5"]}> </div>
            <div className={Style["borda1"]}> </div>
            <div className={Style["img2"]}>
             <img src={Imagem2} alt=""/>
            </div>
           

           <div className={Style["teste"]}>
            <div className={Style["borda2"]}> </div>
            <div className={Style["textinho"]}>
                <p>
                Quando encontrar um cuidador em quem possa confiar para fornecer assistência amorosa e 
                dedicada aos seus entes queridos, você poderá estabelecer um acordo com essa pessoa
                 para criar sua própria rede personalizada de cuidados para idosos. Os cuidadores qualificados
                  que você recrutar formarão a equipe dos seus sonhos, liberando tempo para que você cuide de outras 
                  responsabilidades. Afinal, o acesso a cuidadores acessíveis, flexíveis e confiáveis é o objetivo do
                   Senior Care.
                </p>
            </div>
            </div>
             </div>
             <div className={Style["Forma"]}>
             <div className={Style["forma"]}></div>
             </div>
        </div>
        </>
    );
}

export default JunteSe;