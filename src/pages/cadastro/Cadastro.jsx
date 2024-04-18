
import Style from './Cadastro.module.css';
import CadastroUsuario1 from '../../components/eleCadastro/CadastroUsario1';
import Imagem1 from '../../components/ImagemCadastro/Imagem1Cadastro';
function Cadastro(){

    return(
        <>
        <div className={Style['corpo']}>
            <Imagem1 />
            <CadastroUsuario1 />
        </div>
        </>
    );
}

export default Cadastro
