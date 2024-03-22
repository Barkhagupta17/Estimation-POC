import React from 'react';
import { Table,TableHead, TableBody, TableCell, TableContainer, TableRow} from '@mui/material';
import EditableTableCell from './component/EditableTableCell';


const EditableTable = ({ rows,handleCellChange,totaleffort,totalcost,weeks }) => {
  
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
              <TableCell>
                Cost Hr Rate
              </TableCell>
              <TableCell>
                Cost
              </TableCell>
              <TableCell sx={{minWidth:'200px'}}>
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
                      value={row.fte}
                      type="number"
                      onChange={(newValue) =>
                        handleCellChange(newValue, rowIndex,1)
                      }
                    />
                </TableCell>
              <TableCell>{row.effort}</TableCell>
              <TableCell>
                    <EditableTableCell
                      type="number"
                      value={row.costhrrate}
                      onChange={(newValue) =>
                        handleCellChange(newValue, rowIndex,3)
                      }
                    />
                </TableCell>
              <TableCell>{row.cost}</TableCell>
              <TableCell>
                    <EditableTableCell
                      type="string"
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
            <TableCell colSpan={2}>{totalcost}</TableCell>
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
 
