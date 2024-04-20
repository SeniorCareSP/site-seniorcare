import { useNavigate } from "react-router-dom";
import Style from '../../pages/cadastro/Cadastro.module.css';

function Title() {
    const navigate = useNavigate();
    return (
        <>
            <div className={Style["title"]}>
                <h1><a onClick={() => navigate("/login")}>Login</a> / Cadastro</h1>
            </div>
        </>
    );
}

export default Title;