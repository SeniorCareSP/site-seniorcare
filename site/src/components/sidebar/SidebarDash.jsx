import { Stack } from "@mui/material";
import iconusu from '../../utils/assets/usericon.png';
import dashicon from '../../utils/assets/graphicon.png';
import configicon from '../../utils/assets/settingsicon.png';
import docicon from '../../utils/assets/docsicon.png';
import importanticon from '../../utils/assets/importanticon.png';
import logouticon from '../../utils/assets/Logout.png';
import { useNavigate } from "react-router-dom";
import Style from './sidebarDash.module.css';
import React, { useState, useRef, useEffect } from 'react';

function SidebarDash() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [size, setSize] = useState('15vh');
    const [textPerfil, setPerfil] = useState('');
    const [textDash, setDash] = useState('');
    const [textConfig, setConfig] = useState('');
    const [textDoc, setDoc] = useState('');
    const [textI, setI] = useState('');
    const [textSair, setSair] = useState('');

    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        if (isOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
    };

    const openSidebar = () => {
        setSize('16vw');
        setPerfil(<a onClick={() => navigate("/editar/perfil")}>Perfil</a>);
        setDash(<a onClick={() => navigate("/admin/dashboard")}>Dashboard</a>);
        setConfig(<a onClick={() => navigate("/admin/listagemUsuarios")}>Administrar usuarios</a>);
        setDoc(<a onClick={() => navigate("/admin/listagemDocs")}>Analisar documentos</a>);
        setI(<a onClick={() => navigate("/admin/listagemDenuncia")}>Analisar denuncias</a>);
        setSair(<a onClick={() => navigate("/")}>Sair</a>);
        setIsOpen(true);
    };

    const closeSidebar = () => {
        setSize('15vh');
        setPerfil('');
        setDash('');
        setConfig('');
        setDoc('');
        setI('');
        setSair('');
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            closeSidebar();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleClickOutside, true);
        } else {
            document.removeEventListener('click', handleClickOutside, true);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [isOpen]);

    return (
        <>
            <div className={Style["mask"]} style={{ display: isOpen ? 'block' : 'none' }}></div>
            <div className={Style["card-sidebar"]} onClick={toggleSidebar} ref={sidebarRef}>
                <div className={Style["sidebar"]} style={{ width: size }}>
                    <div className={Style["card-icons"]}>
                        <Stack spacing={6} className={Style["opt-sidebar"]}>
                            <span>
                                <img src={iconusu} alt="icone de usuário" />
                                {textPerfil}
                            </span>
                            <span>
                                <img src={dashicon} alt="icone de dashboard" />
                                {textDash}
                            </span>
                            <span>
                                <img src={configicon} alt="icone de configurações" />
                                {textConfig}
                            </span>
                            <span>
                                <img src={docicon} alt="icone de documentos" />
                                {textDoc}
                            </span>
                            <span>
                                <img src={importanticon} alt="icone de importantes" />
                                {textI}
                            </span>
                        </Stack>
                        <Stack className={Style["iconOut"]}>
                            <span>
                                <img src={logouticon} alt="icone de logout" />
                                {textSair}
                            </span>
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SidebarDash;
