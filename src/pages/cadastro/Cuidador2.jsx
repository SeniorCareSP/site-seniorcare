import CadastroCuidador2 from "../../components/eleCadastroCuidador/CadastroCuidador2";
import Imagem1 from "../../components/ImagemCadastro/imgaemCuidador";
import Style from './Cadastro.module.css';

function Cuidador2(){
    return(
        <>
        <div className={Style['corpo']}>
            <Imagem1 />
            <CadastroCuidador2 />
        </div>
        </>
    );
}

export default Cuidador2;