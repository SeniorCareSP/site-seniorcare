import { styled } from '@mui/material/styles';
// import { InputLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SelectSimple = styled(Select)({
    borderColor: "red",
    width: "20vw",
    borderWidth: 10 ,
    

    // '& label.Mui-focused': {
    //     color: '#077DB0',

    // }, '& .MuiInput-underline:after': {
    //     borderBottomColor: '#B2BAC2',

    // }, '& .MuiOutlinedInput-root': {
    //     '& fieldset': {
    //         borderColor: '#077DB0',
    //         borderWidth: 2,
    //         borderRadius: '1.5vh',

    //     }, '&:hover fieldset': {
    //         borderColor: '#077DB0',

    //     },
    //     '&.Mui-focused fieldset': {
    //         borderColor: '#077DB0',
    //     }

    // }
});


export default SelectSimple;