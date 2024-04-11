import "./home.model.css";
import Empresa from "../../components/empresa";
import Servico from "../../components/servico";
import Apresentacao from "../../components/apresentacao";
import Porque from "../../components/porque";
import Navbar from "../../components/navbar";
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

    </>
  )
}

export default Home;

