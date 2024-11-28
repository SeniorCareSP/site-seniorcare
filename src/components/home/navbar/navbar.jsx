import React, { useState } from "react";
import Style from "./navbar.module.css"
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

function Navbar() {
    const navigate = useNavigate();
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className={Style["header"]}>
                <div>
                    <span className={Style["logo"]}></span>
                    <div className={Style["opcoes"]}>
                    <a onClick={() => scrollToSection('section2')}>Sobre</a>
                    <a onClick={() => scrollToSection('section3')}>Serviços</a>
                    <a onClick={() => scrollToSection('section4')}>FAQ</a>
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
