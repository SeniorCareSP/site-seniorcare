
import Style from './cuidador.module.css';
import Navbar from '../../components/cuidador/navbar/navbarCuidador';
import Card from '../../components/home/Cards/cards-Interno/cardInterno';
import Img from '../../utils/assets/Heart.png';
import ButtonAzulEscuro from '../../components/botao/BotaoAzulEscuro';
import { useNavigate } from "react-router-dom";

function Favoritos(){
    const navigate = useNavigate();
    return(
        <>
            <Navbar/>
        <div className={Style["favorito"]}>
        <div className={Style["texto"]}>
            <p>Você ainda não adicionou nenhum <br/>
                cuidador a sua lista de favoritos.</p>
               
           <img src={Img} alt='Logo'/>
           <ButtonAzulEscuro  onClick={() => navigate("/procurar")}>
           Procurar Cuidadores
           </ButtonAzulEscuro>
           </div>  
        
           <div className={Style["linha"]}></div>
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