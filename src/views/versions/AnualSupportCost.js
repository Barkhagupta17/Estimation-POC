import React, { useEffect, useState } from 'react'
import {InputLabel,Stack, Select, FormControl, MenuItem, Box, Button, Grid } from '@mui/material'
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';

import { DataGrid } from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  // padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const SumofCoulmn = (data, field) =>{
  var sum = 0;
  data.forEach((item)=>{
    sum += item[field];
  })

  return sum;
  
}

const rows = [
  {
    id: 1,
    role: 'Digital Project Manager',
    FTE: 0.08,
    effort: 166.4,
    costhrrate: 91.0,
    cost: 15142,
  },

  {
    id: 2,
    role: 'Digital Business Analyst ',
    FTE: 0,
    effort: 0,
    costhrrate: 74.0,
    cost: 0,
  },

  {
    id: 4,
    role: 'Digital Software Engineer-Onsite',
    FTE: 0.08,
    effort: 166.4,
    costhrrate: 100.80,
    cost: 16773,
  },

  {
    id: 5,
    role: 'Digital User Experience Architect',
    FTE: 0,
    effort: 0,
    costhrrate: 92.00,
    cost: 0,
  },

  {
    id: 6,
    role: 'Digital Offshore Developer -Offshore',
    FTE: 0.1,
    effort: 208,
    costhrrate: 42.21,
    cost: 8780,
  },

  {
    id: 7,
    role: 'Digital Offshore Quality Analyst - Offshore',
    FTE: 0.05,
    effort: 104,
    costhrrate: 42.10,
    cost: 4378,

  },

  
];


const AnualSupportCost = () => {
  const column = React.useMemo(() => columns.map((col) => (col.field ? { ...col, sortable: false } : col)), [columns]);
  const [type, setType] = useState('MT');
  const [row, setRows] = useState(rows);
  
  // const [newrows, setNewrows] = useState([]);

  const items = ['MT', 'X-small', 'Small', 'Medium', 'Large', 'X-large']


  
  const newrow = {
    id: randomId(),
    role: 'Total',
    FTE: '',
    effort: SumofCoulmn(row, 'effort'),
    costhrrate: '',
    cost: SumofCoulmn(row, 'cost'),
    
  }

useEffect(()=>{
  setRows([...row, newrow]);
},[type]);



const handleTypeChange = (e) =>{
  e.preventDefault();
  const lastele = row[Object.keys(row)[Object.keys(row).length - 1]].id
  console.log(lastele)
  
//  const newTotal= row.map(item => (
//    item.id === lastele ? {...item, item : {}} : item
//  ))
const newTotal = row.filter((item) => item.id !== lastele);

 setRows(newTotal);
 setType(e.target.value);
 
  

}
  
  return (
    <Box
      noValidate
      component="form"
      sx={{
        width: '100%'

      }}
    >
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid xs={3}>
          <Item><h4>Implementation Type</h4></Item>
        </Grid>
        <Grid xs={3}>
          <Item>
            <FormControl variant="filled" sx={{ minWidth: '100%' }} >
            <InputLabel id="demo-simple-select-filled-label">Implementation Type</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={type}
                onChange={handleTypeChange}


              >
                {items.map((item, index) => {
                  return (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>)
                })}

              </Select>


            </FormControl>
          </Item>
        </Grid>

        

      </Grid>
      <Stack spacing={2} sx={{ width: '100%', mt:2 }} style={{ height: '100%' }}>
          <Box sx={{ height: 'auto', width: '100%' }}>
            <DataGrid
              disableColumnMenu
              hideFooter
              
              rows={row}
              columns={column}
              style={{ marginBottom: '20px' }}
              
            />
            <Button size="1.3rem" type="button" variant="contained" color="secondary">
              Save
            </Button>
          </Box>
        </Stack>




    </Box>

  )
}

export default AnualSupportCost;


const columns = [
  { field: 'role', headerName: 'Role', width: 300, editable: false,align: 'left',
  headerAlign: 'left' },
  {
    field: 'FTE',
    headerName: 'FTE%',
    type: 'number',
    editable: false,
    align: 'left',
    headerAlign: 'left'
  },
  {
    field: 'effort',
    headerName: 'Hrs',
    align: 'left',
    headerAlign: 'left',
    editable: false,
  },
  {
    field: 'costhrrate',
    headerName: 'Cost Hr Rate',
    type: 'number',
    align: 'left',
    width: 130,
    headerAlign: 'left',
    editable: false,
    valueFormatter: ( params ) => {
      if (!params.value) {
        return params.value;
      }
      return currencyFormatter.format(params.value);
    },
  },
  {
    field: 'cost',
    type: 'number',
    headerName: 'Cost',
    align: 'left',
    headerAlign: 'left',
    editable: false,
    
    valueFormatter: ( params ) => {
      if (!params.value) {
        return '$';
      }
      return currencyFormatter.format(params.value);
    },
  }
];






