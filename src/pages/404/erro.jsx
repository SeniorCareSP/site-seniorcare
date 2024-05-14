
import Style from './erro.module.css';
import Navbar from "../../components/cuidador/navbar/navbarCuidador";
import ButtonAzul from '../../components/botao/BotaoAzul';
import { useNavigate } from "react-router-dom";

function Erro() {
    const navigate = useNavigate();
    return (
        <>
            <div className={Style['erro']}>
                <div className={Style['textinho']}>
                    <a>404</a>
                    <p>Página não encontrada</p>
                </div>
                <ButtonAzul onClick={ () => navigate('/')}>Tela Inicial</ButtonAzul>

            </div>
        </>
    );
}

export default Erro
