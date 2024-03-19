import * as React from 'react';
import { useState } from "react";
import { Button } from '@mui/material';
import { TableComponent } from "./component/TableComponent";
import {AssumptionQuestionModal} from "./component/AssumptionQuestionModal";
import { Box } from '@mui/material';

function Assumption({view}) {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      id:1,
      assumption: "Only claims based setups will use the override feature",
      addedBy: "Barkha",
      addedOn: "16 April",
      
    },
    // {
    //   featurename: "About Us",
    //   description: "This page has details about the company",
    //   dependency: "N",
    // },
    
  ]);
  const columns=['','Assumption','Added BY','Added On'];
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
    <Box>
      <TableComponent view={view} rows={rows} columns={columns} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      
      <Button style={{marginTop:'20px',visibility:view?'hidden':'visible'}}size="1.3rem" type="button" variant="contained" color="secondary"   onClick={() => setOpen(true)}>
        Add
      </Button >
      
      <AssumptionQuestionModal column1={'assumption'} open={open}
        closeModal={() => {
        setOpen(false);
        setRowToEdit(null);
      }}
      onSubmit={handleSubmit}
      defaultValue={rowToEdit !== null && rows[rowToEdit]}/>
   
    </Box>
  );
}

export default Assumption;