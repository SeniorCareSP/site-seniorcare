import { Stack } from "@mui/material";
import ChartAvaliacao from "./ChartAvaliacao";
import SidebarDash from "../sidebar/SidebarDash";

function EleDashbord() {
    return (
        <>
            <div>
                <SidebarDash />
                <Stack>
                    <div>

                    </div>
                    <div>
                        <ChartAvaliacao />
                    </div>
                </Stack>
                <Stack>
                    <Stack>
                        <div>
                            <h1>

                            </h1>
                            <h4>

                            </h4>
                        </div>
                        <div>
                            <h1>

                            </h1>
                            <h4>

                            </h4>
                        </div>
                    </Stack>
                    <div>

                    </div>
                </Stack>
            </div>
        </>
    );
}

export default EleDashbord;