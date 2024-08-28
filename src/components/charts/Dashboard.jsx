import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import ChartGenero from "./ChartGenero";
import ChartAvaliacao from "./ChartAvaliacao";
import SidebarDash from "../sidebar/SidebarDash";
import Style from "./Dashboard.module.css";
import ChartPie from "./ChartPie";
import axios from "axios";
import apiDashBoard from "../../api/Usuario/apiDashBoard";

function EleDashbord() {
    const [visitasHoje, setVisitasHoje] = useState(0);
    const [totalDenuncias, setTotalDenuncias] = useState(0);
    const [denunciasAguardandoAnalise, setDenunciasAguardandoAnalise] = useState(0);
    const [contagemGeneroIdosos, setContagemGeneroIdosos] = useState({ homem: [0, 0, 0, 0, 0], mulher: [0, 0, 0, 0, 0] });
    const [contagemCuidadores, setContagemCuidadores] = useState({ homem: 0, mulher: 0, none: 0 });
    const [contagemCaracteristicas, setContagemCaracteristicas] = useState({});

    useEffect(() => {
        fetchDadosDashboard();
    }, []);

    const fetchDadosDashboard = async () => {
        try {
            // Buscar quantidade de visitas hoje
            const responseVisitas = await apiDashBoard.get('/count');
            const visitas = responseVisitas.data || 0; // Caso seja nulo, definir como 0
            setVisitasHoje(visitas);
            console.log("Visitas Hoje:", visitas);

            // Buscar quantidade de denúncias hoje
            const responseDenuncias = await apiDashBoard.get('/denuncias/count');
            const denunciasHoje = responseDenuncias.data || 0; // Caso seja nulo, definir como 0
            setTotalDenuncias(denunciasHoje);
            console.log("Total de denúncias hoje:", denunciasHoje);

            // Buscar denúncias aguardando análise
            const responseDenunciasAguardandoAnalise = await apiDashBoard.get('/quantidade-denuncia-aberta');
            const denunciasAguardando = responseDenunciasAguardandoAnalise.data || 0; // Caso seja nulo, definir como 0
            setDenunciasAguardandoAnalise(denunciasAguardando);
            console.log("Denúncias aguardando análise:", denunciasAguardando);

            // Buscar contagem de idosos por faixa etária e gênero
            const responseIdosos = await apiDashBoard.get('/idosos/count-by-faixa-etaria-e-genero');
            const contagemIdosos = responseIdosos.data || { homem: [0, 0, 0, 0, 0], mulher: [0, 0, 0, 0, 0] }; // Caso seja nulo, definir como objeto vazio
            setContagemGeneroIdosos(contagemIdosos);
            console.log("Contagem de idosos por faixa etária e gênero:", contagemIdosos);

            // Buscar contagem de cuidadores por gênero
            const responseCuidadores = await apiDashBoard.get('/cuidador/count-by-genero');
            const contagemCuidadores = responseCuidadores.data || { homem: 0, mulher: 0, none: 0 }; // Caso seja nulo, definir como objeto vazio
            setContagemCuidadores(contagemCuidadores);
            console.log("Contagem de cuidadores por gênero:", contagemCuidadores);

            // Buscar contagem de características por nome
            const responseCaracteristicas = await apiDashBoard.get('/caracteristica/count-by-nome');
            const contagemCaracteristicas = responseCaracteristicas.data || {};
            setContagemCaracteristicas(contagemCaracteristicas);
            console.log("Contagem de características por nome:", contagemCaracteristicas);
        } catch (error) {
            console.error("Erro ao buscar dados do dashboard:", error);
            // Tratar erro conforme necessário
        }
    };

    return (
        <div className={Style.container}>
            <SidebarDash />
            <div className={Style.card}>
                <div className={Style["title-dash"]}>
                    <h1>Dashboard</h1>
                </div>
                <Stack spacing={3}>
                    <Stack spacing={5} direction="row">
                        <div className={Style.kpi1}>
                            <Stack>
                                <h4>Visitas Hoje</h4>
                                <h1>{visitasHoje}</h1>
                            </Stack>
                            <Stack>
                                <p>Total de visitas</p>
                            </Stack>
                        </div>
                        <span className={Style["chart-avaliacao"]}>
                            <ChartAvaliacao data={contagemCaracteristicas} />
                        </span>
                    </Stack>
                    <Stack direction="row" spacing={3}>
                        <Stack spacing={2}>
                            <Stack spacing={4} direction="row" className={Style.kpi2}>
                                <div>
                                    <h1>{denunciasAguardandoAnalise}</h1>
                                    <p>Denúncias aguardando análise</p>
                                </div>
                                <div>
                                    <h1>{totalDenuncias}</h1>
                                    <p>Quantidade de denúncias hoje</p>
                                </div>
                            </Stack>
                            <span className={Style["chart-genero"]}>
                                <h2>Faixa etária dos idosos</h2>
                                <ChartGenero data={contagemGeneroIdosos} />
                            </span>
                        </Stack>
                        <Stack>
                            <span className={Style["chart-pie"]}>
                                <h2>Cuidadores</h2>
                                <ChartPie data={contagemCuidadores} />
                            </span>
                        </Stack>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
}

export default EleDashbord;
