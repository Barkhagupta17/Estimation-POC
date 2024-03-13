import React, { useState } from 'react'
import {Stack, Select, FormControl, MenuItem, Box, Button, Grid } from '@mui/material'
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';

import { DataGrid } from '@mui/x-data-grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AnualSupportCost = () => {
  const [type, setType] = useState('MT')

  const items = ['MT', 'X-small', 'Small', 'Medium', 'Large', 'X-large']
  console.log(type)
  return (
    <Box
      noValidate
      component="form"
      sx={{
        width: '100%'

      }}
    >
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid xs={4}>
          <Item><h4>Implementation Type</h4></Item>
        </Grid>
        <Grid xs={2}>
          <Item>
            <FormControl sx={{ minWidth: '100%' }}>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                onChange={(e) => setType(e.target.value)}


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

        <Stack spacing={2} sx={{ width: '100%' }} style={{ height: 400 }}>
          <Box sx={{ height: 350, width: '100%' }}>
            <DataGrid
              disableColumnMenu
              hideFooter
              editMode="row"
              rows={rows}
              columns={columns}
              style={{ marginBottom: '20px' }}
              initialState={{
                aggregation: {
                  model: {
                    effort: 'sum'
                  }
                }
              }}
            />
            <Button size="1.3rem" type="button" variant="contained" color="secondary">
              Save
            </Button>
          </Box>
        </Stack>


      </Grid>




    </Box>

  )
}

export default AnualSupportCost;


const columns = [
  { field: 'role', headerName: 'Role', width: 300, editable: true },
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
    // width: 180,
    editable: false
  },
  {
    field: 'costhrrate',
    headerName: 'Cost Hr Rate',
    // width: 180,
    editable: false
  },
  {
    field: 'cost',
    headerName: 'Cost',
    // width: 180,
    editable: false
  }
];

const rows = [
  {
    id: 1,
    role: 'Digital Project Manager',
    FTE: 0.08,
    effort: 166.4,
    costhrrate: '$ ' + 91.0,
    cost: '$ ' + 15142,
  },

  {
    id: 2,
    role: 'Digital Business Analyst ',
    FTE: 0,
    effort: 0,
    costhrrate: '$ ' + 74.0,
    cost: '$ ' + 0,
  },

  {
    id: 4,
    role: 'Digital Software Engineer-Onsite',
    FTE: 0.08,
    effort: 166.4,
    costhrrate: '$ ' + 100.80,
    cost: '$ ' + 16773,
  },

  {
    id: 5,
    role: 'Digital User Experience Architect',
    FTE: 0,
    effort: 0,
    costhrrate: '$ ' + 92.00,
    cost: '$ ' + 0,
  },

  {
    id: 6,
    role: 'Digital Offshore Developer -Offshore',
    FTE: 0.1,
    effort: 208,
    costhrrate: '$ ' + 42.21,
    cost: '$ ' + 8780,
  },

  {
    id: 7,
    role: 'Digital Offshore Quality Analyst - Offshore',
    FTE: 0.05,
    effort: 104,
    costhrrate: '$ ' + 42.10,
    cost: '$ ' + 4378,

  }
];