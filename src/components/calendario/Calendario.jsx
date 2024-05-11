import Style from './Calendario.module.css';
import Stack from '@mui/material/Stack'
import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';

function Calendario() {
    const [value, setValue] = React.useState(['default']);
    return (
        <>
            <div className={Style["calendario"]}>
                <span className={Style["calendario-titulo"]}>
                    <h3>Dias disponiveis:</h3>
                    <Stack direction="row" spacing={3}>
                        <span>Manhã</span>
                        <span>tarde</span>
                        <span>noite</span>
                    </Stack>
                </span>

                <Stack className={Style["card-calendario"]} spacing={2}>
                    <Stack direction="row" spacing={3} className={Style["dias-semana"]}>
                        <h3>Domingo</h3>
                        <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => {setValue(newValue)}}>
                            <IconButton value="manhaD">

                            </IconButton>
                            <IconButton value="tardeD">

                            </IconButton>
                            <IconButton value="noiteD">

                            </IconButton>
                        </ToggleButtonGroup>
                    </Stack>
                    <Stack direction="row" spacing={3} className={Style["dias-semana"]}>
                        <h3>Segunda</h3>
                        <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => {setValue(newValue)}}>
                            <IconButton value="manhaSeg">

                            </IconButton>
                            <IconButton value="tardeSeg">

                            </IconButton>
                            <IconButton value="noiteSeg">
   
                            </IconButton>
                        </ToggleButtonGroup>
                    </Stack>
                    <Stack direction="row" spacing={3} className={Style["dias-semana"]}>
                        <h3>Terça</h3>
                        <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => {setValue(newValue)}}>
                            <IconButton value="manhaT">

                            </IconButton>
                            <IconButton value="tardeT">

                            </IconButton>
                            <IconButton value="noiteT">
   
                            </IconButton>
                        </ToggleButtonGroup>
                    </Stack>
                    <Stack direction="row" spacing={3} className={Style["dias-semana"]}>
                        <h3>Quarta</h3>
                        <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => {setValue(newValue)}}>
                            <IconButton value="manhaQua">

                            </IconButton>
                            <IconButton value="tardeQua">

                            </IconButton>
                            <IconButton value="noiteQua">
   
                            </IconButton>
                        </ToggleButtonGroup>
                    </Stack>
                    <Stack direction="row" spacing={3} className={Style["dias-semana"]}>
                        <h3>Quinta</h3>
                        <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => {setValue(newValue)}}>
                            <IconButton value="manhaQui">

                            </IconButton>
                            <IconButton value="tardeQui">

                            </IconButton>
                            <IconButton value="noiteQui">
   
                            </IconButton>
                        </ToggleButtonGroup>
                    </Stack>
                    <Stack direction="row" spacing={3} className={Style["dias-semana"]}>
                        <h3>Sexta</h3>
                        <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => {setValue(newValue)}}>
                            <IconButton value="manhaSex">

                            </IconButton>
                            <IconButton value="tardeSex">

                            </IconButton>
                            <IconButton value="noiteSex">
   
                            </IconButton>
                        </ToggleButtonGroup>
                    </Stack>
                    <Stack direction="row" spacing={3} className={Style["dias-semana"]}>
                        <h3>Sabado</h3>
                        <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => {setValue(newValue)}}>
                            <IconButton value="manhaSab">

                            </IconButton>
                            <IconButton value="tardeSab">

                            </IconButton>
                            <IconButton value="noiteSab">
   
                            </IconButton>
                        </ToggleButtonGroup>
                    </Stack>
                    {/* <Stack>
                        <h3>selecionar todos os dias</h3>
                    </Stack> */}
                </Stack>
            </div>
        </>
    );
}

export default Calendario;