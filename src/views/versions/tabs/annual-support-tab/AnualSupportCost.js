import React, { useEffect, useState } from 'react'
import { InputLabel, Stack, Select, FormControl, MenuItem, Box, Button, Grid, } from '@mui/material'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Item } from '../Constfunctions';
import { SumofCoulmn, currencyFormatter} from '../Constfunctions';
import '../../style/tablestyle.css';



const AnualSupportCost = ({view}) => {

  const [type, setType] = useState('MT');
  const [row, setRows] = useState([]);
  const [column, setColumn] = useState([]);

  const items = ['MT', 'X-small', 'Small', 'Medium', 'Large', 'X-large']





  useEffect(() => {
    setRows([...rows]);
    setColumn([...columns]);
  }, [type]);


  const handleTypeChange = (e) => {
    e.preventDefault();
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
            <FormControl disabled={view} variant="filled" sx={{ minWidth: '100%' }} >
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
      <Stack spacing={2} sx={{ width: '100%', mt: 2 }} style={{ height: '100%' }}>
        <Box sx={{ height: 'auto', width: '100%' }}>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {column.map((col, index) => {
                    return (
                      <TableCell key={index} sx={{minWidth:'80px'}}>{col.field}</TableCell>
                    )
                  })}


                </TableRow>

              </TableHead>
              <TableBody>

                {row.map((r, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{r.role}</TableCell>
                      <TableCell>{r.FTE}</TableCell>
                      <TableCell>{r.effort}</TableCell>
                      <TableCell>{currencyFormatter(r.costhrrate)}</TableCell>
                      <TableCell>{currencyFormatter(r.cost)}</TableCell>
                      <TableCell>{currencyFormatter(r.cost/12)}</TableCell>
                    </TableRow>
                  )
                })}

                <TableRow className='row-total'>
                  <TableCell>Total</TableCell>
                  <TableCell></TableCell>
                  <TableCell>{SumofCoulmn(row, 'effort')}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>{currencyFormatter(SumofCoulmn(row, 'cost'))}</TableCell>
                  <TableCell>{currencyFormatter(SumofCoulmn(row, 'cost')/12)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>


          <Button size="1.3rem" type="button" variant="contained" color="secondary" sx={{marginTop:'10px',visibility: view?'hidden':'visible'}}>
            Save
          </Button>
        </Box>
      </Stack>




    </Box>

  )
}

export default AnualSupportCost;

const rows = [
  {

    role: 'Digital Project Manager',
    FTE: 0.08,
    effort: 166.4,
    costhrrate: 91.0,
    cost: 15142,
  },

  {

    role: 'Digital Business Analyst ',
    FTE: 0,
    effort: 0,
    costhrrate: 74.0,
    cost: 0,
  },

  {

    role: 'Digital Software Engineer-Onsite',
    FTE: 0.08,
    effort: 166.4,
    costhrrate: 100.80,
    cost: 16773,
  },

  {

    role: 'Digital User Experience Architect',
    FTE: 0,
    effort: 0,
    costhrrate: 92.00,
    cost: 0,
  },

  {

    role: 'Digital Offshore Developer -Offshore',
    FTE: 0.1,
    effort: 208,
    costhrrate: 42.21,
    cost: 8780,
  },

  {

    role: 'Digital Offshore Quality Analyst - Offshore',
    FTE: 0.05,
    effort: 104,
    costhrrate: 42.10,
    cost: 4378,

  },


];




const columns = [
  {
    field: 'Role',
  },
  {
    field: 'FTE',

  },
  {
    field: 'Effort',

  },
  {

    field: 'Cost Hr Rate',

  },
  {
    field: 'Anual Cost',
    
  },
  {
    field: 'Monthly Cost',
    
  }
];






