import { useState ,useEffect} from "react";
import EditableTable from "./EditTable";
import EditableTableCell from './component/EditableTableCell';
import { TableBody, TableCell, TableContainer, TableHead, TableRow,Table} from "@mui/material";
import Box from '@mui/material/Box';
import { currencyFormatter,precentageFormatter } from "./Constfunctions";

const BuildSetupCost = ({view}) => {
    
    const weeklyHour=40;
    const estimatedHour=95;
    const contengency=15;
    const hour=36;
    const estimatedContengency= Math.ceil(estimatedHour*contengency/100);
    const totalHour=estimatedContengency+estimatedHour;
    
    const [rows,setRows] = useState([
        { role: "Digital  Project Manager", fte: 0.25, effort: 30, costhrrate: 91.00, cost: 2730 , comment:""},
        { role: "Digital  Business Analyst ", fte: 0, effort: 0, costhrrate: 74.00, cost: 0 ,comment:""},
        { role: "Digital  Solution Architect", fte: 0, effort: 0, costhrrate: 111.00, cost: 0 ,comment:""},
        { role: "Digital  Software Engineer-Onsite", fte: 0, effort: 0, costhrrate: 100.80, cost: 0,comment:"" },
        { role: "Digital User Experience Architect", fte: 0, effort: 0, costhrrate: 92.00, cost: 0 ,comment:""},
        { role: "Digital Offshore Developer -Offshore", fte: 1, effort: 120, costhrrate: 42.21, cost: 5070 ,comment:""},
        { role: "Digital Offshore Quality Analyst - Offshore", fte: 0.5, effort: 60, costhrrate: 42.21, cost: 2530 ,comment:""}
      ]);
      const [resource,setResource]=useState(rows[5].fte);
      const [week,setWeek]=useState(Math.round(totalHour/resource/hour));
      const[totalcost,settotalcost]=useState(0);
      const[totaleffort,settotaleffort]=useState(0);

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

     const handleCellChange = (newValue, rowIndex,columnIndex) => {
        if(columnIndex===1 && rowIndex!=5){
            //changes in fte column
            setRows(rows.map((currRow, idx) => {
                if (idx !== rowIndex) return currRow;
                else{
                    const tempEffort=newValue*weeklyHour*week;
                    const tempCost=Math.round(tempEffort*currRow["costhrrate"]/10)*10;
                    return ({...currRow,"fte":newValue,"effort":tempEffort,"cost":tempCost});
                }
               
              }));
              
        }
        else if(columnIndex===1 && rowIndex==5){
            //change is in fte column developer offshore so resource value is change thats and week value is depended on resource
            setResource(newValue);
            setWeek(Math.round(totalHour/newValue/hour));
            const tempresource=newValue;
            const tempweek=Math.round(totalHour/tempresource/hour);
            
            const rate=[0.25,0,0,0,0,1,0.5];
            setRows( rows.map((currRow, idx) => {
                const tempfte=newValue*rate[idx];
                const tempeffort=tempfte*weeklyHour*tempweek;
                const tempcost=Math.round(tempeffort*currRow['costhrrate']/10)*10;
                return ({...currRow,"effort":tempeffort,"fte":tempfte,"cost":tempcost});
            }));
            
        }
        else if(columnIndex===3){
            //changes in cost hr Rate column
            setRows(rows.map((currRow, idx) => {
                if (idx !== rowIndex) return currRow;
                else{
                    const tempCost=Math.round(currRow["effort"]*newValue/10)*10;
                    return ({...currRow,"costhrrate":newValue,"cost":tempCost});
                }
               
              }));
        }
        else{
            setRows(rows.map((currRow, idx) => {
                //changes in comment column
                if (idx !== rowIndex) return currRow;
                else{
                    return ({...currRow,"comment":newValue});
                }
               
              }));
        }
      };
    
    return(
        <>
          <EditableTable rows={rows} handleCellChange={handleCellChange} totalcost={totalcost} totaleffort={totaleffort} weeks={week} view={view}/>
          <Box sx={{marginTop:'30px',marginBottom:'25px',display: 'flex',justifyContent: 'space-between', alignItems: 'center',gap: '40px'}}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={2}>Intermediate calculations</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Estimated Hour</TableCell>
                            <TableCell>{estimatedHour}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Estimated Contengency</TableCell>
                            <TableCell>{estimatedContengency}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Hour</TableCell>
                            <TableCell>{totalHour}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Hour</TableCell>
                            <TableCell>Resource</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Duration</TableCell>
                            <TableCell>{hour}</TableCell>
                            <TableCell><EditableTableCell
                                        view={view}
                                        value={rows[5]["fte"]}
                                        dollarSign="false"
                                        type="number"
                                        onChange={(newValue) =>
                                            handleCellChange(newValue, 5 ,1)
                                        }
                                        />
                            </TableCell>
                            <TableCell>{week}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
          </Box>
           <TableContainer>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>TOTAL OVERALL COST</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Setup Costs</TableCell>
                    <TableCell>{currencyFormatter(totalcost)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Setup Schedule - in Wks</TableCell>
                    <TableCell>{week}</TableCell>
                </TableRow>
            </TableBody>
            </Table> 
          </TableContainer>
         <TableContainer sx={{marginTop:'25px',marginBottom:'25px'}}>
            <Table>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Dev Hours</TableCell>
                    <TableCell>%</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Base Product Build/Configure</TableCell>
                    <TableCell>{estimatedHour}</TableCell>
                    <TableCell>{precentageFormatter(estimatedHour===0?0:100)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell>{estimatedHour}</TableCell>
                    <TableCell>{precentageFormatter(estimatedHour===0?0:100)}</TableCell>
                </TableRow>
            </TableBody>
            </Table> 
          </TableContainer>
           <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell colSpan={2}>ROUGH COST BREAKOUT</TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell></TableCell>
                    <TableCell>Cost</TableCell>
                    <TableCell>%</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Base Product Build/Configure</TableCell>
                        <TableCell>{currencyFormatter(estimatedHour===0?0:totalcost)}</TableCell>
                        <TableCell>{precentageFormatter(estimatedHour===0?0:100)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell>{currencyFormatter(estimatedHour===0?0:totalcost)}</TableCell>
                        <TableCell>{precentageFormatter(estimatedHour===0?0:100)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
          </TableContainer>
        </>
    ); 
  };
  
  export default BuildSetupCost;