import Styles from "../cards-disponivel/card-cuidador.module.css"
import StarIcon from '@mui/icons-material/Star';
import Imagem  from "../../../../utils/assets/Ellipse 25.png"
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
                  <h3>teste</h3>
                          <div className={Styles.card_footer}>
                            <p>  Mariana Nascimento<br/>
                            Responsável</p>

                            
                          
         </div>
         </div>
  
   </section>
   </div>
 </>
    );
}

export default cardCuidador;