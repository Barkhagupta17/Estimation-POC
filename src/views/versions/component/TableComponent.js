import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';


export const TableComponent = ({ rows,columns, deleteRow, editRow }) => {
   return (
  
    <TableContainer >
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            {columns.map((col,idx)=>{
              return(
              
                 <TableCell key={idx} >{col}</TableCell>);
            })}
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => {
           
            return (
              <TableRow key={idx}>
                <TableCell>
                <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'text.secondary',
                      }}
                  >
                    <EditIcon onClick={() => editRow(idx)}/>
                    <DeleteIcon onClick={() => deleteRow(idx)}/>                    
                  </Box>
                </TableCell>
               
                <TableCell>{columns[1]==='Assumption'?row.assumption:row.question}</TableCell>
                <TableCell>{row.addedBy}</TableCell>
                <TableCell >{row.addedOn}</TableCell>
                             
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      
    </TableContainer>
  );
};