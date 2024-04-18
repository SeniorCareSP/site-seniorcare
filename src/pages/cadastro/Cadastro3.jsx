import CadastroUsuario3 from "../../components/eleCadastro/CadastroUsuario3";
import Imagem1 from "../../components/ImagemCadastro/Imagem1Cadastro";
import Style from './Cadastro.module.css';
function Cadastro3(){
    return(
        <>
        <div className={Style['corpo']}>
            <Imagem1 />
            <CadastroUsuario3 />
        </div>
        </>
    );
}

export default Cadastro3;