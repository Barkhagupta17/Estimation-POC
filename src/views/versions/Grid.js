import React from "react";
import { useRef, useEffect, useState } from 'react'
import { Box , Button } from '@mui/material';
import ClickAwayListener from "@mui/material/ClickAwayListener";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


export default function EditDeleteTable({view}) {
  const weeklyHour=40;
  const estimatedHour=95;
  const contengency=15;
  const hour=36;
  const estimatedContengency= Math.ceil(estimatedHour*contengency/100);
  const totalHour=estimatedContengency+estimatedHour;
 
  const [rowIndex, setRowIndex] = useState(-1);
  const [columnIndex, setColumnIndex] = useState(-1);
  const[totalcost,settotalcost]=useState(0);
  const[totaleffort,settotaleffort]=useState(0);
  const [rows, setRows] = useState([
    { role: "Digital  Project Manager", fte: "0.5", effort: "40", costhrrate: "91.00", cost: "3640" , comment:""},
    { role: "Digital  Business Analyst ", fte: "0", effort: "0", costhrrate: "74.00", cost: "0" ,comment:""},
    { role: "Digital  Solution Architect", fte: "0", effort: "0", costhrrate: "111.00", cost: "0" ,comment:""},
    { role: "Digital  Software Engineer-Onsite", fte: "0", effort: "0", costhrrate: "100.80", cost: "0",comment:"" },
    { role: "Digital User Experience Architect", fte: "0", effort: "0", costhrrate: "92.00", cost: "0" ,comment:""},
    { role: "Digital Offshore Developer -Offshore", fte: "2", effort: "160", costhrrate: "42.21", cost: "6750" ,comment:""},
    { role: "Digital Offshore Quality Analyst - Offshore", fte: "1", effort: "80", costhrrate: "42.21", cost: "3380" ,comment:""}
  ]);
 const [resource,setResource]=useState(rows[5]["fte"]);
 const [week,setWeek]=useState(Math.round((totalHour/hour)/resource));
  useEffect(() => {
    var initalcost=0;
    var initaleffort=0;
    rows.map((row)=>{
    initalcost=initalcost+parseInt(row.cost);
    initaleffort=initaleffort+parseInt(row.effort);
   
});
    
    settotalcost(initalcost);
    settotaleffort(initaleffort);
    }, [rows]);

  const tablecellRef = useRef(null);
  useEffect(() => {
    console.log(event);
    window.onclick = (event) => {
      if (event.target.contains(tablecellRef.current)
        && event.target !== tablecellRef.current) {
        handleExit();
      } 
    }
});

  const handleTextFieldChange = (rowInd, colName, value) => {
    if(colName==='costhrrate'){
        setRows( rows.map((currRow, idx) => {
            if (idx !== rowInd) return currRow;
            else{
                return ({...currRow,[colName]:value,"cost":parseInt(value*currRow["effort"])});
            }
           
          }));
    }
    else if(colName==='comment'){
        setRows( rows.map((currRow, idx) => {
            if (idx !== rowInd) return currRow;
            else{
                return ({...currRow,[colName]:value});
            }
           
          }));
    }
    else if(rowInd===5 && colName==='fte'){
        setResource(value);
        setWeek(Math.round((totalHour/hour)/value));
        console.log(value);
        console.log(resource);
        console.log(week);
        const rate=[0.25,0,0,0,0,1,0.5];
        setRows( rows.map((currRow, idx) => {
            if (idx !== rowInd) return ({...currRow,[colName]:value*rate[idx],"effort":value*rate[idx]*weeklyHour*Math.round((totalHour/hour)/value),"cost":Math.round(value*rate[idx]*weeklyHour*Math.round((totalHour/hour)/value)*currRow["costhrrate"]/10)*10});
            else{
                return ({...currRow,[colName]:value,"effort":parseInt(value*weeklyHour*Math.round((totalHour/hour)/value)),"cost":Math.round(value*weeklyHour*Math.round((totalHour/hour)/value,-1)*currRow["costhrrate"]/10)*10});
            }
           
          }));
    }
    else{
    setRows( rows.map((currRow, idx) => {
        if (idx !== rowInd) return currRow;
        else{
            return ({...currRow,[colName]:value,"effort":parseInt(value*weeklyHour*week),"cost":parseInt(value*weeklyHour*week*currRow["costhrrate"])});
        }
       
      }));
    }
  };

  const handleExit = () => {
    setRowIndex(-1);
    setColumnIndex(-1);
  }

  return (
    <ClickAwayListener onClickAway={() => handleExit()}>
        <Box>
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
            {rows.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell>
                  {row.role}
                </TableCell>
               
                <TableCell ref={tablecellRef} 
                  onDoubleClick={() => { setRowIndex(index); setColumnIndex(1); }}>
                  {
                    rowIndex === index && columnIndex === 1 ?
                      <TextField sx={{width: "60px"}}
                        placeholder={row.fte}
                        defaultValue={rows[index]["fte"]}
                        onChange={(event) => handleTextFieldChange(index, "fte", event.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleExit();
                          }
                        }}
                      /> : row.fte
                  }
                </TableCell>
               
                
                <TableCell>
                  {row.effort}
                </TableCell>
                <TableCell  onDoubleClick={() => { setRowIndex(index); setColumnIndex(3); }}>
                {
                    rowIndex === index && columnIndex === 3 ?
                      <TextField
                        placeholder={row.costhrrate}
                        defaultValue={rows[index]["costhrrate"]}
                        onChange={(event) => handleTextFieldChange(index, "costhrrate", event.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleExit();
                          }
                        }}
                      /> : row.costhrrate
                  }
                </TableCell>
                <TableCell>
                  {row.cost}
                </TableCell>
                <TableCell  onDoubleClick={() => { setRowIndex(index); setColumnIndex(5); }}>
                {
                    rowIndex === index && columnIndex === 5 ?
                      <TextField
                        placeholder={row.comment}
                        defaultValue={rows[index]["comment"]}
                        onChange={(event) => handleTextFieldChange(index, "comment", event.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleExit();
                          }
                        }}
                      /> : row.comment
                  }
                </TableCell>
              </TableRow>
              
            ))}
            <TableRow>
                <TableCell colspan={2}>Total</TableCell>
                <TableCell colspan={2}>{totaleffort}</TableCell>
                <TableCell>{totalcost}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button size="1.3rem" type="button" variant="contained" color="secondary"  sx={{marginTop:'10px',visibility: view?'hidden':'visible'}}>
          Save
        </Button>
      </Box>
    </ClickAwayListener>
  );
}