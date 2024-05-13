
import React from "react";
import Style from "./apresentacao.module.css"
import idosos from "../../../utils/assets/idosos.png"
function Apresentacao() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={Style["apresentacao"]}>
            <div className={Style["texto"]}>
                <h1>
                    Conectando corações, <span>cuidando</span> de quem você ama.
                </h1>
                <p>
                    <button onClick={() => scrollToSection('section5')}>Saiba mais </button>
                </p>
            </div>

            <div className={Style["imagem_idosos"]}>
                <img src={idosos} alt = "casal de idosos"/>              
                  <span className={Style["cube1"]}></span>
                <span className={Style["cube2"]}></span>
            </div>

            <div className={Style["forma"]}></div>
        </div>
    );
}

export default Apresentacao;