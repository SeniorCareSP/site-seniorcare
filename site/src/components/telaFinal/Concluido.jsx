import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
function Retornarhome(){
    const navigate = useNavigate();
    setTimeout(() => {
        navigate("/login");
    }, 10000);
}
function Concluido(){
   
    return(
        <>
            <div className={Style["cadastro-sucesso"]}>
                <div className={Style["imagem-sucesso"]}>

                </div>
                <h1>
                    Cadastro realizado com sucesso!
                </h1>
                <h2>
                    O seu perfil está em análise, você será notificado via e-mail quando concluido.
                </h2>
                <h2>A análise dura em torno de 12h-48h.</h2>
            </div>
            <Retornarhome/>
        </>
    );
    
}

export default Concluido;