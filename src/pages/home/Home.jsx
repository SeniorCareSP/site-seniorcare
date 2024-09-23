import "./home.model.css";
import Empresa from "../../components/home/empresa/empresa";
import Servico from "../../components/home/servico/servico";
import Apresentacao from "../../components/home/apresentacao/apresentacao";
import Porque from "../../components/home/porque/porque";
import Navbar from "../../components/home/navbar/navbar";
import Clientes from "../../components/home/cliente/cliente";
import Disponivel from "../../components/home/disponivel/cuidadores";
import AccordionTransition from "../../components/home/perguntas/perguntas";
import JunteSe from "../../components/home/Junte-se/junteSe";
import Footer from "../../components/home/footer/footer";
import * as React from 'react';
import apiVisitas from "../../api/Usuario/apiVIsitas";

function Home() {

  React.useEffect(() => {
    registrarVisita();
  }, []);

  const registrarVisita = async () => {
    try {
      await apiVisitas.post('/registrar', {
      });
      console.log('Visita registrada com sucesso!');
    } catch (error) {
      console.error('Erro ao registrar visita:', error);
    }
  };

  return (
    <>
      <Navbar />
      <Apresentacao />
      <Empresa />
      <Servico />
      <Porque />
      <Clientes />
      <Disponivel />
      <AccordionTransition />
      <JunteSe />
      <Footer />
    </>
  );
}

export default Home;
