import CadastroCuidador3 from "../../components/eleCadastroCuidador/CadastroCuidador3";
import ImgLogin from '../../components/eleLogin/ImgLogin';
import Style from './Cadastro.module.css';

function Cuidador3(){
    return(
        <>
        <div className={Style['corpo']}>
            <ImgLogin />
            <CadastroCuidador3 />
        </div>
        </>
    );
}

export default Cuidador3;