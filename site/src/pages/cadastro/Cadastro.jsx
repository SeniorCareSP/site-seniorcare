import Style from './Cadastro.module.css';
import CadastroUsuario1 from '../../components/eleCadastro/CadastroUsario1';
import ImgLogin from '../../components/eleLogin/ImgLogin';
function Cadastro(){

    return(
        <>
        <div className={Style['corpo']}>
            <ImgLogin />
            <CadastroUsuario1 />
        </div>
        </>
    );
}

export default Cadastro
