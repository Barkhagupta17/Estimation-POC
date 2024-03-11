import React from "react";
// import Table from "ui-component/Table.js";
// import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import "./Clienttable.css";
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
  
    <div className="clienttable-wrapper">
      <table className="clienttable">
        <thead>
          <tr>
            <th></th>
            <th>Feature Name</th>
            <th className="expand">Description</th>
            <th>Dependency? (Y/N)</th>
            <th>Dependency (Feature Name)</th>
            <th>Phase</th>
            <th>Specific Requirement in RFP? (Y/N)</th>
            <th>Fixed /Custom</th>
            <th>Development Owner</th>
            <th>Product Manager</th>
            <th>Story Points</th>
            <th>Estimate Confidence Score</th>
            <th>Estimated By</th>
            <th>Timeline</th>
            <th>URL to ADO Ticket</th>
            <th>In Px F&R sheet?</th>
            <th>Comments/Assumptions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
           
            return (
              <tr key={idx}>
                <td className="fit">
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
                </td>
                <td>{row.featurename}</td>
                <td className="expand">{row.description}</td>
                <td>
                  <span>
                    {row.dependency}
                  </span>
                </td>
                <td>{row.dependencyfeaturename}</td>
                <td>{row.phase}</td>
                <td>{row.specificrequirement}</td>
                <td>{row.fixedcustom}</td>
                <td>{row.developmentowner}</td>
                <td>{row.productmanager}</td>
                <td>{row.storypoints}</td>
                <td>{row.estimateconfidencescore}</td>
                <td>{row.estimatedby}</td>
                <td>{row.timeline}</td>
                <td>{row.urltoADOTicket}</td>
                <td>{row.inPxFRsheet}</td>
                <td>{row.commentsassumptions}</td>
              
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <Table rows={rows} columns={columns}>

      </Table> */}
    </div>
  );
};