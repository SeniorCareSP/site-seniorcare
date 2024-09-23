import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const BtnBrancoS = styled(Button)({
    color: '#077DB0',
    border: 'solid',
    borderBlockColor: 'gray',
    backgroundColor: '#FFFFFF',
    borderWidth: 1 ,
    borderRadius: '1.2vh',
    fontSize: '1.5vh',
    width: '8vw',
    height: '4.5vh',
    '&:hover': {
        backgroundColor: '#FFFFFF',
    },
});

export default BtnBrancoS;