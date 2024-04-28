import Styles from "../cards-Interno/cardInterno.module.css";
import StarIcon from '@mui/icons-material/Star';
import Imagem from "../../../../utils/assets/Rectangle 53.png";
import Like from "../../../../utils/assets/Heart.png";
import Flag from "../../../../utils/assets/Empty Flag.png";


function cardIdoso() {
  return (
    <>
      <div className={Styles["cliente"]}>
        <section className={Styles.card}>
          <div className={Styles["centro-top"]}>
            <img src={Imagem} alt="" />
            <div className={Styles["Icons"]}>
            <img src={Flag} alt="" />
              <img src={Like} alt="" />
            </div>
            {/* <div className={Styles["info"]}>
              
             </div> */}
          </div>
          {/* <div className={Styles["centralizar"]}>
            <h2>25h</h2>
            <div>
              <h2>5/5</h2>
              <StarIcon sx={{ marginTop: 1, fontSize: 35 }} color="primary" />
            </div>
          </div> */}

          <div className={Styles["contexto"]}>
            <div className={Styles["centralizar"]}>
              <h3>José é um idoso que precisa de cuidados devido à fragilidade física e dificuldades de locomoção causadas pela idade avançada. Ele ...
</h3>
              
            </div>




          </div>


        </section>
      </div>
    </>
  );
}

export default cardIdoso;