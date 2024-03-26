import * as React from 'react';
import { useState,useEffect } from "react";
import { Button } from '@mui/material';
import { ClientTable } from "../../component/ClientTable";
import {Modal} from "../../component/Modal";
import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// import { number } from 'prop-types';

function ClientCustomChange({view}) {
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
  
  // rows.map((row)=>{
  //     row.developmentowner==='Product'?initalproduct=initalproduct+row.storypoints:initaldelivery=initaldelivery+row.storypoints;
  //   console.log()})
  useEffect(() => {
    var initalproduct=0;
    var initaldelivery=0;
    rows.map((row)=>{
      row.developmentowner==='Product'?initalproduct=initalproduct+parseInt(row.storypoints):initaldelivery=initaldelivery+parseInt(row.storypoints);
    console.log(row)});
    setProductValue(initalproduct);
    setclientDeliveryValue(initaldelivery);
    }, [rows]);

    

  const [rowToEdit, setRowToEdit] = useState(null);
  const[productRoadmap,setProductValue]=useState(0);
  const[clientDelivery,setclientDeliveryValue]=useState(0);
  console.log(productRoadmap);
  console.log(clientDelivery);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
    // rows[targetIndex].developmentowner==='Product'?setProductValue((prev)=>{prev-rows[targetIndex].storypoints}):setclientDeliveryValue((prev)=>{prev-rows[targetIndex].storypoints});
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
      // newRow.developmentowner==='Product'?setProductValue((prev)=>{prev+newRow.storypoints}):setclientDeliveryValue((prev)=>{prev+newRow.storypoints});
  };

  return (
    <Box>
       <Button size="1.3rem" type="button" variant="contained" color="secondary"   onClick={() => setOpen(true)} sx={{marginBottom:'10px',visibility: view?'hidden':'visible'}}>
        <><AddIcon/>Add</>
      </Button >
      <ClientTable view={view} rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} productRoadmap={productRoadmap} clientDelivery={clientDelivery} />
      
      <Modal open={open}
        closeModal={() => {
        setOpen(false);
        setRowToEdit(null);
      }}
      onSubmit={handleSubmit}
      defaultValue={rowToEdit !== null && rows[rowToEdit]}/>
      <Button size="1.3rem" type="button" variant="contained" color="secondary"  sx={{marginTop:'20px',visibility: view?'hidden':'visible'}}>
          Save
      </Button>
    </Box>
  );
}

export default ClientCustomChange;