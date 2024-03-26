import React, { useEffect, useState } from 'react';
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
import { FormControl, TextField, Dialog, DialogActions, DialogTitle, DialogContent } from '@mui/material';
import { formatDate, lengthOfObject } from 'views/versions/tabs/Constfunctions';


const data = [
  // { id :1, sr: 1.3,name: 'Toyota programs estimation V3', createdBy:'Ajay', dateTime:'03-12-2024 / 12:23', recomment:'This is V3', status:'Draft'},
  { id :1, sr: 1.2, name: 'Toyota programs estimation V2', createdBy: 'Barkha', dateTime: '02-12-2024 / 10:00', recomment: 'This is V2', status: 'Published' },
  { id :2, sr: 1.1, name: 'Toyota programs estimation V1', createdBy: 'Sandip', dateTime: '01-12-2024 / 14:12', recomment: 'This is V1', status: 'Published' }
];

const Estimation = () => {
  const [rows, setRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [versionName, setVersionName] = useState('');
  const [comment, setComment] = useState('');
  const [versionError, setVersionError] = useState(false);


  const handleVersionChange = (e) => {
    setVersionName(e.target.value);
  }

  const handleCreateVersion = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const Id = lengthOfObject(rows) + 1;
    setRows([{id: Id, sr: parseFloat('1.' + Id), name: versionName, createdBy: 'Barkha', dateTime: formatDate(currentDate), recomment: comment, status: 'Draft' }, ...rows])
    setOpenModal(false);
  }

  const handleDeleteVersion = (idk) =>{

    const updatedRow = rows.filter(r => r.id !== idk);
    setRows(updatedRow);
  }

  const handleCloseModal = () => {
    setVersionName('');
    setOpenModal(false);
    setVersionError(false);
    setComment('');
   }

  const disbleVersionBtn = () => {
    var result = false;
    rows.forEach(item => {
      if (item.status === 'Draft') {
        result = true
      }
    }
    )

    return result;

  }

  useEffect(() => {
    setRows([...data]);
  }, []);

  return (
    <Card sx={{ p: 2 }}>
      <Stack direction="row" alignItems="center" justifyContent="right" spacing={1} sx={{ mb: 2 }}>
        <Button size="1.3rem" type="button" variant="contained" color="secondary" onClick={()=>setOpenModal(true)} disabled={disbleVersionBtn()}>
          Create Version
        </Button>
      </Stack>

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        PaperProps={{
          component: 'form',
          onSubmit: handleCreateVersion,
        }}
      >
        <DialogTitle sx={{ fontSize: '1.5rem' }}>Create New Version</DialogTitle>
        <DialogContent>


          <Box
            noValidate
            component="form"
            sx={{
              width: 400

            }}
          >

            <FormControl variant="filled" sx={{ mt: 1, minWidth: '100%' }}>

              <TextField
                error={versionError}
                id="filled-error-helper-text"
                label="Version Name"
                variant="filled"
                sx={{ mt: 1 }}
                onChange={handleVersionChange}
                onBlur={(e) => {
                  if (e.target.value === '') {
                    setVersionError(true);
                  }
                }}

              />
              
              <TextField
                id="filled-error-helper-text"
                label="Comments"
                variant="filled"
                sx={{ mt: 3 }}
                onChange={(e)=>setComment(e.target.value)}

              />             
            </FormControl>
          </Box>



        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button type="submit" color="secondary" disabled={versionName === ''}>Add</Button>
        </DialogActions>
      </Dialog>

      <TableContainer>
        <Table aria-label="simple table" className="estimation-table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Created By</TableCell>
              <TableCell>Created Date / Time </TableCell>
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
                      },
                      cursor:'pointer'
                    }}
                  >
                    <Link to={'/estimation/v1/view'}>
                      <VisibilityIcon />
                    </Link>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    {row.status === 'Draft' ? (
                      <>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Link to={'/estimation/v1/edit'}>
                          <EditIcon />
                        </Link>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        
                        <DeleteIcon  onClick={()=>handleDeleteVersion(row.id)}/>
                        
                      </>
                    ) : (
                      ''
                    )}
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
