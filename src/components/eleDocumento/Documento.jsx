import { IconButton, Stack, ToggleButton } from '@mui/material';
import React from 'react';
import Style from './Documento.module.css'
import icon from '../../utils/assets/Info.png'

function Documento() {
    const [selected, setSelected] = React.useState(false);
    return (
        <>
            <div className={Style["card"]}>
                <Stack direction={'row'} className={Style["conteudo"]} spacing={16}>
                    <Stack direction={'row'} spacing={3} alignContent={"center"}>
                        <ToggleButton
                            className={Style["toggle-button"]}
                            color='primary'
                            value="check"
                            selected={selected}
                            onChange={() => {
                                setSelected(!selected);
                            }}>
                            <IconButton value="sim"/>
                        </ToggleButton>
                        <span className={Style["foto-doc"]}></span>
                    </Stack>
                    <p>nome</p>
                    <p>tipo</p>
                    <p>data</p>
                    <p>status</p>
                    <img src={icon} />
                </Stack>
            </div>
        </>
    );
}


export default Documento;