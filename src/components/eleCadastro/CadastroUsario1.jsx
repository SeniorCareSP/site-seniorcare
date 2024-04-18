import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
function CadastroUsuario1(){
    
    const navigate = useNavigate();
    return(
        <div className={Style["card-cadastro"]}>
            <div className={Style["title"]}>
                <h1>Cadastro / login</h1>
                <h3>parte 1 de 2</h3>
            </div>
            <Stack spacing={3} className={Style["itens"]}>
                <TextField className={Style["input"]} id="outlined-basic" label="Nome Completo" variant="outlined" />
                <TextField className={Style["input"]} id="outlined-basic" label="E-mail" variant="outlined" />
                <TextField className={Style["input"]} id="outlined-basic" label="Data De Nascimento" variant="outlined" />
                <TextField className={Style["input"]} id="outlined-basic" label="Sexo Biológico" variant="outlined" />
                <TextField className={Style["input"]} id="outlined-basic" label="CPF" variant="outlined" />
                <Button className={Style["button"]} onClick={()=> navigate("/cadastro2")} variant="contained">Proximo</Button>
                <a onClick={()=> navigate("/login")} href=''>Já tenho uma conta</a>
            </Stack>
        </div>
    );
}
export default CadastroUsuario1;