import React, { useEffect, useState } from 'react';

import Style from "./navbarCuidador.module.css";
import Door from "../../../utils/assets/Logout.png";
import Perfil from "../../../utils/assets/Ellipse 24.png";
import { useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import PersonAdd from '@mui/icons-material/PersonAdd';
import axios from 'axios';
function Navbar() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const tipoDeUsuario = localStorage.getItem("tipoUsuario");
    const [imagemSrc, setImagemSrc] = useState(null);
    

    const idUsuario = localStorage.getItem('idUsuario');

    useEffect(() => {
        async function fetchImage() {
            try {
                const response = await axios.get(`http://localhost:8080/files/view/${idUsuario}.jpg`, {
                    responseType: 'blob'
                });
                const imageObjectURL = URL.createObjectURL(response.data);
                setImagemSrc(imageObjectURL);
            } catch (error) {
                console.error('Erro ao carregar imagem:', error);
            }
        }

        fetchImage();
    }, [idUsuario]);

    const handleLogout = () => {
        // Limpar o armazenamento local
        localStorage.clear();
        navigate("/");
        console.log("Usuário deslogado!");
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

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
                        <Tooltip title="Account settings">
                            <IconButton onClick={handleMenuClick} size="small" >
                                <img src={ imagemSrc || Perfil} alt="Perfil"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleMenuClose}
                            disableScrollLock={true}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={() => {
                                handleMenuClose();
                                if (tipoDeUsuario === "RESPONSAVEL") {
                                    navigate("/atualizar/usuario");
                                } else {
                                    navigate("/atualizar/cuidador");
                                }
                            }}>                                <Avatar /> Edita Perfil
                            </MenuItem>
                            {/* <MenuItem onClick={handleMenuClose}>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                               Edita
                            </MenuItem> */}
                            {/* <MenuItem onClick={handleMenuClose}>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem> */}
                            <MenuItem onClick={handleLogout}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Sair
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
