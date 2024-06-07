import React from "react";
import Calendario from "../calendario/Calendario";
import Navbar from "../cuidador/navbar/navbarCuidador";
import Stack from '@mui/material/Stack'
import InputTexfield from "../Input/Input";
import Style from '../../pages/confUser/Atualizar.module.css'
import ButtonAzul from "../botao/BotaoAzul";
import ElderList from "./idosoComponent";
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Button from '@mui/joy/Button';
import ImgLogin from '../../components/eleLogin/ImgLogin';

function EleAtualizarPerfil() {
    const [value, setValue] = React.useState(['default']);
    return (
        <>
            <Navbar />
            
            <div className={Style["corpo"]}>
                    <div className={Style["ajuste"]}>
                    <div className={Style["img"]}>
                    <ImgLogin />
                    <span>Voltar</span>
                    </div>
                    </div>
                    <div className={Style["texto"]}>
                    <h2>Edição de perfil</h2>
                    </div>
                

            
                <Stack direction="row" className={Style["centraliza"]} >
                    <Stack className={Style["info-usuario"]} spacing={4} marginInline={5}>
                        <div className={Style["foto-usu"]}></div>
                        <InputTexfield label="Nome" />
                        <InputTexfield label="Sobre" size="xl"/>
                    </Stack> 
                    {/* info-suario */}
                    <Stack className={Style["endereco"]} >
                        <Stack direction="row" marginLeft={6} marginTop={2}>
                            <InputTexfield label="Endereço" sx={{width:"42vw"}}/>
                            </Stack>
                            <Stack direction="row" spacing={2}marginLeft={6}  >
                            <InputTexfield label="CEP" sx={{width:"14vw"}} />
                            <InputTexfield label="Rua"sx={{width:"27vw"}} />
                        </Stack>
                        <Stack direction="row" spacing={2} marginLeft={6} >
                            <InputTexfield label="Bairro" sx={{width:"29vw"}} />
                            <InputTexfield label="Número" sx={{width:"12vw"}} />
                        </Stack>
                        <Stack direction="row" spacing={2} marginLeft={6}  marginBottom={2}>
                            <InputTexfield label="Bairro"sx={{width:"42vw"}} />
                        </Stack>
                    </Stack>
                </Stack>
            
                <div className={Style["idoso"]}>
                    <Stack direction="row" spacing="3" className={Style["adiciona"]}>
                       <ElderList/>
                       <Stack spacing={6}>
                
                    <div className={Style["card"]}>
                    <Stack spacing={3} className={Style["opcoes"]}>
                        <Stack direction="row" spacing={2}>
                            <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => { setValue(newValue) }}>
                                <Button value="dirigir">Trabalho de casa</Button>
                                <Button value="fumo">Culinária</Button>
                                <Button value="cuidados">Curativos</Button>
                            </ToggleButtonGroup>
                        </Stack>
                        <Stack direction="row" spacing={2} justifyContent={"center"}>
                            <ToggleButtonGroup spacing={2} color="primary" value={value} onChange={(event, newValue) => { setValue(newValue) }}>
                                <Button value="trabCasa">Banho</Button>
                                 </ToggleButtonGroup>
                        </Stack>
                    </Stack>
                    </div>
                    </Stack>
                    </Stack>
                   
                </div>

                <div className={Style["calendario"]}>
                <Stack spacing={3} className={Style["itens"]}>
                    <Calendario />
                    <ButtonAzul>Salvar Alterações</ButtonAzul>
                </Stack>
                </div>
            </div>

        </>
    )
}

export default EleAtualizarPerfil;