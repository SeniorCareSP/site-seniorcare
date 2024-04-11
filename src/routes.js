import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import Login from './pages/Login';
import Cadastro from "./pages/cadastro/Cadastro"

function Router() {
  return (
    <BrowserRouter>                                        
      <Routes>       
				<Route path={"/"} element={<Home />} />             
				<Route path="/login" element={<Login />} />    
				<Route path="*" element={<h1>opa estou no *</h1>} />    
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;