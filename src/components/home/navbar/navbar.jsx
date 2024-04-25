

import React from "react";
import Style from "./navbar.module.css"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <div className={Style["header"]}>
                <div>
                    <span className={Style["logo"]}></span>
                    <div className={Style["opcoes"]}>
                    <a>Sobre</a>
                    <a >Serviços</a>
                    <a>FAQ</a>
                    </div>
                    <div className= {Style["cadastro"]}>
                    <a onClick={()=> navigate("/cadastro")}>Cadastre-se!</a>
                    <Button variant="contained" onClick={() => navigate("/login")}>Login</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;