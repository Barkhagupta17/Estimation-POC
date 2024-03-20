import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
// import Teamandcost from './Teamandcost';

// project imports
import { Card } from '@mui/material';
// import MainCard from 'ui-component/cards/MainCard';
import ClientCustomChange from './ClientCustomChange';
import AnualSupportCost from './AnualSupportCost';
import DetailedScheduleTask from './DetailedScheduleTask';
import AssumptionQuestion from './AssumptionQuestion';
import Grid from './Grid';
// import MainCard from 'ui-component/cards/MainCard';

const Version = ({view}) => {
  const [value, setValue] = React.useState('Detailed Schedule & Tasks');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card>
        <Box sx={{ width: '100%', padding: '20px' }}>
          <TabContext value={value}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab value="Detailed Schedule & Tasks" label="Detailed Schedule & Tasks" />
              <Tab value="Client-Custom-Change" label="Client Custom Change" />
              <Tab value="Team-&-Cost" label="Team & Cost" />

              <Tab value="Annual-Support-Cost" label="Annual Support Cost" />
              <Tab value='Assumptions-&-Questions' label="Assumptions & Questions"></Tab>
            </Tabs>
            <TabPanel value="Detailed Schedule & Tasks"><DetailedScheduleTask view={view}/></TabPanel>
            <TabPanel value="Client-Custom-Change" style={{ height: '450' }}>
              <ClientCustomChange view={view}/>
            </TabPanel>
            <TabPanel value="Team-&-Cost">
              {/* <Teamandcost view={view}/> */}
              <Grid view={view}/>
            </TabPanel>

            <TabPanel value="Annual-Support-Cost">
              <AnualSupportCost view={view}/>
            </TabPanel>

            <TabPanel value="Assumptions-&-Questions">
              <AssumptionQuestion view={view}/>
            </TabPanel>
          </TabContext>
        </Box>
      
        </Card>
  );
};

export default Version;
