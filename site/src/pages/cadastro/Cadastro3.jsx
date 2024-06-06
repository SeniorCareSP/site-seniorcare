import CadastroUsuario3 from "../../components/eleCadastro/CadastroUsuario3";
import ImgLogin from '../../components/eleLogin/ImgLogin';
import Style from './Cadastro.module.css';
function Cadastro3(){
    return(
        <>
        <div className={Style['corpo']}>
            <ImgLogin />
            <CadastroUsuario3 />
        </div>
        </>
    );
}

export default Cadastro3;