

import React from "react";
import Style from "./navbarCuidador.module.css";
import Door from "../../../utils/assets/Logout.png";
import Perfil from "../../../utils/assets/Ellipse 24.png"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

function Navbar() {
    const navigate = useNavigate();


    const handleLogout = () => {
        // Limpar o armazenamento local
        localStorage.clear();

        navigate("/");

        console.log("Usuário deslogado!");
    }

    return (
        <>
            <div className={Style["header"]}>
                <div>
                    <span className={Style["logo"]}></span>
                    <div className={Style["opcoes"]}>
                        <a onClick={() => navigate("/procurar")}>Procurar</a>
                        {"RESPONSAVEL" === localStorage.getItem("tipoUsuario") && (
                            <a onClick={() => navigate("/favoritos")}>Favoritos</a>

                        )}
                        <a onClick={() => navigate("/chat")}>Conversas</a>
                    </div>
                    <div className={Style["cadastro"]}>
                        <img className={Style["icon"]} src={Door} alt="" onClick={() => navigate("/login")} />
                        {/* <Button variant="contained" onClick={() => navigate("/login")}>Login</Button> */}
                        <img src={Perfil} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;