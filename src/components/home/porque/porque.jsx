import Style from "./porque.module.css"
import React from "react";
import Mao from "../../../utils/assets/Honesty.png"
import Healthy from "../../../utils/assets/Healthy Food.png"
import Approval from "../../../utils/assets/Approval.png"
import { Grid } from "@mui/material";
function Porque() {
    return (
        <>
        <div id="section5" className={Style["content"]}>
        <div className={Style["container"]}>

            <div className={Style["Central"]}>
            <div className={Style["texto-1"]}>
               <spam className={Style["titulo"]}>Bem-estar em Primeiro Lugar </spam> <br/>
              <p> A Sênior Care oferece uma <br/>
                solução abrangente e acessível <br/>
                par <spam className={Style["cor"]}> melhorar a qualidade</spam> de vida <br/>
                dos idosos e suas famílias.</p> 
                </div>
                <div className={Style["icon1"]}>
                <spam><img src={Mao} alt ="icone"/></spam>
                </div>
                </div>
            

            <div className={Style["Central"]}>

                <div className={Style["icon2"]}>
                    <span><img src={Healthy}/></span>
                </div>

                <div className={Style["texto-2"]}>
                <spam className={Style["titulo-2"]}> Confiabilidade Garantida</spam> 
                   <p>Perfis detalhados,  <spam className={Style["cor"]}> avaliações </spam><br/>
                      de clientes agendamento<br/>
                       flexível e segurança..</p> 
                </div>
              
            </div>

            <div className={Style["Central"]}>
                <div className={Style["texto-3"]}>
                <spam className={Style["titulo-3"]}>Simplicidade e Conveniência</spam>
                   <p>  Os cuidadores da Sênior Care são <br/>
                   <spam className={Style["cor"]}>selecionados e verificados</spam> com rigor <br/>
                    para garantir os mais altos padrões <br/>
                    de qualidade.</p> 
                </div>
                <div className={Style["icon3"]}>
                    <span><img src={Approval}/></span>
                </div>
            </div>
            </div>
          

            <div className={Style["Motivo"]}>
                <h1>
                    Por que
                </h1>
                <h2>
                    Escolher a<br/>
                     Senior Care? 
                </h2>
            </div>
            </div>

        </>
        
    );

}

export default Porque;