import Stack from '@mui/material/Stack'
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import InputTexfield from '../Input/Input';
import ButtonAzul from '../botao/BotaoAzul';
import BtnBrancoS from '../botao/BtnBrancoS';
import BtnAzulS from '../botao/BtnAzulS';
import Title from '../tituloCadastro/Title'

function CadastroUsuario1() {

    const navigate = useNavigate();
    return (
        <div className={Style["card-cadastro"]}>
            <Title />
            <Stack spacing={3} className={Style["itens"]}>
                <InputTexfield label="Email" />
                <InputTexfield label="senha" />
                <InputTexfield label="confirmar senha" />
                <InputTexfield label="CEP" />
                <div>
                    <BtnAzulS >Cuidador</BtnAzulS>
                    <BtnBrancoS >Resposavel</BtnBrancoS>
                </div>
                <ButtonAzul onClick={() => navigate("/cadastro2")}>Proximo</ButtonAzul>
                <a onClick={() => navigate("/login")} href=''>Já tenho uma conta</a>
            </Stack>
        </div>
    );
}
export default CadastroUsuario1;