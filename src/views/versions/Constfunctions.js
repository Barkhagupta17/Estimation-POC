import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';


export const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
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