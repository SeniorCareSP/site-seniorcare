import Style from './ListaDoc.module.css'
import InputTexfield from '../Input/Input';
import BtnAzulS from '../botao/BtnAzulS'
import { Stack } from '@mui/material';
import SidebarDash from '../sidebar/SidebarDash';
import Documento from '../eleDocumento/Documento';

function ListaDoc() {
    return (
        <>
            <div className={Style["container"]}>
                <SidebarDash/>
                <Stack className={Style["card"]}>
                    <Stack className={Style["title"]}>
                        <h1>Analise de documentos</h1>
                        <p>Filtrar por:</p>
                    </Stack>
                    <Stack className={Style["filtros"]} direction={"row"}>
                        <InputTexfield/>
                        <BtnAzulS>Tipo doc</BtnAzulS>
                        <BtnAzulS>Data</BtnAzulS>
                        <BtnAzulS>Status</BtnAzulS>
                        <span className={Style["foto"]}></span>
                    </Stack>
                    <Stack spacing={10} className={Style["tags"]} direction={"row"}>
                        <p>foto</p>
                        <p>Nome</p>
                        <p>Tipo Doc</p>
                        <p>Data</p>
                        <p>Status</p>
                    </Stack>
                    <Stack>
                        <Documento/> 
                    </Stack>
                </Stack>

            </div>
        </>
    )
}

export default ListaDoc;