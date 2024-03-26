import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ClientCustomCost from './ClientCustomCost';
import BuildSetupCost from './BuildSetupCost';
import { Button } from '@mui/material';

export default function Teamandcost({view, setTab}) {
    const [value, setValue] = React.useState('1');
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleSave = (e) =>{
      e.preventDefault();
      setTab('Annual-Support-Cost');
    }
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} textColor="secondary"
              indicatorColor="secondary" aria-label="lab API tabs example">
              <Tab label="Build & Setup Cost" value="1" />
              <Tab label="Client Customization Cost" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1"><BuildSetupCost view={view}/></TabPanel>
          <TabPanel value="2"><ClientCustomCost view={view}/></TabPanel>
        </TabContext>
        <Button size="1.3rem" type="button" variant="contained" color="secondary" sx={{ marginTop: '10px', visibility: view ? 'hidden' : 'visible' }} onClick={handleSave}>
        Save
      </Button>
      </Box>
    );
  
}