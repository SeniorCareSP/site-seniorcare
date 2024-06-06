import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const BtBranco = styled(Button)({
    color: '#252F46',
    border: 'solid',
    borderColor: '#ffffff',
    backgroundColor: '#FFFFFF',
    borderWidth: 1 ,
    borderRadius: '1.2vh',
    fontSize: '1.7vh',
    fontWeight: '120px',
    width: '18vw',
    height: '8vh',
    '&:hover': {
        backgroundColor: '#FFFFFF',
    },
});

export default BtBranco;