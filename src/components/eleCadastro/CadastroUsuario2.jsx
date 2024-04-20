import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";

import Title from '../tituloCadastro/Title'

function CadastroUsuario2(){
    const navigate = useNavigate();
    return(
        <div className={Style["card-cadastro"]}>
            <Title />
            <Stack spacing={3} className={Style["itens"]}>
                <TextField className={Style["input"]} id="outlined-basic" label="Logradouro" variant="outlined" />
                <TextField className={Style["input"]} id="outlined-basic" label="Numero" variant="outlined" />
                <TextField className={Style["input"]} id="outlined-basic" label="Complemento" variant="outlined" />
                <TextField className={Style["input"]} id="outlined-basic" label="Cidade - UF" variant="outlined" />
                <TextField className={Style["input"]} id="outlined-basic" label="Bairro" variant="outlined" />
                <Button className={Style["button"]} onClick={()=> navigate("/cadastro3")} variant="contained">Proximo</Button>
                <Button className={Style["button"]} onClick={()=> navigate("/cadastro")} variant="contained">Voltar</Button>
                
            </Stack>
        </div>
    );
}

export default CadastroUsuario2;