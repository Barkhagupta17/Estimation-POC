import * as React from 'react';
import { useState } from "react";
import { Button } from '@mui/material';
import { TableComponent } from "./component/TableComponent";
import {AssumptionQuestionModal} from "./component/AssumptionQuestionModal";
import { Card } from '@mui/material';

function Question() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      id:1,
      question: "Only two additional entities will be added to the claim form and using fixed titles to populate the fields. How does the system determine which titles to use?",
      addedBy: "Barkha",
      addedOn: "16 April",
      
    },
    // {
    //   featurename: "About Us",
    //   description: "This page has details about the company",
    //   dependency: "N",
    // },
    
  ]);
  const columns=['','Question','Added BY','Added On'];
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
      <TableComponent rows={rows} columns={columns} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      
      <Button style={{marginTop:'20px'}}size="1.3rem" type="button" variant="contained" color="secondary"   onClick={() => setOpen(true)}>
        Add
      </Button >
      
      <AssumptionQuestionModal open={open}
        closeModal={() => {
        setOpen(false);
        setRowToEdit(null);
      }}
      onSubmit={handleSubmit}
      defaultValue={rowToEdit !== null && rows[rowToEdit]}/>
   
    </Card>
  );
}

export default Question;