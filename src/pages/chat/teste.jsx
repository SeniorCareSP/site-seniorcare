
// // import Style from './cuidador.module.css';
// import Chat from "../../components/chat/app";
import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Sidebar from '../../components/chat/componentes/Sidebar.tsx';
import Header from '../../components/chat/componentes/Header.tsx';
import MyMessages from '../../components/chat/componentes/MyMessages.tsx';

function chat(){

    return(
        <>
         <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Sidebar />
        <Header />
        <Box component="main" className="MainContent" sx={{ flex: 1 }}>
          <MyMessages />
        </Box>
      </Box>
    </CssVarsProvider>
        </>
    );
}

export default chat