import Stack from '@mui/material/Stack'
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import InputTexfield from '../Input/Input';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import Title from '../tituloCadastro/Title'

function CadastroUsuario2(){
    const navigate = useNavigate();
    return(
        <div className={Style["card-cadastro"]}>
            <Title />
            <Stack spacing={3} className={Style["itens"]}>
                <InputTexfield label="Logradouro" />
                <InputTexfield label="Numero" />
                <InputTexfield label="Complemento" />
                <InputTexfield label="Cidade" />
                <InputTexfield label="Bairro" />
                <ButtonAzul onClick={()=> navigate("/cadastro3")} variant="contained">Proximo</ButtonAzul>
                <ButtonBranco onClick={()=> navigate("/cadastro")} variant="contained">Voltar</ButtonBranco>
            </Stack>
        </div>
    );
}

export default CadastroUsuario2;