import * as React from 'react';
import { useState } from "react";
import { Button } from '@mui/material';

// import "./Customchanges.css";
import { ClientTable } from "./component/ClientTable";
import { Modal } from "./component/Modal";
// import {Modal2} from "./component/Modal2";

function ClientCustomChange() {
  const [modalOpen, setModalOpen] = useState(false);
  // const [open, setOpen] = React.useState(false);
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

    setModalOpen(true);
  };
  // const handleEditRow2 = (idx) => {
  //   setRowToEdit(idx);

  //   setModalOpen(true);
  // };

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
    <div>
      <ClientTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      {/* <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button> */}
      <Button  style={{marginTop:'20px'}}size="1.3rem" type="button" variant="contained" color="secondary" onClick={() => setModalOpen(true)}>
            Add
          </Button>
      {/* <button onClick={() => setOpen(true)} className="btn">
        Add2
      </button>
      
      <Modal2 open={open} setOpen={setOpen}/> */}
    
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
      
    </div>
  );
}

export default ClientCustomChange;