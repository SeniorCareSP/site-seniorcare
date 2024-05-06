import Style from '../../pages/adimin/Adimin.module.css'
import { Stack } from "@mui/material"
import iconusu from '../../utils/assets/usericon.png'
import dashicon from '../../utils/assets/graphicon.png'
import configicon from '../../utils/assets/settingsicon.png'
import docicon from '../../utils/assets/docsicon.png'
import importanticon from '../../utils/assets/importanticon.png'
import logouticon from '../../utils/assets/Logout.png'
import logo from '../../utils/assets/logo.png'
import logoazul from '../../utils/assets/Logo-azul.png'
function SidebarDash(){
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
                        <img src={logouticon} alt="" width={50}/>
                    </Stack>
                </Stack>
            </div>
        </div>
        </>
    )
}

export default SidebarDash;