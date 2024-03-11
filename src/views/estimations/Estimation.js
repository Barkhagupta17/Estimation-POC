import React from 'react';
import './Estimation.css';

import { Card } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';



function createData(sr, name, date, recomment, view, edit) {
  return { sr, name, date, recomment, view, edit };
}

const rows = [
  createData(1.3, 'Toyota programs estimation V3', '27/02/24', 'This is V3', <Link to={'/estimation/v1'}>View</Link>, <Link to={'/estimation/v1'}>Edit</Link>),
  createData(1.2, 'Toyota programs estimation V2', '15/02/24', 'This is V2', <Link to={'/estimation/v1'}>View</Link>, <Link to={'/estimation/v1'} className='disabled-link'>Edit</Link>),
  createData(1.1, 'Toyota programs estimation V1', '07/02/24', 'This is V1', <Link to={'/estimation/v1'}>View</Link>, <Link to={'/estimation/v1'} className='disabled-link'>Edit</Link>),
];

const Estimation = () => {
  return (
    <Card sx={{ p: 2 }}>
      <Stack direction="row" alignItems="center" justifyContent="right" spacing={1}>
        <Button size="1.3rem" type="button" variant="contained" color="secondary">
          Create Version
        </Button>
      </Stack>

      <TableContainer>
        <Table aria-label="simple table" className='estimation-table'>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Revision Comments</TableCell>
              <TableCell>View</TableCell>
              <TableCell>Edit</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}

              >
                <TableCell component="th" scope="row">
                  {row.sr}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.recomment}</TableCell>
                <TableCell align="right">{row.view}</TableCell>
                <TableCell align="right">{row.edit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default Estimation