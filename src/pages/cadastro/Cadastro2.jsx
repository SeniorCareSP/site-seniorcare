import CadastroUsuario2 from "../../components/eleCadastro/CadastroUsuario2";
import Imagem1 from "../../components/ImagemCadastro/Imagem1Cadastro";
import Style from './Cadastro.module.css';

function Cadastro2(){
    return(
        <>
            <div className={Style['corpo']}>
                <Imagem1 />
                <CadastroUsuario2 />
            </div>
        </>
    );
}

export default Cadastro2;