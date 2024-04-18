import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
function CadastroUsuario2(){
    const navigate = useNavigate();
    return(
        <div className={Style["card-cadastro"]}>
            <div className={Style["title"]}>
                <h1>Cadastro / login</h1>
                <h3>parte 1 de 2</h3>
            </div>
            <Stack spacing={3} className={Style["itens"]}>
                <TextField className={Style["input"]} id="outlined-basic" label="CEP" variant="outlined" />
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