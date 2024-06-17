import Stack from '@mui/material/Stack';
import Style from '../../pages/cadastro/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Title from '../tituloCadastro/Title';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import Calendario from '../calendario/Calendario';
import api from "../../api/Usuario/apiCuidador";
import axios from 'axios'; // Importar o axios

function CadastroCuidador3() {
    const navigate = useNavigate();
    const [calendario, setCalendario] = React.useState(Array(7).fill().map(() => Array(3).fill(false)));

    const handleSave = async () => {
        try {
            const dadosCadastro = localStorage.getItem("cadastro");
            const imagem = await localStorage.getItem('imagem'); // Obter a imagem do localStorage

            if (dadosCadastro && imagem) {
                const json = JSON.parse(dadosCadastro);
                
                json.agendas = {"disponibilidade": calendario};
                
                localStorage.setItem("cadastro", JSON.stringify(json));

                const response = await api.post('', json);
                const idUsuario = response.data.idUsuario; // Suponha que a resposta contenha o ID do usuário


                const formData = new FormData();
                formData.append('file', imagem);
                formData.append('filename', `${idUsuario}.jpg`);

                await axios.post(`http://localhost:8080/files/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                // Enviar o restante dos dados do cadastro
                localStorage.clear();
                navigate("/login");
                console.log("Cadastro feito com sucesso!");
            }
        } catch (error) {
            console.error('Erro ao salvar imagem:', error);
            // Lidar com o erro de forma adequada
        }
    };

    return (
        <div className={Style["card-cadastro"]}>
            <div className={Style["linha"]}></div>
            <div className={Style["content"]}>
                <Stack spacing={3}>
                    <Title />
                    <Stack spacing={2} className={Style["itens"]}>
                        <Calendario onChange={setCalendario} />

                        <ButtonAzul onClick={handleSave}>Concluir</ButtonAzul>
                        <ButtonBranco onClick={() => navigate("/cadastro/cuidador2")}>Voltar</ButtonBranco>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}

export default CadastroCuidador3;
