import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Style from '../../pages/login/Login.module.css';

function ImgLogin(){
    const navigate = useNavigate();
    return (
        <>
            <div className={Style['imagem']}>
            <div className={Style['button-voltar']} onClick={()=> navigate("/")}></div>
            </div>
        </>
    );
}

export default ImgLogin;