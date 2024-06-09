import SidebarDash from '../sidebar/SidebarDash';
import Style from './newsletter.module.css';
import ButtonAzul from '../botao/BotaoAzul';
import ButtonBranco from '../botao/BotaoBranco';
import notificationIcon from '../../utils/assets/Alarm.png'
import InputTexfield from '../Input/Input';
import { useNavigate } from 'react-router-dom';

function NewsletterComponente() {
    const navigate = useNavigate();
    return (
        <div className={Style.container}>
            <SidebarDash />
            <div className={Style.content}>
                <div className={Style.notification}>
                    <img src={notificationIcon} alt="Notificações" className={Style.notificationIcon} />
                    <span className={Style.notificationBadge}>5</span> {/* Esse valor pode ser dinâmico */}
                </div>
                <h1 className={Style.title}>Newsletter</h1>
                <div className={Style.formGroup}>
                <div className={Style.spacing}>
          <InputTexfield label="Titulo" sx={{ width: "100vh",}} />
        </div>
                </div>
                <div className={Style.formGroup}>
                <div className={Style.spacing}>
                <InputTexfield label="Mensagem" sx={{ width: "100vh",}} />
                </div>
                </div>
                <div className={Style.buttonGroup}>
                <div className={Style.spacing}>
                <ButtonAzul onClick={() => navigate('/admin/dashboard')}>Salvar</ButtonAzul>
                </div>
                <div className={Style.spacing}>
                <ButtonBranco onClick={() => navigate('/admin/dashboard')}>Cancelar</ButtonBranco>
                </div>
                </div>
            </div>
        </div>
    );
}

export default NewsletterComponente;
