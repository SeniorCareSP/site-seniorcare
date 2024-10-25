import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const ButtonAzul = styled(Button)({
    color: '#ffffff',
    backgroundColor: '#077DB0',
    borderRadius: '1.2vh',
    fontSize: '1.7vh',
    width: '15vw',
    height: '5.5vh',
    '&:hover': {
        backgroundColor: '#077DB0',
    },
    '&:disabled': {
        backgroundColor: '#a0c4e1', 
        color: '#ffffff',   
        opacity: 0.7, 
        cursor: 'not-allowed', 
    },
});


export default ButtonAzul;