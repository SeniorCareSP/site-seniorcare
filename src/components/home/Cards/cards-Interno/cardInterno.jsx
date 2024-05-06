import Styles from "../cards-Interno/cardInterno.module.css";
import { Button } from "@mui/material";
import Imagem from "../../../../utils/assets/Rectangle 53.png";
import Like from "../../../../utils/assets/Heart.png";
import Flag from "../../../../utils/assets/Empty Flag.png";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function cardIdoso({nome, descricao, idade}) {
  return (
    <>
      <div className={Styles["cliente"]}>
        <section className={Styles.card}>
          <div className={Styles["centro-top"]}>
            <img src={Imagem} alt="" />
            <div className={Styles["Icons"]}>
            <img src={Flag} alt="" />
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </div>
          
          </div>
          {/* <div className={Styles["centralizar"]}>
            <h2>25h</h2>
            <div>
              <h2>5/5</h2>
              <StarIcon sx={{ marginTop: 1, fontSize: 35 }} color="primary" />
            </div>
          </div> */}
       
          <div className={Styles["info"]}>
            {nome}<br/>
           {/* idade: {idade}.*/}
             
          </div>

          <div className={Styles["contexto"]}>
            <div className={Styles["centralizar"]}>
              <p>{descricao}
               </p>
              
            <Button variant="contained">Iniciar Conversa</Button>
            
            </div> 
          
          </div>

        </section>
      </div>
    </>
  );
}

export default cardIdoso;