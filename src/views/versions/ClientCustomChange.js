import * as React from 'react';
import { useState } from "react";
import { Button } from '@mui/material';
import { ClientTable } from "./component/ClientTable";
import {Modal} from "./component/Modal";
import { Card } from '@mui/material';

function ClientCustomChange() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      id:1,
      featurename: "Modify the Dealer claims form ",
      description: "Modify the Dealer claims form to add .",
      dependency: "Y",
      developmentowner: "Client Delivery",
      storypoints: 32,

    },
    // {
    //   featurename: "About Us",
    //   description: "This page has details about the company",
    //   dependency: "N",
    // },
    
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setOpen(true);
   
  };
  
  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <Card>
      <ClientTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      
      <Button style={{marginTop:'20px'}}size="1.3rem" type="button" variant="contained" color="secondary"   onClick={() => setOpen(true)}>
        Add
      </Button >
      
      <Modal open={open}
        closeModal={() => {
        setOpen(false);
        setRowToEdit(null);
      }}
      onSubmit={handleSubmit}
      defaultValue={rowToEdit !== null && rows[rowToEdit]}/>
   
    </Card>
  );
}

export default ClientCustomChange;