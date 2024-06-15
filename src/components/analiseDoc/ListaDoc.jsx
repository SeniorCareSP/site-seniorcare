import Style from './ListaDoc.module.css'
import BtnAzulS from '../botao/BtnAzulS'
import { Stack } from '@mui/material';
import SidebarDash from '../sidebar/SidebarDash';
import Documento from '../eleDocumento/Documento';
import InputPesquisa from '../Input/InputPesquisa'
function ListaDoc() {
    return (
        <>
            <div className={Style["container"]}>
                <SidebarDash/>
                <Stack className={Style["card"]} spacing={3}>
                    <Stack className={Style["title"]} direction={"row"} spacing={25}>
                        <h1>Analise de documentos</h1>
                    </Stack>
                    <Stack className={Style["filtros"]} direction={"row"} spacing={7}>
                        <Stack spacing={2}>
                            <p>Filtrar por:</p>
                            <Stack direction={'row'} spacing={5} className={Style["tipo-filtro"]}>
                                <InputPesquisa/>
                                <BtnAzulS>Tipo doc</BtnAzulS>
                                <BtnAzulS>Data</BtnAzulS>
                                <BtnAzulS>Status</BtnAzulS>
                                <span className={Style["foto"]}></span>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack spacing={17} className={Style["tags"]} direction={"row"}>
                        <p>foto</p>
                        <p>Nome</p>
                        <p>Tipo Doc</p>
                        <p>Data</p>
                        <p>Status</p>
                    </Stack>
                    <Stack spacing={3} paddingBottom={3}>
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                        <Documento/> 
                    </Stack>
                </Stack>

            </div>
        </>
    )
}

export default ListaDoc;