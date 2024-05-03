import Stack from '@mui/material/Stack'
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import * as React from 'react';

import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import Title from '../tituloCadastro/Title'
import CustomizedHook from '../Input/InpIdioma';
function CadastroUsuario3() {

    const [idioma, setIdioma] = React.useState('');
    const handleChange = (event) => {
        setIdioma(event.target.value);
    };

    const navigate = useNavigate();
    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={6}>
                    <Title />
                    <Stack spacing={3} className={Style["itens"]}>
                        <CustomizedHook />
                        <ButtonAzul onClick={() => navigate("/cadastro/cuidador")}>Proximo</ButtonAzul>
                        <ButtonBranco onClick={() => navigate("/cadastro2")} >Voltar</ButtonBranco>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}

export default CadastroUsuario3;