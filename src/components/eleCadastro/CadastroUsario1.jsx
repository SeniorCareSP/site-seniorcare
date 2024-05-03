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
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={6}>
                    <Title />
                    <Stack spacing={3} className={Style["itens"]}>
                        <InputTexfield label="Email" />
                        <InputTexfield label="senha" />
                        <InputTexfield label="confirmar senha" />
                        <InputTexfield label="CEP" />
                        <Stack direction="row" spacing={2}>
                            <BtnBrancoS >Cuidador</BtnBrancoS>
                            <BtnBrancoS >Resposavel</BtnBrancoS>
                        </Stack>
                        <ButtonAzul onClick={() => navigate("/cadastro2")}>Proximo</ButtonAzul>
                        <a onClick={() => navigate("/login")} href=''>Já tenho uma conta</a>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}
export default CadastroUsuario1;