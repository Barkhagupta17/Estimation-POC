import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Stack, Box } from '@mui/material';



export default function Table({rows, columns}) {
  const column = React.useMemo(
    () =>
      columns.map((col) =>
        col.field  ? { ...col, sortable: false } : col,
      ),
    [columns],
  );
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Box sx={{ height: 350, width: '100%' }}>
       
      <DataGrid disableColumnMenu
        hideFooter
        rows={rows} columns={column} 
        
      />
      </Box>
    </Stack>
    
  );
}

