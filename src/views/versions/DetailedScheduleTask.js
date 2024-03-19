import React, { useState }  from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box , Button } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
function createData(phase, activityDeliverable, type, depend, owner,configure,clientComplexity,baseEffortHours,pendingFeatureBuildHours,originalEstimatedHours,comments) {
    return { phase, activityDeliverable, type, depend, owner,configure,clientComplexity,baseEffortHours,pendingFeatureBuildHours,originalEstimatedHours,comments };
  }
  
  const rows = [
    createData('D1.1', "Set up project tracking (Epicor/NetSuite) ","D", "", "Pgm Mgr"),
    createData('D1.2',"Create shared project area and project documentation folders", "D", "", "Pgm Mgr"),
    createData('D1.3', "Draft initial Configuration Checklist", "D", "", "Pgm Mgr", "", "", "", "", "","Pgm Mgr drafts prior to kickoff, based on presale info, for review by team (and IT BA in particular)"),
    
  ];

export default function DetailedScheduleTask({view}) {
  console.log(view);
  console.log(view?'hidden':'visible');
    const [formState, setFormState] = useState(
       {
          instanceType: 'NA',
          programType: 'NA',
          programFeature: 'NA',
          enableGamification:'No',
          enableLearnEarn:'No',
          enableSSO:'No',
          enableSSNVault:'No',
          dataMigration:'No',
          
        }
      );

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
 
 
  return (
    <Box>
        <FormControl disabled={view} variant="filled" sx={{ m: 1, minWidth: 260 }}>
        <InputLabel id="instance-type-label">Instance Type</InputLabel>
        <Select
          labelId="instance-type-label"
          id="instance-type"
          name="instanceType"
          value={formState.instanceType}
          onChange={handleChange}
        >          
          <MenuItem value={'Multi-tenant'}>Multi-tenant</MenuItem>
          <MenuItem value={'Stand-Alone'}>Stand-Alone</MenuItem>
          <MenuItem value={'NA'}>NA</MenuItem>
        </Select>
      </FormControl>
      <FormControl disabled={view} variant="filled" sx={{ m: 1, minWidth: 260 }}>
        <InputLabel id="program-type-label">Program Type (Points/Dollar)</InputLabel>
        <Select
          labelId="program-type-label"
          id="program-type"
          name="programType"
          value={formState.programType}
          onChange={handleChange}
        >          
          <MenuItem value={'Dollars'}>Dollars</MenuItem>
          <MenuItem value={'Points'}>Points</MenuItem>
          <MenuItem value={'NA'}>NA</MenuItem>
        </Select>
      </FormControl>
      <FormControl disabled={view} variant="filled" sx={{ m: 1, minWidth: 260 }}>
        <InputLabel id="program-feature-label">Program Feature(Sales Incentive/Recognition/Both)</InputLabel>
        <Select
          labelId="program-feature-label"
          id="program-feature"
          name="programFeature"
          value={formState.programFeature}
          onChange={handleChange}
        >          
          <MenuItem value={'Sales Incentive'}>Sales Incentive</MenuItem>
          <MenuItem value={'Recognition'}>Recognition</MenuItem>
          <MenuItem value={'Both'}>Both</MenuItem>
          <MenuItem value={'NA'}>NA</MenuItem>
        </Select>
      </FormControl>
      <FormControl disabled={view} variant="filled" sx={{ m: 1, minWidth: 260 }}>
        <InputLabel id="enable-gamification-label">Enable Gamification</InputLabel>
        <Select
          labelId="enable-gamification-label"
          id="enable-gamification"
          name="enableGamification"
          value={formState.enableGamification}
          onChange={handleChange}
        >          
          <MenuItem value={'Yes'}>Yes</MenuItem>
          <MenuItem value={'No'}>No</MenuItem>
        </Select>
      </FormControl>
      <FormControl disabled={view} variant="filled" sx={{ m: 1, minWidth: 260 }}>
        <InputLabel id="enable-learn-earn-label">Enable Learn n Earn</InputLabel>
        <Select
          labelId="enable-learn-earn-label"
          id="enable-learn-earn"
          name="enableLearnEarn"
          value={formState.enableLearnEarn}
          onChange={handleChange}
        >          
          <MenuItem value={'Yes'}>Yes</MenuItem>
          <MenuItem value={'No'}>No</MenuItem>
        </Select>
      </FormControl>
      <FormControl disabled={view} variant="filled" sx={{ m: 1, minWidth: 260 }}>
        <InputLabel id="enable-sso-label">Enable SSO</InputLabel>
        <Select
          labelId="enable-sso-label"
          id="enable-sso"
          name="enableSSO"
          value={formState.enableSSO}
          onChange={handleChange}
        >          
          <MenuItem value={'Yes'}>Yes</MenuItem>
          <MenuItem value={'No'}>No</MenuItem>
        </Select>
      </FormControl>
      <FormControl disabled={view} variant="filled" sx={{ m: 1, minWidth: 260 }}>
        <InputLabel id="enable-ssn-vault-label">SSN Vault</InputLabel>
        <Select
          labelId="enable-ssn-vault-label"
          id="enable-ssn-vault"
          name="enableSSNVault"
          value={formState.enableSSNVault}
          onChange={handleChange}
        >          
          <MenuItem value={'Yes'}>Yes</MenuItem>
          <MenuItem value={'No'}>No</MenuItem>
        </Select>
      </FormControl>
      <FormControl disabled={view} variant="filled" sx={{ m: 1, minWidth: 260 }}>
        <InputLabel id="enable-data-migration-label">Data Migration Needed</InputLabel>
        <Select
          labelId="enable-data-migration-label"
          id="enable-data-migration"
          name="dataMigration"
          value={formState.dataMigration}
          onChange={handleChange}
        >          
          <MenuItem value={'Yes'}>Yes</MenuItem>
          <MenuItem value={'No'}>No</MenuItem>
        </Select>
      </FormControl>

      <TableContainer sx={{marginTop:'20px'}} >
      <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            
            <TableCell >Phase</TableCell>
            <TableCell sx={{minWidth: 340 }} >Activity/Deliverable</TableCell>
            <TableCell >Type</TableCell>
            <TableCell >Depend</TableCell>
            <TableCell >Owner</TableCell>
            <TableCell >Configure/ Build Work Type</TableCell>
            <TableCell >Client Complexity</TableCell>
            <TableCell >Base Effort Hours</TableCell>
            <TableCell >Pending Feature Build Hours</TableCell>
            <TableCell >Original Estimated Hours</TableCell>
            <TableCell  sx={{ minWidth: 300}}>Comments</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell>{row.phase}</TableCell>
              <TableCell>{row.activityDeliverable}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.depend}</TableCell>
              <TableCell>{row.owner}</TableCell>
              <TableCell>{row.configure}</TableCell>
              <TableCell>{row.clientComplexity}</TableCell>
              <TableCell>{row.baseEffortHours}</TableCell>
              <TableCell>{row.pendingFeatureBuildHours}</TableCell>
              <TableCell>{row.originalEstimatedHours}</TableCell>
              <TableCell>{row.comments}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button size="1.3rem" type="button" variant="contained" color="secondary"  sx={{marginTop:'10px',visibility: view?'hidden':'visible'}}>
          Save
        </Button>
    {/* <Box sx={{ height: 350, width: '100%' }}>
      <DataGrid  sx={{
            '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': { py: '8px' },
            '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { py: '15px' },
            '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': { py: '22px' },
          }}
          disableColumnMenu
          hideFooter
          getRowHeight={() => 'auto'}
          rows={rows}
          columns={column}
          style={{ marginBottom: '20px', marginTop:'20px' }}
          initialState={{
            aggregation: {
              model: {
                effort: 'sum'
              }
            }
          }}
        />
        </Box>*/}
    </Box>
  );
}

// const columns = [
//   { field: 'phase', headerName: 'Phase', maxWidth:'60'},
//   {
//     field: 'activityDeliverable',
//     headerName: 'Activity Deliverable',
//     align: 'left',
//     headerAlign: 'left',
//     width:200,
//   },
//   {
//     field: 'type',
//     headerName: 'Type',
//     // width: 180,
//     editable: false
//   },
//   {
//     field: 'depend',
//     headerName: 'Depend',
//     // width: 180,
//     editable: false
//   },
//   {
//     field: 'owner',
//     headerName: 'Owner',
//     // width: 180,
//     editable: false
//   },
//   {
//     field: 'configure',
//     headerName: 'Configure',
//     width: 180,
   
//   },
//   {
//     field: 'clientComplexity',
//     headerName: 'Client Complexity',
//     // width: 180,
//     editable: false
//   },
//   {
//     field: 'baseEffortHours',
//     headerName: 'Base Effort Hours',
//     // width: 180,
//     editable: false
//   },
//   {
//     field: 'pendingFeatureBuildHours',
//     headerName: 'Pending Feature Build Hours',
//     // width: 180,
//     editable: false
//   },
//   {
//     field: 'originalEstimatedHours',
//     headerName: 'Original Estimated Hours',
//     // width: 180,
//     editable: false
//   },
//   {
//     field: 'comments',
//     headerName: 'Comments',
//     // width: 180,
//     editable: false
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     phase:'D1.1',
//     activityDeliverable: "Set up project tracking (Epicor/NetSuite) ",
//     type:"D",
//     depend: "", 
//     owner: "Pgm Mgr"
//   },

  
// ];
