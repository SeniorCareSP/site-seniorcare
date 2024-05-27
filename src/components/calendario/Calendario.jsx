import Style from './Calendario.module.css';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';

function Calendario({ onChange }) {
    const initialState = Array(7).fill().map(() => Array(3).fill(false));
    const [value, setValue] = React.useState(initialState);
    const [value2, setValue2] = React.useState([['']]);

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
                        <ToggleButtonGroup spacing={2} value={value2} onChange={(event, newValue) => {setValue2(newValue)}} color="primary">
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

export default Calendario;
