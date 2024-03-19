import React from "react";
// import Table from "ui-component/Table.js";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import { TableFooter } from "@mui/material";
// import { number } from "prop-types";

export const ClientTable = ({view, rows, deleteRow, editRow,clientDelivery,productRoadmap }) => {

  return (
  
    <TableContainer >
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
           <TableCell sx={{display: view?'none':'table-cell'}}></TableCell>
           <TableCell sx={{minWidth: 140 }}>Feature Name</TableCell>
           <TableCell sx={{minWidth: 340 }}>Description</TableCell>
           <TableCell>Dependency? (Y/N)</TableCell>
           <TableCell>Dependency (Feature Name)</TableCell>
           <TableCell>Phase</TableCell>
           <TableCell>Specific Requirement in RFP? (Y/N)</TableCell>
           <TableCell>Fixed /Custom</TableCell>
           <TableCell>Development Owner</TableCell>
           <TableCell>Product Manager</TableCell>
           <TableCell>Story Points</TableCell>
           <TableCell>Estimate Confidence Score</TableCell>
           <TableCell>Estimated By</TableCell>
           <TableCell>Timeline</TableCell>
           <TableCell sx={{minWidth: 240 }}>URL to ADO Ticket</TableCell>
           <TableCell>In Px F&R sheet?</TableCell>
           <TableCell sx={{minWidth: 240 }}>Comments/Assumptions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => {
           
            return (
              <TableRow key={idx}>
                <TableCell sx={{display: view?'none':'table-cell'}}>
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
                <TableCell>{row.featurename}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.dependency}</TableCell>
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

        <TableFooter>
        <TableRow>
            <TableCell colSpan={9} ></TableCell>
            <TableCell >Total</TableCell>
            <TableCell>{productRoadmap + clientDelivery}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={8} ></TableCell>
            <TableCell colSpan={2} align="center">Product Roadmap</TableCell>
            <TableCell>{productRoadmap}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell colSpan={8} ></TableCell>
            <TableCell colSpan={2} align="center">Client Delivery</TableCell>
            <TableCell>{clientDelivery}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      {/* <Table rows={rows} columns={columns}>

      </Table> */}
    </TableContainer>
  );
};