import Styles from "../cards-disponivel/card-cuidador.module.css"
import StarIcon from '@mui/icons-material/Star';
import Imagem  from "../../../../utils/assets/Ellipse 25.png"
import IconlessCheckbox from "./dias"
import { Style } from "@mui/icons-material";
function cardCuidador(){
    return(
 <>
    <div className={Styles["cliente"]}>
   <section className={Styles.card}>
    <div className={Styles["centro-top"]}>
       <img src={Imagem} alt=""/>
       <p>Nome</p>
       </div>
      <div className={Styles["centralizar"]}>
        <h2>25h</h2>
        <div>
        <h2>5/5</h2>
        <StarIcon sx={{marginTop:1, fontSize:35}} color="primary"/> 
        </div>
       </div>

            <div className={Styles["contexto"]}>
            <div className={Styles["centralizar"]}>
                  <h3>Disponivel na:</h3>
                  <h3 className={Style['tempo']}>3 anos de<br/>
                      experiencia</h3>
                  </div>
                  <div className={Styles["dias"]}>  
                   <IconlessCheckbox/>
                  </div>
               
                          {/* <div className={Styles.card_footer}>
                           <a className={Style["quadrado"]}>Do</a> 
                           <a className={Style["quadrado"]}>Se</a> 
                           <a className={Style["quadrado"]}>Te</a> 
                           <a className={Style["quadrado"]}>Qua</a>
                           <a className={Style["quadrado"]}>Qui</a>
                           <a className={Style["quadrado"]}>Se</a>
                           <a className={Style["quadrado"]}a>Sa</a> */}

                            
                          
         </div>
         
  
   </section>
   </div>
 </>
    );
}

export default cardCuidador;