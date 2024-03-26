import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Assumption from './Assumption';
import Question from './Question';

export default function AssumptionQuestion({view}) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} textColor="secondary"
              indicatorColor="secondary" aria-label="lab API tabs example">
              <Tab label="Assumptions" value="1" />
              <Tab label="Questions" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1"><Assumption view={view}/></TabPanel>
          <TabPanel value="2"><Question view={view}/></TabPanel>
        </TabContext>
      </Box>
    );
  
}