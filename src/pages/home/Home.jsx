import "./home.model.css";
import Empresa from "../../components/empresa/empresa";
import Servico from "../../components/servico/servico";
import Apresentacao from "../../components/apresentacao/apresentacao";
import Porque from "../../components/porque/porque";
import Navbar from "../../components/navbar/navbar";
import Clientes from "../../components/cliente/cliente";
import Disponivel from "../../components/disponivel/cuidadores";
import AccordionTransition from "../../components/perguntas/perguntas"
import * as React from 'react';
// import Button from '@mui/material/Button';



function Home() {

 
  return (
    <>
      <Navbar />
      <Apresentacao />
      <Empresa />
      <Servico />
      <Porque />
      <Clientes />
      <Disponivel/>
      <AccordionTransition/>
    </>
  )
}

export default Home;

