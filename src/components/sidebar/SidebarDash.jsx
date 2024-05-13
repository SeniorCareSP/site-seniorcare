import { Stack } from "@mui/material";
import iconusu from '../../utils/assets/usericon.png';
import dashicon from '../../utils/assets/graphicon.png';
import configicon from '../../utils/assets/settingsicon.png';
import docicon from '../../utils/assets/docsicon.png';
import importanticon from '../../utils/assets/importanticon.png';
import logouticon from '../../utils/assets/Logout.png';
import { useNavigate } from "react-router-dom";
import Style from './sidebarDash.module.css';
import React, { useState } from 'react';

function SidebarDash() {

    const navigate = useNavigate();
    const [size, setSize] = useState('15vh');
    const [textPerfil, setPerfil] = useState('');
    const [textDash, setDash] = useState('');
    const [textConfig, setConfig] = useState('');
    const [textDoc, setDoc] = useState('');
    const [textI, setI] = useState('');
    const [textSair, setSair] = useState('')


    const abrir = () => {
        setSize('16vw');
        setPerfil(<h2>perfil</h2>);
        setDash(<h2>Dashboard</h2>);
        setConfig(<h2>Administarar usuarios</h2>);
        setDoc(<h2>Analisar documentos</h2> );
        setI(<h2>Analisar denuncias</h2>);
        setSair(<h2>Sair</h2>);
    }

    return (
        <>
            <div className={Style["card-sidebar"]} onClick={abrir}>
                <div className={Style["sidebar"]} style={{ width: size }}>
                    <div className={Style["card-icons"]}>
                        <Stack spacing={6} className={Style["opt-sidebar"]}>
                            <span>
                                <img src={iconusu} alt="icone de usuário" />
                                {textPerfil}
                            </span>
                            <span>
                                <img src={dashicon} alt="" />
                                {textDash}
                            </span>
                            <span>
                                <img src={configicon} alt="" />
                                {textConfig}
                            </span>
                            <span>
                                <img src={docicon} alt="" />
                                {textDoc}
                            </span>
                            <span>
                                <img src={importanticon} alt="" />
                                {textI}
                            </span>
                        </Stack>
                        <Stack>
                            {/* Chamar handleLogout ao clicar no ícone de logout */}
                            <span>
                                <img src={logouticon} alt="" />
                                {textSair}
                            </span>
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidebarDash;