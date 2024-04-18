
import { Margin } from "@mui/icons-material";
import Styles from "./card.module.css"
import StarIcon from '@mui/icons-material/Star';
function card() {
    return (

   <div className={Styles["cliente"]}>
   <section className={Styles.card}>
    <div className={Styles["strelas"]}>
   <StarIcon sx={{marginRight: 1}}/>   <StarIcon sx={{marginRight: 1}}/>   <StarIcon sx={{marginRight: 1}}/>   <StarIcon sx={{marginRight: 1}}/>   <StarIcon sx={{marginRight: 1}}/>  
   </div>
      <div className={Styles["Centralizar"]}>
        <div className={Styles["linha"]}>
        </div>
            <div className={Styles["contexto"]}>
                  <h3>Eu nunca tive tanta facilidade em encontrar alguem
                    confiavem para cuidar da minha bisa! otimos profissionais,
                     melhor decisão que eu tomei foi confiar</h3>
                          <div className={Styles.card_footer}>
                            <p>  Mariana Nascimento<br/>
                            Responsável</p>
                          
         </div>
         </div>
    </div>
   </section>
   </div>
        
          )
     }
        
        export default card;