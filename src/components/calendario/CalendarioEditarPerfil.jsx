import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/joy/IconButton';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Style from './Calendario.module.css';

function CalendarioEditarPerfil({ onChange, disponibilidade }) {
    const initialState = disponibilidade || Array(7).fill().map(() => Array(3).fill(false));
    const [value, setValue] = useState(initialState);

    const handleToggle = (dayIndex, periodIndex) => {
        const newValue = value.map((day, i) =>
            day.map((period, j) => (i === dayIndex && j === periodIndex ? !period : period))
        );

        setValue(newValue);
        onChange(newValue);
    };

    const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const periods = ["Manhã", "Tarde", "Noite"];

    return (
        <div className={Style["calendario"]}>
            <span className={Style["calendario-titulo"]}>
                <h3>Dias disponíveis:</h3>
                <Stack direction="row" spacing={3}>
                    {periods.map(period => <span key={period}>{period}</span>)}
                </Stack>
            </span>

            <Stack className={Style["card-calendario"]} spacing={2}>
                {days.map((day, dayIndex) => (
                    <Stack direction="row" spacing={3} className={Style["dias-semana"]} key={day}>
                        <h3>{day}</h3>
                        <ToggleButtonGroup spacing={2} value={value[dayIndex]} onChange={(event, newValue) => setValue([...value.slice(0, dayIndex), newValue, ...value.slice(dayIndex + 1)])} color="primary">
                            {periods.map((period, periodIndex) => (
                                <IconButton
                                    key={period}
                                    value={`${period.toLowerCase()}${day.slice(0, 3)}`}
                                    selected={value[dayIndex][periodIndex]}
                                    onClick={() => handleToggle(dayIndex, periodIndex)}
                                >
                                </IconButton>
                            ))}
                        </ToggleButtonGroup>
                    </Stack>
                ))}
            </Stack>
        </div>
    );
}

export default CalendarioEditarPerfil;
