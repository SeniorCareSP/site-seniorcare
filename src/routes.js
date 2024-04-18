import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Cadastro from "./pages/cadastro/Cadastro"
import Cadastro2 from './pages/cadastro/Cadastro2';
import Cadastro3 from './pages/cadastro/Cadastro3';
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
      </Routes>
    </BrowserRouter>
  );
}

export default Router;