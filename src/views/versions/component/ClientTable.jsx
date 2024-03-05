import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";

export const ClientTable = ({ rows, deleteRow, editRow }) => {
  return (
  
    <div className="table-wrapper">
      <table className="table">
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
                    <BsFillPencilFill
                        className="edit-btn"
                        onClick={() => editRow(idx)}
                    />
                    <BsFillTrashFill
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
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};