import Style from './cuidador.module.css';
import Navbar from '../../components/cuidador/navbar/navbarCuidador';
import Card from '../../components/home/Cards/cards-Interno/cardInterno';
import SelectMax from "../../components/cuidador/select/selectIdoso";
import SelectIdade from "../../components/cuidador/select/selecIdade";
import SelectTrabalho from "../../components/cuidador/select/selectPeriodo";
import Remover from "../../components/cuidador/checkbox/Button";
import React, { useState, useEffect } from "react";
import apiCuidador from "../../api/Usuario/apiCuidador";
import apiResponsavel from "../../api/Usuario/apiResponsavel";
import moment from 'moment';

function Procurar() { // Renomeando a função para começar com letra maiúscula
  const [cardsData, setCardsData] = useState();

  useEffect(() => {
    recuperarValorDoCard();
  }, []); // Executando a função de busca quando o componente for montado

  function recuperarValorDoCard() {
    const tipoDeUsuario = localStorage.getItem("tipoUsuario");
    const usuario = tipoDeUsuario;

    if (usuario === "CUIDADOR") {
      apiResponsavel.get().then((response) => {
        const { data } = response;
        console.log(response)
        setCardsData(data)
      }).catch(() => {
        console.log("Deu erro, tente novamente!") // Caso haja um erro na requisição, exibe uma mensagem no console
      })
    } else {
      apiCuidador.get().then((response) => {
        const { data } = response;
        console.log(response)
        setCardsData(data)
      }).catch(() => {
        console.log("Deu erro, tente novamente!") // Caso haja um erro na requisição, exibe uma mensagem no console
      })
    }


  }

  function calcularIdade(dataNascimento) {
    const hoje = moment();
    const nascimento = moment(dataNascimento);
    return hoje.diff(nascimento, 'years');
  }

  return (
    <>
      <Navbar />
      <div className={Style["procura"]}>
        <div className={Style["filtro"]}>
          <SelectMax />
          <SelectTrabalho />
          <SelectIdade />
          <Remover />
        </div>
        <div className={Style["cards"]}>
          {cardsData && cardsData.map((data, index) => (
            <div key={index}>
              <Card
                nome={data.nome}
                descricao={data.apresentacao}
                idade={calcularIdade(data.dtNascimento)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Procurar;
