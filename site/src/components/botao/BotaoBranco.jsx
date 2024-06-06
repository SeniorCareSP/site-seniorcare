import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const ButtonBranco = styled(Button)({
    color: '#077DB0',
    border: 'solid',
    borderBlockColor: 'gray',
    backgroundColor: '#FFFFFF',
    borderWidth: 1 ,
    borderRadius: '1.2vh',
    fontSize: '1.7vh',
    width: '15vw',
    height: '5.5vh',
    '&:hover': {
        backgroundColor: '#FFFFFF',
    },
});

export default ButtonBranco;