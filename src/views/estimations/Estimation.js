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
import { Button, Stack, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

function createData(sr, name, createdBy, dateTime, recomment, status, actions) {
  return { sr, name, createdBy, dateTime, recomment, status, actions };
}

const rows = [
  createData(1.3, 'Toyota programs estimation V3', 'Ajay', '03-12-2024 / 12:23', 'This is V3', 'Draft'),
  createData(1.2, 'Toyota programs estimation V2', 'Barkha', '02-12-2024 / 10:00', 'This is V2', 'Published'),
  createData(1.1, 'Toyota programs estimation V1', 'Sandip', '01-12-2024 / 14:12', 'This is V1', 'Published')
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
        <Table aria-label="simple table" className="estimation-table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Date / Time </TableCell>
              <TableCell>Revision Comments</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.sr}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.createdBy}</TableCell>
                <TableCell align="right">{row.dateTime}</TableCell>
                <TableCell align="right">{row.recomment}</TableCell>
                <TableCell align="right">
                  <Typography variant="h5" color={row.status === 'Draft' ? 'primary' : 'success.dark'}>
                    {row.status}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      color: 'text.secondary',
                      '& svg': {
                        m: 1
                      }
                    }}
                  >
                    <Link to={'/estimation/v1'}>
                      <VisibilityIcon />
                    </Link>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    {row.status === 'Draft' ? (
                      <>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Link to={'/estimation/v1'}>
                          <EditIcon />
                        </Link>
                      </>
                    ) : (
                      ''
                    )}
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Link to={'/estimation/v1'}>
                      <DeleteIcon />
                    </Link>
                  </Box>
                </TableCell>
                <TableCell align="right">{row.actions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Estimation;
