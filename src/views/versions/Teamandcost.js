import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Stack, Box, Button} from '@mui/material';
import { randomId } from '@mui/x-data-grid-generator';
import {SumofCoulmn, currencyFormatter } from './Constfunctions';

export default function Teamandcost() {
  const column = React.useMemo(() => columns.map((col) => (col.field ? { ...col, sortable: false } : col)), [columns]);
  const [row, setRows] = useState(rows);

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
  },[]);
  
  return (
    <Stack spacing={2} sx={{ width: '100%' }} style={{ height: '100%' }}>
      <Box sx={{ height: 'auto', width: '100%' }}>
        <h4>Client Customization Cost</h4>
        <DataGrid
          disableColumnMenu
          hideFooter
          editMode="row"
          rows={row}
          columns={column}
          style={{ marginBottom: '20px' }}
         
        />
        
        <Button size="1.3rem" type="button" variant="contained" color="secondary">
          Save
        </Button>
      </Box>
    </Stack>
  );
}
const columns = [
  { field: 'role', headerName: 'Role', width: 300, editable: true, align: 'left', },
  {
    field: 'FTE',
    headerName: 'FTE',
    type: 'number',
    editable: true,
    align: 'left',
    headerAlign: 'left'
  },
  {
    field: 'effort',
    headerName: 'Effort',
    type: 'number',
    align: 'left',
    editable: false,
    valueFormatter: ( params ) => {
      if (!params.value) {
        return params.value;
      }
      return currencyFormatter.format(params.value);
    },
  },
  {
    field: 'costhrrate',
    headerName: 'Cost Hr Rate',
    type: 'number',
    align: 'left',
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
    headerName: 'Cost',
    type: 'number',
    align: 'left',
    editable: false,
    valueFormatter: ( params ) => {
      if (!params.value) {
        return params.value;
      }
      return currencyFormatter.format(params.value);
    },
  },
  {
    field: 'comments',
    headerName: 'Comments',
    width: 180,
    align: 'left',
    editable: true
  }
];

const rows = [
  {
    id: 1,
    role: 'Digital Project Manager',
    FTE: 0.5,
    effort: 40,
    costhrrate: 91.0,
    cost: 3640,
    comments: ''
  },

  {
    id: 2,
    role: 'Digital Business Analyst ',
    FTE: 0,
    effort: 0,
    costhrrate: 74.0,
    cost: 0,
    comments: ''
  },

  {
    id: 3,
    role: 'Digital Solution Architect',
    FTE: 0,
    effort: 0,
    costhrrate: 111.0,
    cost: 0,
    comments: ''
  },

  {
    id: 4,
    role: 'Digital Software Engineer-Onsite',
    FTE: 0,
    effort: 0,
    costhrrate: 100.8,
    cost: 0,
    comments: ''
  },

  {
    id: 5,
    role: 'Digital User Experience Architect',
    FTE: 0,
    effort: 0,
    costhrrate: 92.0,
    cost: 0,
    comments: 'Component Library Needed?'
  },

  {
    id: 6,
    role: 'Digital Offshore Developer -Offshore',
    FTE: 2,
    effort: 160,
    costhrrate: 42.21,
    cost: 6750,
    comments: ''
  },

  {
    id: 7,
    role: 'Digital Offshore Quality Analyst - Offshore',
    FTE: 1,
    effort: 80,
    costhrrate: 42.21,
    cost: 3380,
    comments: ''
  }
];

