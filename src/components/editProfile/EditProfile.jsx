import Style from '../../pages/adimin/Adimin.module.css'
import InputTexfield from '../Input/Input';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import { Stack } from '@mui/material';
import SidebarDash from '../sidebar/SidebarDash';
function EditProfile() {
    return (
        <>
            <div className={Style["container"]}> 
                <SidebarDash />
                <Stack className={Style["card"]} spacing={5}> 

                    <Stack spacing={3} className={Style["fotousu"]}>
                        <span></span>
                        <h2>nome</h2>
                    </Stack>
                    <Stack spacing={5}>
                        <Stack spacing={5} direction={"row"} className={Style["inputs"]}>
                        <Stack spacing={3}>
                                <InputTexfield label="Nome" />
                                <InputTexfield label="Sobre" />
                            </Stack>
                            <Stack spacing={3}>
                                <InputTexfield label="CEP" />
                                <InputTexfield label="Rua" />
                                <InputTexfield label="Numero" />
                                <InputTexfield label="Bairro" />
                                <InputTexfield label="Cidade" />
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

export default EditProfile;