
import Style from './cuidador.module.css';
import Navbar from '../../components/cuidador/navbar/navbarCuidador';
import Card from '../../components/home/Cards/cards-Interno/cardInterno';
import SelectMax from "../../components/cuidador/select/selectIdoso";
import SelectIdade from "../../components/cuidador/select/selecIdade";
import SelectTrabalho from "../../components/cuidador/select/selectPeriodo";
import Remover from "../../components/cuidador/checkbox/Button";
import Img from '../../utils/assets/Heart.png'

function Favoritos(){

    return(
        <>
            <Navbar/>
        <div className={Style["favorito"]}>
            <p>Você ainda não adicionou nenhum 
                cuidador a sua lista de favoritos.</p>
           <img src={Img} alt=''/>
           <div></div>
           <div className={Style["cards"]}>
           <Card/>
          <Card/>
          <Card/>
          </div>
        </div>
        </>
    );
}

export default Favoritos