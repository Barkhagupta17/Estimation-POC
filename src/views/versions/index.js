import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';


// project imports
import { Card } from '@mui/material';
// import MainCard from 'ui-component/cards/MainCard';
import ClientCustomChange from './tabs/client-custom-change-tab/ClientCustomChange';
import AnualSupportCost from './tabs/annual-support-tab/AnualSupportCost';
import DetailedScheduleTask from './tabs/details-schedule-task-tab/DetailedScheduleTask';
import Teamandcost from './tabs/team-and-cost-tab/Teamandcost';
import AssumptionQuestion from './tabs/assumption-and-question-tab/AssumptionQuestion';

// import MainCard from 'ui-component/cards/MainCard';

const Version = ({view}) => {
  const [tab, setTab] = React.useState('Detailed Schedule & Tasks');

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <Card>
        <Box sx={{ width: '100%', padding: '20px' }}>
          <TabContext value={tab}>
            <Tabs
              value={tab}
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

            <TabPanel value="Detailed Schedule & Tasks"><DetailedScheduleTask view={view} setTab={setTab}/></TabPanel>
            <TabPanel value="Client-Custom-Change" style={{ height: '450' }}>
              <ClientCustomChange view={view} setTab={setTab} />
            </TabPanel>
            <TabPanel value="Team-&-Cost">
              <Teamandcost view={view} setTab={setTab} />
              
            </TabPanel>

            <TabPanel value="Annual-Support-Cost">
              <AnualSupportCost view={view} setTab={setTab} />
            </TabPanel>

            <TabPanel value="Assumptions-&-Questions">
              <AssumptionQuestion view={view} setTab={setTab} />
            </TabPanel>
          </TabContext>
        </Box>
      
        </Card>
  );
};

export default Version;
