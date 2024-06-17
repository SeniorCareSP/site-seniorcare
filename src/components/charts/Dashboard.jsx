import { Stack, StyledEngineProvider } from "@mui/material";
import ChartGenero from "./ChartGenero";
import ChartAvaliacao from "./ChartAvaliacao";
import SidebarDash from "../sidebar/SidebarDash";
import Style from "./Dashboard.module.css";
import ChartPie from "./ChartPie";

function EleDashbord() {
    return (
        <>
            <div className={Style["container"]}>
                <SidebarDash />
                <div className={Style["card"]}>
                    <div className={Style["title-dash"]}>
                        <h1>Dashboard</h1>
                    </div>
                    <Stack spacing={3}>
                        <Stack spacing={5} direction={'row'}>
                            <div className={Style["kpi1"]}>
                                <Stack>
                                    <h4>Visitas Hoje</h4>
                                    <h1>100</h1>
                                </Stack>
                                <Stack>
                                    <p>total de visitas</p>
                                </Stack>
                            </div>
                            <span className={Style["chart-avaliacao"]}>
                                <ChartAvaliacao />
                            </span>

                        </Stack>
                        <Stack direction={'row'} spacing={3}>
                            <Stack spacing={2}>
                                <Stack spacing={4} direction={'row'} className={Style["kpi2"]}>
                                    <div>
                                        <h1>3</h1>
                                        <p>Denuncias aguardando analise.</p>
                                    </div>
                                    <div>
                                        <h1>70</h1>
                                        <p>Documentos aguardando analise.</p>
                                    </div>
                                </Stack>
                                <span className={Style["chart-genero"]}>
                                    <h2>Faixa etatia dos idosos</h2>
                                    <ChartGenero />
                                </span>
                            </Stack>
                            <Stack >
                                <span className={Style["chart-pie"]}>
                                    <h2>Cuidadores</h2>
                                    <ChartPie />
                                </span>
                            </Stack>
                        </Stack>
                    </Stack>
                </div>
            </div>
        </>
    );
}

export default EleDashbord;