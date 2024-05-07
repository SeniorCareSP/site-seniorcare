
import Style from './erro.module.css';
import Navbar from "../../components/cuidador/navbar/navbarCuidador";
import Img from "../../utils/assets/loira.png";
import ButtonAzul from '../../components/botao/BotaoAzul';
function Erro(){

    return(
        <>
        <Navbar/>
        <div className={Style['erro']}>
       <div className={Style['textinho']}>
            <a>404</a>
            <p>Página não encontrada</p>
            </div>
            <ButtonAzul>
                Tela Inicial
                </ButtonAzul>
                
            <img src={Img} alt="Moça loira, fazendo gesto de imcopreensão"/>
            
        </div>
        </>
    );
}

export default Erro
