import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function CadastroUsuario3() {


    const [idioma, setIdioma] = React.useState('');
    const [tipoCadastro, setTipo] = React.useState('');

    const handleChange = (event) => {
        setIdioma(event.target.value);
    };


    const navigate = useNavigate();
    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["title"]}>
                <h1>Cadastro / login</h1>
                <h3>parte 1 de 2</h3>
            </div>
            <Stack spacing={3} className={Style["itens"]}>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Idioma</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={idioma} label="idioma" onChange={handleChange}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Quero me cadastrar como</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={tipoCadastro} label="Quero me cadastrar como" onChange={handleChange}>
                        <MenuItem value={10}>Idoso</MenuItem>
                        <MenuItem value={20}>Cuidador</MenuItem>
                    </Select>
                </FormControl>
                <Button className={Style["button"]} onClick={() => navigate("/cadastro4")} variant="contained">Proximo</Button>
                <Button className={Style["button"]} onClick={() => navigate("/cadastr2")} variant="contained">Voltar</Button>

            </Stack>
        </div>
    );
}

export default CadastroUsuario3;