import CadastroCuidador2 from "../../components/eleCadastroCuidador/CadastroCuidador2";
import ImgLogin from '../../components/eleLogin/ImgLogin';
import Style from './Cadastro.module.css';

function Cuidador2(){
    return(
        <>
        <div className={Style['corpo']}>
            <ImgLogin />
            <CadastroCuidador2 />
        </div>
        </>
    );
}

export default Cuidador2;