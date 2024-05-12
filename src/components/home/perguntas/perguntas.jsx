import React from "react";
import Style from "./perguntas.module.css"
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Imagem from "../../../utils/assets/Rectangle-velho.png"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 3,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
  expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1,5rem', color: "white" }} />}
  {...props} 
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(37, 47, 70, 1)'
      : 'rgba(37, 47, 70, 1)',
      flexDirection: 'row-reverse',
      '& .MuiAccordionSummary-content': {
        order: 2, // Mover o conteúdo (texto) para a segunda posição
        marginLeft: theme.spacing(1),
      },
      '& .MuiAccordionSummary-expandIconWrapper': {
        order: 1, // Mover o ícone de expansão para a primeira posição
      },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(37, 47, 70, 1)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={Style["centralizar"]}>
     <div className={Style["pergunta"]}>

        <div className={Style["texto"]}>
            <h1> Perguntas frequentes</h1>
    <div className={Style["menu"]}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{color: "white"}}>Como posso acessar o suporte?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Para entrar em contato com o nosso time de suporte, envie um e-mail para seniorcare@gmail.com ou 
          através da plataforma SpiceWorks pelo link www.spiceworks/seniorcarecaregivers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{color: "white"}}>Como faço para entrar em contato com o cuidador</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A Senior care provêm uma plataforma completa para os clientes, onde esses têm acesso a um chat integrado a aplicação,
           e assim, fazer o próprio contado cuidador-idoso em total segurança..
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{color: "white"}}>Posso me cadastrar e não trabalhar todos os dias?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Os cuidadores que escolhem a Senior Care são dispostos de um calendário semanal,
           onde selecionam os dias e periodos que estão disponiveis para prover cuidados, sendo ele regular ou ocasional. 
           O mesmo se aplica para os responsáveis de idosos.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography sx={{color: "white"}}>Posso cadastrar mais de um idoso?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sim, é possivel! Quando o responsável se cadastra pela primeira vez, 
          ele deve cadastrar no minimo um idoso que precisa da Senior Care, mas não se preocupe, 
          você poderá adicionar outros idosos de sua responsabilidade mais tarde, ao editar o perfil.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
       </div>
       </div>
       <div className={Style["imagem"]}>
       <img src={Imagem} alt=""/>
       </div>
        </div>
   
       
   
  );
}