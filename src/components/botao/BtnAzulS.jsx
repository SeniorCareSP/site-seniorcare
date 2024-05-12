import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const BtnAzulS = styled(Button)({
    color: '#ffffff',
    backgroundColor: '#077DB0',
    borderRadius: '1.2vh',
    fontSize: '1.5vh',
    width: '8vw',
    height: '4.5vh',
    '&:hover': {
        backgroundColor: '#077DB0',
    },
});

export default BtnAzulS;