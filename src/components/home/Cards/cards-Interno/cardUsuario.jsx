import Stack from '@mui/material/Stack';
import ButtonAzulEscuro from '../../../botao/BotaoAzulEscuro';
import Style from './cardUsuario.module.css';
import BtnAzulS from '../../../botao/BtnAzulS';
import { Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import apiCuidador from '../../../../api/Usuario/apiCuidador';
import Flag from '../../../../utils/assets/Empty Flag.png';
import apiResponsavel from '../../../../api/Usuario/apiResponsavel';
import { Favorite, FavoriteBorder, Label } from '@mui/icons-material';
import ModalDenuncia from '../../../cuidador/denuncia/denuncia';

function CardUsaurio({ nome, descricao, idade, favoritado, handleToggleFavorite, tipoUsuario, idUsuario, usuarioDenunciador, usuarioDenunciado, distancia }) {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [imagemSrc, setImagemSrc] = useState(null);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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

    function formatarDistancia(distancia) {
        if (!distancia) {
            return '';
        }

        const km = Math.floor(distancia);
        const metros = Math.round((distancia - km) * 1000);

        if (km > 0) {
            return `${km} km`;
        } else {
            return `${metros} m`;
        }
    }



    async function dadosDoUsuario(idUsuario, tipo) {
        let data;
        if (tipo === "CUIDADOR") {
            const response = await apiCuidador.get(`/${idUsuario}`);
            data = response.data;
            localStorage.setItem("dadosUsuario", JSON.stringify(data));
            navigate("/usuarios/perfilCuidador");
        } else {
            const response = await apiResponsavel.get(`/${idUsuario}`);
            data = response.data;
            localStorage.setItem("dadosUsuario", JSON.stringify(data));
            navigate("/usuarios/perfil");

        }
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleFavoriteToggle = () => {
        handleToggleFavorite(idUsuario);
    };

    return (
        <>
            <div className={Style["cardUsuario"]}>
                <Stack direction="column" spacing={0}>
                    <img src={imagemSrc} alt="Imagem do usuário" />
                    <Stack direction="column" spacing={8}>
                        <Stack direction="column" spacing={1} padding={2}>
                            <h3>{nome}</h3>
                            <p style={{textOverflow: 'ellipsis', overflow: 'hidden'}}>{descricao}</p>
                            <p>Distância: {formatarDistancia(distancia)}</p>
                            <Stack direction="row" spacing={8} alignItems='center'>
                                <BtnAzulS variant="contained" onClick={() => dadosDoUsuario(idUsuario, tipoUsuario)}>
                                    Ver perfil
                                </BtnAzulS>
                                <Stack direction='row' alignItems='center' spacing={1}>
                                    <img src={Flag} alt="Denunciar" onClick={handleOpenModal} style={{
                                        cursor: 'pointer', width: "RESPONSAVEL" === localStorage.getItem("tipoUsuario") ? '40%':'100%', height: "RESPONSAVEL" === localStorage.getItem("tipoUsuario") ? '40%':'100%'
                                    }} />
                                    {"RESPONSAVEL" === localStorage.getItem("tipoUsuario") && (
                                        <Checkbox
                                        defaultChecked={favoritado}
                                        {...label}
                                        icon={<FavoriteBorder />}
                                        checkedIcon={<Favorite />}
                                        onClick={handleFavoriteToggle}
                                        />
                                    )}
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <ModalDenuncia open={openModal} handleClose={handleCloseModal}
                    usuarioDenunciador={usuarioDenunciador}
                    usuarioDenunciado={usuarioDenunciado}
                />
            </div>
        </>
    );
}

export default CardUsaurio;