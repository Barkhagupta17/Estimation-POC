import React from "react";
// import Table from "ui-component/Table.js";
// import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import { number } from "prop-types";

export const ClientTable = ({ rows, deleteRow, editRow }) => {
  // const columns=[
  //   {
  //     field: 'actions',
  //     type: 'actions',
  //     headerName: '',
  //     width: 50,
  //     cellClassName: 'actions',
  //     getActions: ({id}) => {
                   
  //         return [
  //           <span className="actions" key={id}>
  //           <EditIcon
  //              onClick={() => editRow(id)}
  //           />
  //           <DeleteIcon
  //             onClick={() => deleteRow(id)}
  //           />                    
  //         </span>
  //         ];
  //     },
  // },
  //     { field: 'featurename', 
  //     headerName: 'Feature Name',
  //     },
  //     {
  //       field: 'description',
  //       headerName: 'Description',
          
  //       align: 'left',
  //       headerAlign: 'left',
  //     },
  //     {
  //       field: 'dependency',
  //       headerName: 'Dependency? (Y/N)',    
  //       editable: false,
  //     },
  //     {
  //       field: 'dependencyfeaturename',
  //       headerName: 'Dependency (Feature Name)',
      
  //     },
  //     { field: 'phase', 
  //     headerName: 'Phase',
  //     },
  //     { field: 'specificrequirement', 
  //     headerName: 'Specific Requirement in RFP? (Y/N)',
  //     },
  //     { field: 'fixedcustom', 
  //     headerName: 'Fixed /Custom',
  //     },
  //     { field: 'developmentowner', 
  //     headerName: 'Development Owner',
  //     },
  //     { field: 'productmanager', 
  //     headerName: 'Product Manager',
  //     },
  //     { field: 'storypoints', 
  //     headerName: 'Story Points',
  //     type: number,
  //     },
  //     { field: 'estimateconfidencescore', 
  //     headerName: 'Estimate Confidence Score',
  //     },
  //     { field: 'estimatedby', 
  //     headerName: 'Estimated By',
  //     },
  //     { field: 'timeline', 
  //     headerName: 'Timeline',
  //     },
  //     { field: 'urltoADOTicket', 
  //     headerName: 'URL to ADO Ticket',
  //     },
  //     { field: 'inPxFRsheet', 
  //     headerName: 'In Px F&R sheet?',
  //     },
  //     { field: 'commentsassumptions', 
  //     headerName: 'Comments/Assumptions',
  //     },
    
  // ]
  return (
  
    <TableContainer >
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
           <TableCell ></TableCell>
           <TableCell align="center" sx={{minWidth: 140 }}>Feature Name</TableCell>
           <TableCell align="center" sx={{minWidth: 340 }}>Description</TableCell>
           <TableCell align="center">Dependency? (Y/N)</TableCell>
           <TableCell align="center">Dependency (Feature Name)</TableCell>
           <TableCell align="center">Phase</TableCell>
           <TableCell align="center">Specific Requirement in RFP? (Y/N)</TableCell>
           <TableCell align="center">Fixed /Custom</TableCell>
           <TableCell align="center">Development Owner</TableCell>
           <TableCell align="center">Product Manager</TableCell>
           <TableCell align="center">Story Points</TableCell>
           <TableCell align="center">Estimate Confidence Score</TableCell>
           <TableCell align="center">Estimated By</TableCell>
           <TableCell align="center">Timeline</TableCell>
           <TableCell align="center" sx={{minWidth: 240 }}>URL to ADO Ticket</TableCell>
           <TableCell align="center">In Px F&R sheet?</TableCell>
           <TableCell align="center" sx={{minWidth: 240 }}>Comments/Assumptions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => {
           
            return (
              <TableRow key={idx}>
                <TableCell className="fit">
                  <span className="actions">
                    <EditIcon
                        className="edit-btn"
                        onClick={() => editRow(idx)}
                    />
                    <DeleteIcon
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />                    
                  </span>
                </TableCell>
                <TableCell>{row.featurename}</TableCell>
                <TableCell className="expand">{row.description}</TableCell>
                <TableCell>
                  <span>
                    {row.dependency}
                  </span>
                </TableCell>
                <TableCell >{row.dependencyfeaturename}</TableCell>
                <TableCell >{row.phase}</TableCell>
                <TableCell>{row.specificrequirement}</TableCell>
                <TableCell>{row.fixedcustom}</TableCell>
                <TableCell>{row.developmentowner}</TableCell>
                <TableCell>{row.productmanager}</TableCell>
                <TableCell>{row.storypoints}</TableCell>
                <TableCell>{row.estimateconfidencescore}</TableCell>
                <TableCell>{row.estimatedby}</TableCell>
                <TableCell>{row.timeline}</TableCell>
                <TableCell>{row.urltoADOTicket}</TableCell>
                <TableCell>{row.inPxFRsheet}</TableCell>
                <TableCell>{row.commentsassumptions}</TableCell>
              
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {/* <Table rows={rows} columns={columns}>

      </Table> */}
    </TableContainer>
  );
};