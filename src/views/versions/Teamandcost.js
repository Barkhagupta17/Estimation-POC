import * as React from 'react';
import { useState, useEffect, useMemo, useRef } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Stack, Box, Button } from '@mui/material';
import { randomId } from '@mui/x-data-grid-generator';
import { SumofCoulmn, currencyFormatter } from './Constfunctions';
const columns = [
  { field: 'role', headerName: 'Role', width: 300, editable: true, align: 'left' },
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
    headerAlign: 'left',
    editable: false,
    valueFormatter: (params) => {
      if (!params.value) {
        return params.value;
      }
      return currencyFormatter.format(params.value);
    }
  },
  {
    field: 'costhrrate',
    headerName: 'Cost Hr Rate',
    type: 'number',
    align: 'left',
    headerAlign: 'left',
    editable: false,
    valueFormatter: (params) => {
      if (!params.value) {
        return params.value;
      }
      return currencyFormatter.format(params.value);
    }
  },
  {
    field: 'cost',
    headerName: 'Cost',
    type: 'number',
    align: 'left',
    headerAlign: 'left',
    editable: false,
    valueGetter: (params) => params.row.FTE + params.row.effort,

    valueFormatter: (params) => {
      if (!params.value) {
        return params.value;
      }
      return currencyFormatter.format(params.value);
    }
  },
  {
    field: 'comments',
    headerName: 'Comments',
    width: 180,
    align: 'left',
    headerAlign: 'left',
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
    // cost: 3640,
    comments: ''
  },

  {
    id: 2,
    role: 'Digital Business Analyst ',
    FTE: 0,
    effort: 2,
    costhrrate: 74.0,
    // cost: 0,
    comments: ''
  },

  {
    id: 3,
    role: 'Digital Solution Architect',
    FTE: 0,
    effort: 0,
    costhrrate: 111.0,
    // cost: 0,
    comments: ''
  },

  {
    id: 4,
    role: 'Digital Software Engineer-Onsite',
    FTE: 0,
    effort: 0,
    costhrrate: 100.8,
    // cost: 0,
    comments: ''
  },

  {
    id: 5,
    role: 'Digital User Experience Architect',
    FTE: 0,
    effort: 10,
    costhrrate: 92.0,
    // cost: 0,
    comments: 'Component Library Needed?'
  },

  {
    id: 6,
    role: 'Digital Offshore Developer -Offshore',
    FTE: 2,
    effort: 160,
    costhrrate: 42.21,
    // cost: 6750,
    comments: ''
  },

  {
    id: 7,
    role: 'Digital Offshore Quality Analyst - Offshore',
    FTE: 1,
    effort: 80,
    costhrrate: 42.21,
    // cost: 3380,
    comments: ''
  }
];

// const columns = [
//   {
//     field: 'Col1',
//     headerName: 'Col1',
//     flex: 1.0,
//     disableClickEventBubbling: true,
//     sortable: false,
//     disableColumnMenu: true
//   },
//   {
//     field: 'Col2',
//     headerName: 'Col2',
//     flex: 1.0,
//     disableClickEventBubbling: true,
//     sortable: false,
//     disableColumnMenu: true,
//     renderCell: (params) => {
//       return (
//         <TextField
//           type="date"
//           defaultValue=""
//           InputLabelProps={{ shrink: true }}
//           onChange={(e) => params.api.updateRows([{ ...params.row, Col2: e.target.value }])}
//         />
//       );
//     }
//   },
//   {
//     field: 'Col3',
//     headerName: 'Col3',
//     flex: 1.0,
//     disableClickEventBubbling: true,
//     sortable: false,
//     disableColumnMenu: true,
//     renderCell: (params) => <TextField onChange={(e) => params.api.updateRows([{ ...params.row, Col3: e.target.value }])} />
//   }
// ];

// const rows = [
//   { id: 1, Col1: 'col1 data', Col2: null, Col3: null },
//   { id: 2, Col1: 'col2 data', Col2: null, Col3: null },
//   { id: 3, Col1: 'col3 data', Col2: null, Col3: null }
// ];

function useApiRef() {
  const apiRef = useRef(null);
  const _columns = useMemo(
    () =>
      columns.concat({
        // field: '__HIDDEN__',
        width: 0,
        renderCell: (params) => {
          apiRef.current = params.api;
          return null;
        }
      }),
    [columns]
  );

  return { apiRef, columns: _columns };
}
export default function Teamandcost() {
  const { apiRef, columns } = useApiRef();
  const handleClickButton = () => {
    console.log(apiRef.current.getRowModels());
  };
  const column = React.useMemo(() => columns.map((col) => (col.field ? { ...col, sortable: false } : col)), [columns]);
  const [row, setRows] = useState(rows);

  const newrow = {
    id: randomId(),
    role: 'Total',
    FTE: '',
    effort: SumofCoulmn(row, 'effort'),
    costhrrate: '',
    cost: SumofCoulmn(row, 'cost')
  };

  useEffect(() => {
    setRows([...row, newrow]);
  }, []);

  return (
    <Stack spacing={2} sx={{ width: '100%' }} style={{ height: '100%' }}>
      <Box sx={{ height: 'auto', width: '100%' }}>
        <h4>Client Customization Cost</h4>
        <DataGrid disableColumnMenu hideFooter editMode="row" rows={row} columns={column} style={{ marginBottom: '20px' }} />

        <Button size="1.3rem" type="button" variant="contained" color="secondary" onClick={handleClickButton}>
          Save
        </Button>
      </Box>
    </Stack>
  );
}
