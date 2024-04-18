import Style from "./empresa.module.css"
import React from "react";
import Imagem from "../../utils/assets/idoso-e-cuidador.png"
function Empresa() {
    return (
        <div className={Style["empresa"]}>
            <h2>Nós da Senior Care somos uma</h2>
            <div>
                <span className={Style["linha"]}></span>
                <h1>Empresa</h1>
                <span className={Style["linha"]}></span>
            </div>
            <div className={Style["Centralizar"]}>
            <div className={Style["descricao"]}>
                <p> O compromisso da Senior Care é <spam>atender</spam> às crescentes <spam>necessidades</spam> de uma população idosa, 
                    fornecendo cuidadores confiáveis e oferecendo não apenas assistência, 
                    mas também conforto e confiança. </p>
            </div>
            <div className={Style["imagem"]}>
                <img src={Imagem} alt=""/>
            </div>
            </div>
        </div>
    );
}

export default Empresa;