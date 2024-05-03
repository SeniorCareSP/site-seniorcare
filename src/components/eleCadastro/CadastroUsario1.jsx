import Stack from '@mui/material/Stack'
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import InputTexfield from '../Input/Input';
import ButtonAzul from '../botao/BotaoAzul';
import Title from '../tituloCadastro/Title'
import * as React from 'react';
import Button from '@mui/joy/Button';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';

function CadastroUsuario1() {
    const [value, setValue] = React.useState('md');
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
<<<<<<< HEAD
                            <ToggleButtonGroup value={value} spacing={2} color="primary" onChange={(event, newValue) => {setValue(newValue)}}>
                                <Button value="cuidador">Cuidador</Button>
                                <Button value="responsavel">Responsavel</Button>
                            </ToggleButtonGroup>
=======
                            <BtnBrancoS >Cuidador</BtnBrancoS>
                            <BtnBrancoS >Resposavel</BtnBrancoS>
>>>>>>> ec584c642b209d6c1f3c2bbf959ad72f5ca55b14
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