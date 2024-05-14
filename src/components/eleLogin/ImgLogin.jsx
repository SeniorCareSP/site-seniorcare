import { useNavigate } from "react-router-dom";
import Style from './img.module.css';
import logo from '../../utils/assets/Logo horizontal.png'
import voltar from '../../utils/assets/setaVoltar.png'

function ImgLogin(){
    const navigate = useNavigate();
    return (
        <>
            <div className={Style['imagem']}>
                <img src={voltar} className={Style['button-voltar']} onClick={()=> navigate("/")}/>
            </div>
        </>
    );
}

export default ImgLogin;