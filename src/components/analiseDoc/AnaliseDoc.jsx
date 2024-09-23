import Style from '../../pages/admin/Admin.module.css'
import InputTexfield from '../Input/Input';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import { Stack } from '@mui/material';
import SidebarDash from '../sidebar/SidebarDash';
import SimpleSelect from '../Input/Select';

function AnaliseDocumento() {
    return (
        <>
            <div className={Style["container"]}>
                <SidebarDash/>
                <Stack className={Style["card"]}>

                    <Stack spacing={3} className={Style["fotousu"]}>
                        <span></span>
                        <h2>nome</h2>
                    </Stack>
                    <Stack spacing={5}>
                        <Stack spacing={5} direction={"row"} className={Style["inputs"]}>
                            <Stack spacing={3}>
                                <InputTexfield label="certificado1" />
                                <InputTexfield label="certificado2" />
                            </Stack>
                            <Stack spacing={3}>
                                <SimpleSelect label="s" />
                                <SimpleSelect label="Permissão" />
                            </Stack>
                        </Stack>
                        <Stack className={Style["btns"]} spacing={3}>
                            <ButtonAzul>Concluir</ButtonAzul>
                            <ButtonBranco>Cancelar</ButtonBranco>
                        </Stack>
                    </Stack>

                </Stack>

            </div>
        </>
    )
}

export default AnaliseDocumento;