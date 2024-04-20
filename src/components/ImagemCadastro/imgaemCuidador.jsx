import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Style from '../../pages/cadastro/Cadastro.module.css';

function ImagemCuidador(){
    const navigate = useNavigate();
    return(
        <div className={Style['imagem']}>
            <Button className={Style["button"]} variant="contained" onClick={()=> navigate("/")}>voltar</Button>
        </div>
    );
}

export default ImagemCuidador;