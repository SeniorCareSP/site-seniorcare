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
function Router() {
  return (
    <BrowserRouter>                                        
      <Routes>       
				<Route path={"/"} element={<Home />} />             
				<Route path="/login" element={<Login />} />    
				<Route path="*" element={<h1>404</h1>} />    
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path='/cadastro2' element={<Cadastro2 />} />
        <Route path='/cadastro3' element={<Cadastro3 />} />
        <Route path='/cadastro/cuidador' element={<Cuidador1 />} />
        <Route path={'/cadastro/cuidador2'} element={<Cuidador2 />} />
        <Route path={'/cadastro/cuidador3'} element={<Cuidador3 />} />
        <Route path={'/procurar'} element={<Procurar />} />
        <Route path={'/cadastro/concluido'} element={<Finalizado/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;