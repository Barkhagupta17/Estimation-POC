import { useState ,useEffect} from "react";
import EditableTable from "./EditTable";
import { TableBody, TableCell, TableContainer, TableHead, TableRow,Table} from "@mui/material";
import Box from '@mui/material/Box';
import {currencyFormatter,precentageFormatter} from '../Constfunctions';

const ClientCustomCost = ({view}) => {
    
    const weeklyHour=40;
    const estimatedPoint=54;
    const contengency=15;
    const storyPoint=32;
    const productRoadmap=12;
    const clientExtension=42;
    const dataMigration=32;
    const buildSetupCost=10330;
    const totalDevHour=clientExtension+productRoadmap+dataMigration;
    const DevHourPrecentage=[(productRoadmap/totalDevHour*100).toFixed(2),(clientExtension/totalDevHour*100).toFixed(2),(dataMigration/totalDevHour*100).toFixed(2)];
    const estimatedContengency= Math.ceil(estimatedPoint*contengency/100);
    const totalPoint=estimatedContengency+estimatedPoint;
    const noOfSprint=Math.ceil(totalPoint/storyPoint);
    const weeks=noOfSprint*2;

    const [rows,setRows] = useState([
        { role: "Digital  Project Manager", fte: 1, effort: 160, costhrrate: 91.00, cost: 14560 , comment:""},
        { role: "Digital  Business Analyst ", fte: 1, effort: 160, costhrrate: 74.00, cost: 11840 ,comment:""},
        { role: "Digital  Solution Architect", fte: 0.25, effort: 40, costhrrate: 111.00, cost: 4440 ,comment:""},
        { role: "Digital  Software Engineer-Onsite", fte: 1, effort: 160, costhrrate: 100.80, cost: 16130,comment:"" },
        { role: "Digital User Experience Architect", fte: 0.5, effort: 80, costhrrate: 92.00, cost: 7360 ,comment:""},
        { role: "Digital Offshore Developer -Offshore", fte: 3, effort: 2160, costhrrate: 42.21, cost: 20260 ,comment:""},
        { role: "Digital Offshore Quality Analyst - Offshore", fte: 1, effort: 160, costhrrate: 42.21, cost: 6750 ,comment:""}
      ]);
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

        const costBreakout=[buildSetupCost,Math.round(totalcost*DevHourPrecentage[0]/100),Math.round(totalcost*DevHourPrecentage[1]/100),Math.round(totalcost*DevHourPrecentage[2]/100)];
        const totalcostBreakout=costBreakout.reduce((partialSum, a) => partialSum + parseFloat(a), 0);
        const costBreakoutPrecentage=[];
        costBreakout.map((value,idx)=>{
            costBreakoutPrecentage[idx]= Math.round(value/totalcostBreakout*100);
        });
      const handleCellChange = (newValue, rowIndex,columnIndex) => {
        
        if(columnIndex===1){
            //changes in fte column
            setRows(rows.map((currRow, idx) => {
                if (idx !== rowIndex) return currRow;
                else{
                    const tempEffort=newValue*weeklyHour*weeks;
                    const tempCost=Math.round(tempEffort*currRow["costhrrate"]/10)*10;
                    return ({...currRow,"fte":newValue,"effort":tempEffort,"cost":tempCost});
                }
               
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
          <EditableTable rows={rows} handleCellChange={handleCellChange} totalcost={totalcost} totaleffort={totaleffort} weeks={weeks} view={view}/>
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
                            <TableCell>Estimated Points</TableCell>
                            <TableCell>{estimatedPoint}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Estimated Contengency</TableCell>
                            <TableCell>{estimatedContengency}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total Story Points</TableCell>
                            <TableCell>{totalPoint}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Story points/Team</TableCell>
                            <TableCell>Sprints needed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>{storyPoint}</TableCell>
                            <TableCell>{noOfSprint}</TableCell>
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
                    <TableCell>Customization Cost</TableCell>
                    <TableCell>{currencyFormatter(totalcost)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Schedule - in Wks</TableCell>
                    <TableCell>{weeks}</TableCell>
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
                    <TableCell>Product Roadmap</TableCell>
                    <TableCell>{productRoadmap}</TableCell>
                    <TableCell>{precentageFormatter(DevHourPrecentage[0])}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> Client Extensions</TableCell>
                    <TableCell>{clientExtension}</TableCell>
                    <TableCell>{precentageFormatter(DevHourPrecentage[1])}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Data migration</TableCell>
                    <TableCell>{dataMigration}</TableCell>
                    <TableCell>{precentageFormatter(DevHourPrecentage[2])}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell>{totalDevHour}</TableCell>
                    <TableCell>{precentageFormatter(DevHourPrecentage.reduce((partialSum, a) => partialSum + parseFloat(a), 0))}</TableCell>
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
                        <TableCell>{currencyFormatter(costBreakout[0])}</TableCell>
                        <TableCell>{precentageFormatter(costBreakoutPrecentage[0])}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Roadmap items needed</TableCell>
                        <TableCell>{currencyFormatter(costBreakout[1])}</TableCell>
                        <TableCell>{precentageFormatter(costBreakoutPrecentage[1])}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Client Extensions</TableCell>
                        <TableCell>{currencyFormatter(costBreakout[2])}</TableCell>
                        <TableCell>{precentageFormatter(costBreakoutPrecentage[2])}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Data migration</TableCell>
                        <TableCell>{currencyFormatter(costBreakout[3])}</TableCell>
                        <TableCell>{precentageFormatter(costBreakoutPrecentage[3])}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell>{currencyFormatter(totalcostBreakout)}</TableCell>
                        <TableCell>{precentageFormatter(costBreakoutPrecentage.reduce((partialSum, a) => partialSum + parseFloat(a), 0))}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
          </TableContainer>
        </>
    ); 
  };
  
  export default ClientCustomCost;