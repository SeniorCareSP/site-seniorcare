import CadastroCuidador1 from "../../components/eleCadastroCuidador/CadastroCuidador1";
import ImgLogin from '../../components/eleLogin/ImgLogin';
import Style from './Cadastro.module.css';
function Cuidador1(){
    return(
        <>
        <div className={Style['corpo']}>
            <ImgLogin />
            <CadastroCuidador1 />
        </div>
        </>
    );
}

export default Cuidador1;