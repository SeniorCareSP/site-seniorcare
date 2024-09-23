import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const ButtonAzulEscuro = styled(Button)({
    color: '#ffffff',
    backgroundColor: '#252F46',
    // borderRadius: '1.2vh',
    fontSize: '1.7vh',
    width: '15vw',
    height: '5.5vh',
    '&:hover': {
        backgroundColor: '#252F46',
    },
});


export default ButtonAzulEscuro;