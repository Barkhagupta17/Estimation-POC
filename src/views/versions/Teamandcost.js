import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Stack, Box, Button, Typography, Grid } from '@mui/material';

export default function BasicRowEditingGrid() {
  const column = React.useMemo(() => columns.map((col) => (col.field ? { ...col, sortable: false } : col)), [columns]);
  return (
    <Stack spacing={2} sx={{ width: '100%' }} style={{ height: 750 }}>
      <Box sx={{ height: 450, width: '100%' }}>
        <h4>Client Customization Cost</h4>
        <DataGrid
          disableColumnMenu
          hideFooter
          editMode="row"
          rows={rows}
          columns={column}
          style={{ marginBottom: '20px' }}
          initialState={{
            aggregation: {
              model: {
                effort: 'sum'
              }
            }
          }}
        />
        <Grid container spacing={2} style={{ marginBottom: '20px' }}>
          <Grid item xs={5}>
            <Typography variant="h4" color="">
              Total
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h4" color="">
              {`${getCostHrRateTotal()}`}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h4" color="">
              {` ${getCostTotal()}`}
            </Typography>
          </Grid>
        </Grid>
        <Button size="1.3rem" type="button" variant="contained" color="secondary">
          Save
        </Button>
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
    headerAlign: 'left'
  },
  {
    field: 'effort',
    headerName: 'Effort',
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
  },
  {
    field: 'comments',
    headerName: 'Comments',
    width: 180,
    editable: true
  }
];

const rows = [
  {
    id: 1,
    role: 'Digital Project Manager',
    FTE: 0.5,
    effort: 40,
    costhrrate: '$ ' + 91.0,
    cost: '$ ' + 3640,
    comments: ''
  },

  {
    id: 2,
    role: 'Digital Business Analyst ',
    FTE: 0,
    effort: 0,
    costhrrate: '$ ' + 74.0,
    cost: '',
    comments: ''
  },

  {
    id: 3,
    role: 'Digital Solution Architect',
    FTE: 0,
    effort: 0,
    costhrrate: '$ ' + 111.0,
    cost: '',
    comments: ''
  },

  {
    id: 4,
    role: 'Digital Software Engineer-Onsite',
    FTE: 0,
    effort: 0,
    costhrrate: '$ ' + 100.8,
    cost: '',
    comments: ''
  },

  {
    id: 5,
    role: 'Digital User Experience Architect',
    FTE: 0,
    effort: 0,
    costhrrate: '$ ' + 92.0,
    cost: '',
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
  }
];
const getCostTotal = () => {
  return rows.reduce((total, value) => total + Number(String(value.cost).replace('$ ', '')), 0);
};
const getCostHrRateTotal = () => {
  return rows.reduce((total, value) => total + Number(String(value.costhrrate).replace('$ ', '')), 0);
};
