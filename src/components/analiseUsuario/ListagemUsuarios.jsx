import Style from './Usuarios.module.css'
import BtnAzulS from '../botao/BtnAzulS'
import { Stack } from '@mui/material';
import SidebarDash from '../sidebar/SidebarDash';
import Documento2 from '../eleDocumento/Documento2';
import InputPesquisa from '../Input/InputPesquisa';
import apiUsuario from '../../api/Usuario/apiUsuario';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    recuperarValorDoCard();
  }, []);
    async function recuperarValorDoCard() {
        const tipoDeUsuario = localStorage.getItem("tipoUsuario");
        let data;
    
        try {
          
            
          
        } catch (error) {
          console.log("Deu erro, tente novamente!");
        }
      }
    return (
        <>   
            <div className={Style["container"]}>
                <SidebarDash/>
                <Stack className={Style["card"]} spacing={3}>
                    <Stack className={Style["title"]} direction={"row"} spacing={25}>
                        <h1>Analise de Usários</h1>
                    </Stack>
                    <Stack className={Style["filtros"]} direction={"row"} spacing={7}>
                        <Stack spacing={2}>
                            <p>Filtrar por:</p>
                            <Stack direction={'row'} spacing={3} className={Style["tipo-filtro"]}>
                                <BtnAzulS sx={{width:"12vw",}} onClick={() => navigate('/admin/cadastro')}>Cadastrar usuário</BtnAzulS>
                                <InputPesquisa/>
                                <BtnAzulS>Permissão</BtnAzulS>
                                <BtnAzulS>A-Z</BtnAzulS>
                                <BtnAzulS>Data</BtnAzulS>
                                <BtnAzulS>Desfazer</BtnAzulS>
                                <span className={Style["foto"]}></span>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack spacing={17} className={Style["tags"]} direction={"row"}>
                        <p>foto</p>
                        <p>Nome</p>
                        <p>TIpo Usuario</p>
                        <p>Telefone</p>
                        <p>Data De Cadastro</p>
                        <p>E-mail</p>
                    </Stack>
                    <Stack spacing={3} paddingBottom={3}>
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                        <Documento2/> 
                    </Stack>
                </Stack>

            </div>
        </>
    )
}

export default ListaUsuarios;