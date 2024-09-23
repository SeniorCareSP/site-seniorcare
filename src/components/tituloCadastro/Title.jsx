import { useNavigate } from "react-router-dom";
import Style from '../../pages/cadastro/Cadastro.module.css';

function Title() {
    const navigate = useNavigate();
    return (
        <>
            <div className={Style["title"]}>
                <span><a onClick={() => navigate("/login")}>Login</a> | Cadastro</span>
            </div>
        </>
    );
}

export default Title;