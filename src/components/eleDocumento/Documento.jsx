import { Stack } from '@mui/material';
import Style from './Documento.module.css'


function Documento(){
    return(
        <>
            <div className={Style["card"]}>
                <Stack direction={'row'}>
                    <Stack direction={'row'}>
                        <span className={Style["check"]}></span>
                        <span className={Style["foto-doc"]}></span>
                    </Stack>
                    <p>nome</p>
                    <p>tipo</p>
                    <p>data</p>
                    <p>status</p>
                    <span className={Style["icon"]}>
                        i
                    </span>
                </Stack>
            </div>
        </>
    );
}


export default Documento;