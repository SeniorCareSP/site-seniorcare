import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";

import Title from '../tituloCadastro/Title'

function CadastroUsuario1(){
    
    const navigate = useNavigate();
    return(
        <div className={Style["card-cadastro"]}>
            <Title />
            <Stack spacing={3} className={Style["itens"]}>
                <TextField className={Style["input"]} id="outlined-basic" label="Email" variant="outlined" />
                <TextField className={Style["input"]} id="outlined-basic" label="Senha" variant="outlined" />
                <TextField className={Style["input"]} id="outlined-basic" label="Confirmar Senha" variant="outlined" />
                <TextField className={Style["input"]} id="outlined-basic" label="CEP" variant="outlined" />
                <div>
                    <Button className={Style["button"]} variant="contained">Cuidador</Button>
                    <Button className={Style["button"]} variant="contained">Resposavel</Button>    
                </div>
                <Button className={Style["button"]} onClick={()=> navigate("/cadastro2")} variant="contained">Proximo</Button>
                <a onClick={()=> navigate("/login")} href=''>Já tenho uma conta</a>
            </Stack>
        </div>
    );
}
export default CadastroUsuario1;