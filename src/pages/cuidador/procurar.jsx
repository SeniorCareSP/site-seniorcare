
import Style from './cuidador.module.css';
import Navbar from '../../components/cuidador/navbar/navbarCuidador';
import Card from '../../components/home/Cards/cards-Interno/cardInterno';
import SelectMax from "../../components/cuidador/select/selectIdoso";
import SelectIdade from "../../components/cuidador/select/selecIdade";
import SelectTrabalho from "../../components/cuidador/select/selectPeriodo";
import Remover from "../../components/cuidador/checkbox/Button";


function procurar(){

    return(
        <>
           <Navbar/>
        <div className={Style["procura"]}>
          <div className={Style["filtro"]}>
         
          <SelectMax/> 
          <SelectTrabalho/> 
          <SelectIdade/> 
          <Remover/>
          </div>
 
          <div className={Style["cards"]}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
           </div>
          </div>
        </>
    );
}

export default procurar