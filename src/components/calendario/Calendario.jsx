import Style from '../../pages/cadastro/Cadastro.module.css';
import Stack from '@mui/material/Stack'

function Calendario() {
    return (
        <>
            <div className={Style["calendario"]}>
                <h3>Dias disponiveis:</h3>
                <Stack>
                    <span>Manhã</span>
                    <span>tarde</span>
                    <span>noite</span>
                </Stack>
                <div className={Style["card_calendario"]}>
                    <Stack>
                        <span>Domingo</span>
                    </Stack>
                    <Stack>
                        <span>Segunda</span>
                    </Stack>
                    <Stack>
                        <span>Terça</span>
                    </Stack>
                    <Stack>
                        <span>Quarta</span>
                    </Stack>
                    <Stack>
                        <span>Quinta</span>
                    </Stack>
                    <Stack>
                        <span>Sexta</span>
                    </Stack>
                    <Stack>
                        <span>Sabado</span>
                    </Stack>
                    <Stack>
                        <span>selecionar todos os dias</span>
                    </Stack>
                </div>
            </div>
        </>
    );
}

export default Calendario;