import React, { useState, useEffect } from "react";
import moment from 'moment';
import Navbar from '../../components/cuidador/navbar/navbarCuidador';
import Card from '../../components/home/Cards/cards-Interno/cardInterno';
import SelectMax from "../../components/cuidador/select/selectIdoso";
import SelectIdade from "../../components/cuidador/select/selecIdade";
import SelectTrabalho from "../../components/cuidador/select/selectPeriodo";
import Remover from "../../components/cuidador/checkbox/Button";
import apiCuidador from "../../api/Usuario/apiCuidador";
import apiResponsavel from "../../api/Usuario/apiResponsavel";
import apiFavorito from "../../api/Usuario/apiFavoritar";
import Style from './cuidador.module.css';
import cardUsuario from "../../components/home/Cards/cards-Interno/cardUsuario";
import CardUsuario from "../../components/home/Cards/cards-Interno/cardUsuario";
function Procurar() {
  const [cardsData, setCardsData] = useState([]);
  const idUsuario = localStorage.getItem("idUsuario");
  const tipoDeUsuario = localStorage.getItem("tipoUsuario");
  useEffect(() => {
    recuperarValorDoCard();
  }, []);

  async function recuperarValorDoCard() {
    let data;

    try {
      if (tipoDeUsuario === "CUIDADOR") {
        const response = await apiResponsavel.get();
        data = response.data;
      } else {
        const response = await apiCuidador.get();
        data = response.data;
      }

      const updatedData = await Promise.all(data.map(async (card) => {
        const favoritado = await verificarFavorito(card.idUsuario);
        return { ...card, favoritado };
      }));

      setCardsData(updatedData);
    } catch (error) {
      console.log("Deu erro, tente novamente!");
    }
  }

  function calcularIdade(dataNascimento) {
    const hoje = moment();
    const nascimento = moment(dataNascimento);
    return hoje.diff(nascimento, 'years');
  }

  async function verificarFavorito(idCuidador) {

    if (idUsuario) {
      try {
        const response = await apiFavorito.get(`exists/${idUsuario}/${idCuidador}`);
        console.log("Response object:", response);
        console.log("Response data:", response.data);
        console.log("Favoritado:", response.data.exist);

        return response.data; // Retorna true ou false baseado na resposta do endpoint
      } catch (error) {
        console.error("Erro ao verificar favorito:", error);
        return false; // Retorna false em caso de erro
      }
    } else {
      console.error("Id do usuário não encontrado no localStorage.");
      return false; // Retorna false se o ID do usuário não estiver presente no localStorage
    }
  }

  async function handleFavoriteToggle(idCuidador) {
    const idUsuario = localStorage.getItem("idUsuario");

    if (!idUsuario) {
      console.error("Id do usuário não encontrado no localStorage.");
      return;
    }

    const isFavorito = await verificarFavorito(idCuidador);

    if (isFavorito) {
      // Desfavoritar
      try {
        await apiFavorito.delete(`${idUsuario}/${idCuidador}`);
        console.log("Cuidador desfavoritado.");
        setCardsData(prevCardsData =>
          prevCardsData.map(card =>
            card.idUsuario === idCuidador ? { ...card, favoritado: false } : card
          )
          
         );
      } catch (error) {
        console.error("Erro ao desfavoritar cuidador:", error);
      }
    } else {
      // Favoritar
      try {
        await apiFavorito.post(`${idUsuario}/${idCuidador}`);
        console.log("Cuidador favoritado.");
        setCardsData(prevCardsData =>
          prevCardsData.map(card =>
            card.idUsuario === idCuidador ? { ...card, favoritado: true } : card
          )
        );
      } catch (error) {
        console.error("Erro ao favoritar cuidador:", error);
      }
    }
  }

  return (
    <>

    
      <Navbar />
      <div className={Style["procura"]}>
      <CardUsuario/>
        <div className={Style["cards"]}>
          {cardsData.map((data, index) => (
            <div key={index}>
              <Card
                nome={data.nome}
                descricao={data.apresentacao}
                idade={calcularIdade(data.dtNascimento)}
                favoritado={data.favoritado}
                handleToggleFavorite={() => handleFavoriteToggle(data.idUsuario)} // Passa a função handleFavoriteToggle com o ID do cuidador como argumento
                tipoUsuario = {data.tipoDeUsuario}
                idUsuario={data.idUsuario}
                usuarioDenunciador={idUsuario}
                usuarioDenunciado={data.idUsuario}

              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Procurar;
