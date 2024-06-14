import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home.jsx";
import Login from './pages/login/Login.jsx';
import Cadastro from "./pages/cadastro/Cadastro.jsx";
import Cadastro2 from './pages/cadastro/Cadastro2.jsx';
import Cadastro3 from './pages/cadastro/Cadastro3.jsx';
import Cuidador1 from './pages/cadastro/Cuidador1.jsx';
import Cuidador2 from './pages/cadastro/Cuidador2.jsx';
import Cuidador3 from './pages/cadastro/Cuidador3.jsx';
import Procurar from './pages/cuidador/procurar.jsx';
import Finalizado from './pages/cadastro/Finalizado.jsx';
import Editperfil from './pages/admin/EditPerfil.jsx';
import ListagemDenuncia from './pages/admin/ListgemDenuncia.jsx';
import CadastroAdm from './components/admCadastro/cadastroAdm.jsx';
import Favorito from "./pages/cuidador/favorito.jsx";
import AtualizarPerfil from './pages/confUser/AtualizarPerfil.jsx';
import AnaliseDocs from './pages/admin/AnaliseDocs.jsx';
import Erro from './pages/404/erro.jsx';
import Perfil from './pages/Perfil/perfil2.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import React from 'react';
import Chat from './pages/chat/Chat.jsx'
import ListagemDoc from './pages/admin/ListagemDoc.jsx';
import ResetPasswordStep1 from './components/recuperacaoSenha/ResetPasswordStep1.jsx';
import ResetPasswordStep2 from './components/recuperacaoSenha/ResetPasswordStep2.jsx';
import ResetPasswordStep3 from './components/recuperacaoSenha/ResetpasswordStep3.jsx';
import ResetPasswordStep4 from './components/recuperacaoSenha/ResetPasswordStep4.jsx';
import RecuperarSenha from './pages/admin/recuperarSenha/RecuperarSenha.jsx';

import Denuncias from './pages/admin/Denuncias.jsx';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Erro />} />
        <Route path="/" element={<Home />} />

        <Route path="/reset-password-1" element={<ResetPasswordStep1 />} />
        <Route path="/reset-password-2" element={<ResetPasswordStep2 />} />
        <Route path="/reset-password-3" element={<ResetPasswordStep3 />} />
        <Route path="/reset-password-4" element={<ResetPasswordStep4 />} />

        {/* <Route path="/recuperar-senha" element={<RecuperarSenha />} /> */}

        {/*====================================
              Relacionandas com o banco
          =====================================*/ }
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path='/cadastro2' element={<Cadastro2 />} />
        <Route path='/cadastro3' element={<Cadastro3 />} />
        <Route path='/cadastro/cuidador' element={<Cuidador1 />} />
        <Route path='/cadastro/cuidador2' element={<Cuidador2 />} />
        <Route path='/cadastro/cuidador3' element={<Cuidador3 />} />
        <Route path='/cadastro/concluido' element={<Finalizado />} />
        <Route path='/procurar' element={<Procurar/>} />
        <Route path='/favoritos' element={<Favorito/>} />


        <Route path='/admin/cadastro' element={<CadastroAdm />} />
        <Route path='/admin/editar' element={<Editperfil />} />

        {/*====================================
          =====================================*/ }

        <Route path="/chat" element={<Chat />} />


        <Route path='/usuarios/perfil' element={<Perfil />} />
        <Route path='/atualizar/usuario' element={<AtualizarPerfil />} />x

        <Route path='/admin/analiseDocs' element={<AnaliseDocs />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/listagemDocs' element={<ListagemDoc />} />
        <Route path='/admin/denuncias' element={<Denuncias />} />
        <Route path='/admin/listagemDenuncia' element={<ListagemDenuncia/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;