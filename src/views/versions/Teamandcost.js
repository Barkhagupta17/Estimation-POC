import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Stack, Box } from '@mui/material';



export default function BasicRowEditingGrid() {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Box sx={{ height: 350, width: '100%' }}>
        <h4>Client Customization Cost</h4>
      <DataGrid editMode="row" rows={rows} columns={columns} 
        initialState={{
            aggregation: {
              model: {
                effort: 'sum',
              },
            },
          }}
      />
      </Box>
    </Stack>
    
  );
}

const columns = [
  { field: 'role', headerName: 'Role', width: 180, editable: true },
  {
    field: 'FTE',
    headerName: 'FTE',
    type: 'number',
    editable: true,
    align: 'left',
    headerAlign: 'left',
  },
  {
    field: 'effort',
    headerName: 'Effort',    
    width: 180,
    editable: false,
  },
  {
    field: 'costhrrate',
    headerName: 'Cost Hr Rate',
    width: 180,
    editable: false,
  },
  {
    field: 'cost',
    headerName: 'Cost',
    width: 180,
    editable: false,
  },
  {
    field: 'comments',
    headerName: 'Comments',
    width: 180,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    role: 'Digital Project Manager',
    FTE: 0.5,
    effort: 40,
    costhrrate: '$ ' + 91.00,
    cost: '$ ' + 3640,
    comments: ''
  },

  {
    id: 2,
    role: 'Digital Business Analyst ',
    FTE: 0,
    effort: 0,
    costhrrate: '$ ' + 74.00,
    cost: '$ ' + '-',
    comments: ''
  },

  {
    id: 3,
    role: 'Digital Solution Architect',
    FTE: 0,
    effort: 0,
    costhrrate: '$ ' + 111.00,
    cost: '$ ' + '-',
    comments: ''
  },

  {
    id: 4,
    role: 'Digital Software Engineer-Onsite',
    FTE: 0,
    effort: 0,
    costhrrate: '$ ' + 100.80,
    cost: '$ ' + '-',
    comments: ''
  },

  {
    id: 5,
    role: 'Digital User Experience Architect',
    FTE: 0,
    effort: 0,
    costhrrate: '$ ' + 92.00,
    cost: '$ ' + '-',
    comments: 'Component Library Needed?'
  },

  {
    id: 6,
    role: 'Digital Offshore Developer -Offshore',
    FTE: 2,
    effort: 160,
    costhrrate: '$ ' + 42.21,
    cost: '$ ' + 6750,
    comments: ''
  },

  {
    id: 7,
    role: 'Digital Offshore Quality Analyst - Offshore',
    FTE: 1,
    effort: 80,
    costhrrate: '$ ' + 42.21,
    cost: '$ ' + 3380,
    comments: ''
  },
  
];
