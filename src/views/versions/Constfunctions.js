import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';


export const currencyFormatter = (numberString) => {
    let number = parseFloat(numberString.toFixed(2));
    return "$ " + number.toLocaleString('USD');
};
  
export const SumofCoulmn = (data, field) =>{
    var sum = 0;
    data.forEach((item)=>{
      sum += item[field];
    })
  
    return sum;
    
  }

  export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));