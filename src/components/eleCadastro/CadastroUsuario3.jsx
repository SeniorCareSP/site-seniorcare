import Stack from '@mui/material/Stack'
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import Title from '../tituloCadastro/Title'

function CadastroUsuario3() {

    const [idioma, setIdioma] = React.useState('');
    const handleChange = (event) => {
        setIdioma(event.target.value);
    };

    const navigate = useNavigate();
    return (
        <div className={Style["card-cadastro"]}>
            <Title />
            <Stack spacing={3} className={Style["itens"]}>
                <FormControl fullWidth className={Style["select"]}>
                    <InputLabel id="demo-simple-select-label">Idioma</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={idioma} label="idioma" onChange={handleChange}>
                        <MenuItem value={10}>Inglês</MenuItem>
                        <MenuItem value={20}>Portugues</MenuItem>
                        <MenuItem value={30}>Espanhol</MenuItem>
                    </Select>
                </FormControl>
                <ButtonAzul onClick={() => navigate("/cadastro/cuidador")}>Proximo</ButtonAzul>
                <ButtonBranco onClick={() => navigate("/cadastro2")} >Voltar</ButtonBranco>
            </Stack>
        </div>
    );
}

export default CadastroUsuario3;