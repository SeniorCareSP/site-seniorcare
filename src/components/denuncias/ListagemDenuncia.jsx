import Style from './Denuncia.module.css';
import BtnAzulS from '../botao/BtnAzulS';
import { Stack } from '@mui/material';
import SidebarDash from '../sidebar/SidebarDash';
import Documento from '../eleDocumento/Documento';
import InputPesquisa from '../Input/InputPesquisa';

function ListaDenun() {
    return (
        <>
            <div className={Style["container"]}>
                <SidebarDash/>
                <Stack className={Style["card"]} spacing={3}>
                    <Stack className={Style["title"]} direction={"row"} spacing={25}>
                        <h1>Analise de Denuncias</h1>
                    </Stack>
                    <Stack className={Style["filtros"]} direction={"row"} spacing={7}>
                        <InputPesquisa/>
                        <Stack spacing={2}>
                            <p>Filtrar por:</p>
                            <Stack direction={'row'} spacing={5}>
                                <BtnAzulS>Tipo doc</BtnAzulS>
                                <BtnAzulS>Data</BtnAzulS>
                                <BtnAzulS>Status</BtnAzulS>
                            </Stack>
                        </Stack>
                        <span className={Style["foto"]}></span>
                    </Stack>
                    <Stack spacing={17} className={Style["tags"]} direction={"row"}>
                        <p>foto</p>
                        <p>Nome</p>
                        <p>TAGs</p>
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

export default ListaDenun;