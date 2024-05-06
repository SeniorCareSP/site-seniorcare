import Calendario from "../calendario/Calendario";
import Navbar from "../cuidador/navbar/navbarCuidador";
import Stack from '@mui/material/Stack'
import InputTexfield from "../Input/Input";
import Style from '../../pages/confUser/Atualizar.module.css'
import ButtonAzul from "../botao/BotaoAzul";

function EleAtualizarPerfil(){
    return(
        <>
            <Navbar/>
                <div>
                    <span>voltar</span>
                    <h2>Edição de perfil</h2>
                </div>
            <Stack direction="row">
                <Stack>
                    <div className={Style["foto-usu"]}></div>
                    <InputTexfield label="Nome" />
                    <InputTexfield label="Sobre" />
                </Stack>
                <Stack>
                    <Stack direction="row" spacing={3}>
                        <InputTexfield label="CEP"/>
                        <InputTexfield label="Rua" />
                        <InputTexfield label="Numero" />
                    </Stack>
                    <Stack direction="row" spacing={3}>
                        <InputTexfield label="Bairro" />
                        <InputTexfield label="Cidade" />
                    </Stack>
                </Stack>
            </Stack>
            <div>
                <Stack>

                </Stack>
            </div>
            <Stack>
                <div>
                    <Calendario/>
                </div>
                <ButtonAzul>Salvar Alterações</ButtonAzul>
            </Stack>

        </>
    )
}

export default EleAtualizarPerfil;