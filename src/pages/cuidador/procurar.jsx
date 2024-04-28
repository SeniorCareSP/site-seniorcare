
import Style from './cuidador.module.css';
import Navbar from '../../components/cuidador/navbar/navbarCuidador';
import Card from '../../components/home/Cards/cards-Interno/cardInterno';
function procurar(){

    return(
        <>
        <div className={Style["procura"]}>
          <Navbar/>
          <Card/>
          </div>
        </>
    );
}

export default procurar