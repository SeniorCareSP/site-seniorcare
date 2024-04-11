
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <div className="header">
                <div>
                    <span className="logo"></span>
                    <a>Sobre</a>
                    <a >Serviços</a>
                    <a >Contato</a>
                    <a >Cadastre-se!</a>
                    <Button variant="contained" onClick={() => navigate("/login")}>Login</Button>
                </div>
            </div>
        </>
    );
}

export default Navbar;