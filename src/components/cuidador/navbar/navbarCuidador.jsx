import React, { useEffect, useState } from 'react';
import Style from "./navbarCuidador.module.css";
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
import axios from 'axios';

function Navbar() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [imagemSrc, setImagemSrc] = useState(null);
    const idUsuario = localStorage.getItem('idUsuario');

    // Estado para a aba selecionada
    const [selectedTab, setSelectedTab] = useState("");

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

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        setTimeout(() => {
            navigate(`/${tab}`);
        }, 50);
    };

    return (
        <div className={Style["header"]}>
            <span className={Style["logo"]}></span>
            <div className={Style["opcoes"]}>
                <a onClick={() => handleTabClick("procurar")}
                    className={selectedTab === "procurar" ? Style["selected"] : ""}>
                    Procurar
                </a>
                {"RESPONSAVEL" === localStorage.getItem("tipoUsuario") && (
                    <a
                        onClick={() => handleTabClick("favoritos")}
                        className={selectedTab === "favoritos" ? Style["selected"] : ""}
                    >
                        Favoritos
                    </a>
                )}
                <a
                    onClick={() => handleTabClick("chat")}
                    className={selectedTab === "chat" ? Style["selected"] : ""}
                >
                    Conversas
                </a>
            </div>
            <div className={Style["cadastro"]}>
                <Tooltip title="Account settings">
                    <IconButton onClick={handleMenuClick} >
                        <img src={imagemSrc || Perfil} alt="Perfil" />
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
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={() => {
                        handleMenuClose();
                        navigate("/atualizar/" + (localStorage.getItem("tipoUsuario") === "RESPONSAVEL" ? "usuario" : "cuidador"));
                    }}>
                        <Avatar
                            src={imagemSrc || Perfil}
                            alt="Perfil"
                            style={{ width: 32, height: 32, objectFit: 'cover' }} // Definindo tamanho e ajuste da imagem
                        />
                        Editar Perfil
                    </MenuItem>

                    <Divider />
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Sair
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default Navbar;
