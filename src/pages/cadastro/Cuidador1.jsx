import CadastroCuidador1 from "../../components/eleCadastroCuidador/CadastroCuidador1";
import Imagem1 from "../../components/ImagemCadastro/imgaemCuidador";
import Style from './Cadastro.module.css';
function Cuidador1(){
    return(
        <>
        <div className={Style['corpo']}>
            <Imagem1 />
            <CadastroCuidador1 />
        </div>
        </>
    );
}

export default Cuidador1;