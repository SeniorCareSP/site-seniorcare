import Style from './cuidador.module.css';
import Navbar from '../../components/cuidador/navbar/navbarCuidador';
import moment from 'moment';
import Img from '../../utils/assets/Heart.png';
import apiFavorito from "../../api/Usuario/apiFavoritar";
import React, { useState, useEffect } from "react";
import ButtonAzulEscuro from '../../components/botao/BotaoAzulEscuro';
import { useNavigate } from "react-router-dom";
import CardUsuario from "../../components/home/Cards/cards-Interno/cardUsuario";
import apiUsuario from "../../api/Usuario/apiUsuario";
import apiResponsavel from '../../api/Usuario/apiResponsavel';
function Favoritos() {
    const [cardsData, setCardsData] = useState([]);
    const navigate = useNavigate();
    const idUsuario = localStorage.getItem("idUsuario");

    useEffect(() => {
        recuperarValorDoCard();
    }, []);

    async function recuperarValorDoCard() {
        try {
            const response = await apiResponsavel.get(`/${idUsuario}`);
            const data = response.data.favoritos.map(fav => fav.cuidadorFavoritado);
            setCardsData(data);
        } catch (error) {
            console.log("Deu erro, tente novamente!", error);
        }
    }   

    function calcularIdade(dataNascimento) {
        const hoje = moment();
        const nascimento = moment(dataNascimento);
        return hoje.diff(nascimento, 'years');
    }

    async function handleFavoriteToggle(idCuidador) {
        if (!idUsuario) {
            console.error("Id do usuário não encontrado no localStorage.");
            return;
        }
        try {
            await apiFavorito.delete(`${idUsuario}/${idCuidador}`);
            console.log("Cuidador desfavoritado.");
            setCardsData(prevCardsData =>
                prevCardsData.filter(card => card.idUsuario !== idCuidador)
            );
        } catch (error) {
            console.error("Erro ao desfavoritar cuidador:", error);
        }
    }

    return (
        <>
            <Navbar />
            <div className={Style["favorito"]}>
                {cardsData.length === 0 ? (
                    <div className={Style["texto"]}>
                        <p>Você ainda não adicionou nenhum <br />
                            cuidador a sua lista de favoritos.</p>
                        <img src={Img} alt='Logo' />
                        <ButtonAzulEscuro onClick={() => navigate("/procurar")}>
                            Procurar Cuidadores
                        </ButtonAzulEscuro>
                    </div>
                ) : (
                    <div className={Style["cards"]}>
                        {cardsData.map((data, index) => (
                            <div key={index}>
                                <CardUsuario
                                    distancia={data.distancia}
                                    nome={data.nome}
                                    descricao={data.apresentacao}
                                    idade={calcularIdade(data.dtNascimento)}
                                    favoritado={data.favoritado}
                                    handleToggleFavorite={() => handleFavoriteToggle(data.idUsuario)}
                                    tipoUsuario={data.tipoDeUsuario}
                                    idUsuario={data.idUsuario}
                                    usuarioDenunciador={idUsuario}
                                    usuarioDenunciado={data.idUsuario}
                                />
                            </div>
                        ))}
                    </div>
                )}
                <div className={Style["linha"]}></div>
            </div>
        </>
    );
}

export default Favoritos;
