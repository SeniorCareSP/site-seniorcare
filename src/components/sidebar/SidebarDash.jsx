import Style from '../../pages/adimin/Adimin.module.css'
import { Stack } from "@mui/material"
import iconusu from '../../utils/assets/usericon.png'
import dashicon from '../../utils/assets/graphicon.png'
import configicon from '../../utils/assets/settingsicon.png'
import docicon from '../../utils/assets/docsicon.png'
import importanticon from '../../utils/assets/importanticon.png'
import logouticon from '../../utils/assets/Logout.png'
import { useNavigate } from "react-router-dom";

function SidebarDash(){

    const navigate = useNavigate();

    return(
        <>
        <div className={Style["card-sidebar"]}>
            <div className={Style["sidebar"]}>
                <Stack spacing={45}>    
                    <Stack spacing={3}>
                        {/* <img src={logoazul} alt="" width={70}/> */}
                        <img src={iconusu} alt="icone de usuário" width={50}/>
                        <img src={dashicon} alt="" width={50}/>
                        <img src={configicon} alt="" width={50}/>
                        <img src={docicon} alt="" width={50}/>
                        <img src={importanticon} alt="" width={50}/>
                    </Stack>
                    <Stack>
                        {/* Chamar handleLogout ao clicar no ícone de logout */}
                        <img src={logouticon} alt="" width={50} />
                    </Stack>
                </Stack>
            </div>
        </div>
        </>
    )
}

export default SidebarDash;
