import React from "react";
import Style from "./servico.module.css"
function Servico() {
    return (
        <frameElement>
        <div className={Style["servico"]}>
            <span className={Style["obj1"]}></span>
            <h1>Serviços</h1>
            <p>
                Não importa se você precisa de um cuidador em tempo integral para auxiliar em casa ou ocasionalmente durante a semana - o Senior Care ajuda você a se conectar e conversar com cuidadores qualificados perto de você.
            </p>
            <button>Comece agora</button>
            <span className={Style["obj2"]}></span>
            <span className={Style["obj3"]}></span>
        </div>
        </frameElement>
    );
}

export default Servico;