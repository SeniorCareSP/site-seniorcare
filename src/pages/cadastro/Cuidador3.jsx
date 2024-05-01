import CadastroCuidador3 from "../../components/eleCadastroCuidador/CadastroCuidador3";
import Imagem1 from "../../components/ImagemCadastro/imgaemCuidador";
import Style from './Cadastro.module.css';

function Cuidador3(){
    return(
        <>
        <div className={Style['corpo']}>
            <Imagem1 />
            <CadastroCuidador3 />
        </div>
        </>
    );
}

export default Cuidador3;