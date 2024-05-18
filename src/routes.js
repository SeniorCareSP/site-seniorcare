import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Cadastro from "./pages/cadastro/Cadastro"
import Cadastro2 from './pages/cadastro/Cadastro2';
import Cadastro3 from './pages/cadastro/Cadastro3';
import Cuidador1 from './pages/cadastro/Cuidador1';
import Cuidador2 from './pages/cadastro/Cuidador2';
import Cuidador3 from './pages/cadastro/Cuidador3';
import Procurar from './pages/cuidador/procurar';
import Finalizado from './pages/cadastro/Finalizado';
import Chat from './pages/chat/teste';
import Editperfil from './pages/admin/EditPerfil';
import CadastroAdm from './components/admCadastro/cadastroAdm';
import Favorito from "./pages/cuidador/favorito";
import AtualizarPerfil from './pages/confUser/AtualizarPerfil';
import AnaliseDocs from './pages/admin/AnaliseDocs';
import Erro from './pages/404/erro';
import Perfil from './pages/Perfil/VisualizaoInterna'

function Router() {
  return (
    <BrowserRouter>                                        
      <Routes>       
				<Route path={"/"} element={<Home />} />             
				<Route path="/login" element={<Login />} />    
				<Route path="*" element={<Erro/>}/>    
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path='/cadastro2' element={<Cadastro2 />} />
        <Route path='/cadastro3' element={<Cadastro3 />} />
        <Route path='/cadastro/cuidador' element={<Cuidador1 />} />
        <Route path='/cadastro/cuidador2' element={<Cuidador2 />} />
        <Route path='/cadastro/cuidador3' element={<Cuidador3 />} />
        <Route path='/procurar' element={<Procurar />} />
        <Route path='/cadastro/concluido' element={<Finalizado/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/editar/perfil' element={<Editperfil/>}/>
        <Route path='/cadastroAdm' element={<CadastroAdm/>}/>
        <Route path='/cadastro/cuidador2' element={<Cuidador2 />} />
        <Route path='/cadastro/cuidador3' element={<Cuidador3 />} />
        <Route path='/procurar' element={<Procurar />} />
        <Route path='/cadastro/concluido' element={<Finalizado/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/favorito' element={<Favorito/>}/>
        <Route path='/atualizar/usuario' element={<AtualizarPerfil/>}/>
        <Route path='/admin/analiseDocs' element={<AnaliseDocs/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;