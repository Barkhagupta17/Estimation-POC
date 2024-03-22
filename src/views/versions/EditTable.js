import React from 'react';
import { Table,TableHead, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import EditableTableCell from './component/EditableTableCell';
import {currencyFormatter} from './Constfunctions';

const EditableTable = ({ rows,handleCellChange,totaleffort,totalcost,weeks,view }) => {
  
  return (
    <TableContainer>
      <Table>
        <TableHead>
            <TableRow>
              <TableCell sx={{maxWidth:'330px' ,minWidth:"250px"}}>
                Role
              </TableCell>
              <TableCell sx={{maxWidth:'80px',minWidth:'80px'}}>
                FTE
              </TableCell>
              <TableCell>
                Efforts
              </TableCell>
              <TableCell sx={{minWidth:'100px'}}>
                Cost Hr Rate
              </TableCell>
              <TableCell sx={{minWidth:'100px'}}>
                Cost
              </TableCell>
              <TableCell >
               Comment
              </TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>{row.role}</TableCell>
              <TableCell>
                    <EditableTableCell
                      view={view}
                      value={row.fte}
                      dollarSign="false"
                      type="number"
                      onChange={(newValue) =>
                        handleCellChange(newValue, rowIndex,1)
                      }
                    />
                </TableCell>
              <TableCell>{row.effort}</TableCell>
              <TableCell>
                    <EditableTableCell
                      view={view}
                      type="number"
                      dollarSign="true"
                      value={row.costhrrate}
                      onChange={(newValue) =>
                        handleCellChange(newValue, rowIndex,3)
                      }
                    />
                </TableCell>
              <TableCell>{currencyFormatter(row.cost)}</TableCell>
              <TableCell>
                    <EditableTableCell
                     view={view}
                      type="string"
                      dollarSign="false"
                      value={row.comment}
                      onChange={(newValue) =>
                        handleCellChange(newValue, rowIndex,5)
                      }
                    />
                </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell colSpan={2}>{totaleffort}</TableCell>
            <TableCell colSpan={2}>{currencyFormatter(totalcost)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={6} sx={{borderBottom: "0px solid"}}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}>Week Duration</TableCell>
            <TableCell colSpan={2}>{weeks}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EditableTable;
 
