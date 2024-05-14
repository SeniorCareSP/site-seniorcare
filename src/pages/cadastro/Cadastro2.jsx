import CadastroUsuario2 from "../../components/eleCadastro/CadastroUsuario2";
import ImgLogin from '../../components/eleLogin/ImgLogin';
import Style from './Cadastro.module.css';

function Cadastro2(){
    return(
        <>
            <div className={Style['corpo']}>
                <ImgLogin />
                <CadastroUsuario2 />
            </div>
        </>
    );
}

export default Cadastro2;