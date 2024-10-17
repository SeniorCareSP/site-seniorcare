import Stack from '@mui/material/Stack';
import ButtonAzulEscuro from '../../../botao/BotaoAzulEscuro';
import Style from './cardUsuario.module.css';
import BtnAzulS from '../../../botao/BtnAzulS';
import { Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import apiCuidador from '../../../../api/Usuario/apiCuidador';
import apiResponsavel from '../../../../api/Usuario/apiResponsavel';
import { Favorite, FavoriteBorder, Flag, Label } from '@mui/icons-material';
import ModalDenuncia from '../../../cuidador/denuncia/denuncia';

function CardUsaurio({ nome, descricao, idade, favoritado, handleToggleFavorite, tipoUsuario, idUsuario, usuarioDenunciador, usuarioDenunciado }) {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [imagemSrc, setImagemSrc] = useState(null);

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

    async function dadosDoUsuario(idUsuario, tipo) {
        let data;
        if (tipo === "CUIDADOR") {
            const response = await apiCuidador.get(`/${idUsuario}`);
            data = response.data;
        } else {
            const response = await apiResponsavel.get(`/${idUsuario}`);
            data = response.data;
        }
        localStorage.setItem("dadosUsuario", JSON.stringify(data));
        navigate("/usuarios/perfil");
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleFavoriteToggle = () => {
        handleToggleFavorite(idUsuario); // Chama a função para favoritar/desfavoritar o usuário com o idUsuario
    };

    return (
        <>
            <div className={Style["cardUsuario"]}>
                <Stack direction="column" spacing={0}>
                    <img src="" alt="" />
                    <Stack direction="row" spacing={3}>
                        <Stack direction="column" spacing={1} padding={2}>
                            <h3>{nome}</h3>
                            <p>{descricao}</p>
                            <p>distancia</p>
                            <BtnAzulS variant="contained" onClick={() => dadosDoUsuario(idUsuario, tipoUsuario)}>
                                Ver perfil
                            </BtnAzulS>
                        </Stack>
                        <Stack direction="column-reverse">
                            <Stack direction="row">
                                <img src={Flag} alt="Denunciar" onClick={handleOpenModal} style={{ cursor: 'pointer' }} />
                                {"RESPONSAVEL" === localStorage.getItem("tipoUsuario") && (
                                    <Checkbox
                                        defaultChecked={favoritado}
                                        {...Label}
                                        icon={<FavoriteBorder />}
                                        checkedIcon={<Favorite />}
                                        onClick={handleFavoriteToggle}
                                    />
                                )}
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </div>
            <ModalDenuncia open={openModal} handleClose={handleCloseModal}
                usuarioDenunciador={usuarioDenunciador}
                usuarioDenunciado={usuarioDenunciado}
            />
        </>
    );
}

export default CardUsaurio;