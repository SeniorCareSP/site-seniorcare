

import React from "react";
import Style from "./navbarCuidador.module.css";
import Door from "../../../utils/assets/Logout.png";
import Perfil from "../../../utils/assets/Ellipse 24.png"
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
                    <a>Procurar</a>
                    <a >Favoritos</a>
                   <a onClick={() => navigate("/chat")} >Conversas</a>
                    </div>
                    <div className= {Style["cadastro"]}>
                        <img className={Style["icon"]} src={Door} alt=""/>
                    {/* <Button variant="contained" onClick={() => navigate("/login")}>Login</Button> */}
                    <img src={Perfil} alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;