import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';


export const currencyFormatter = (numberString) => {

  let number = parseFloat(numberString.toFixed(2));
  return "$ " + number.toLocaleString('USD');
};

export const precentageFormatter = (number) => {
  return number + '%';
};

export const SumofCoulmn = (data, field) => {
  var sum = 0;
  data.forEach((item) => {
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

export const formatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear(),
    hour = '' + d.getHours(),
    minute = '' + d.getMinutes();

  if (month.length < 2)
    month = '0' + month;
  
  if (day.length < 2)
    day = '0' + day;

  if (hour.length < 2)
    hour = '0' + hour;

  if (minute.length < 2)
    minute = '0' + minute;

  return [month, day, year].join('-') + '/' + [hour, minute].join(':');
}

export const lengthOfObject = (obj) =>{
  var size = Object.keys(obj).length;
  return size;
}