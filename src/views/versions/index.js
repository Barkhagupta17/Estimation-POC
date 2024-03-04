import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import ClientCustomChange from './ClientCustomChange';

const Version = () => {
    const [value, setValue] = React.useState('Client-Custom-Change');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <MainCard sx={{overflow :"hidden"}}  title={
            <Box sx={{ width: '100%', padding:'20px' }}>
                <TabContext value={value}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="Client-Custom-Change" label="Client Custom Change" />
                        <Tab value="Team-&-Cost" label="Team & Cost" />
                        <Tab value="Annual-Support-Cost" label="Annual Support Cost" />
                        <Tab value='Assumptions-&-Questions' label="Assumptions & Questions"></Tab>
                    </Tabs>

                    <TabPanel className='client table tab' value="Client-Custom-Change"><ClientCustomChange /></TabPanel>
                    <TabPanel value="Team-&-Cost">Item Two</TabPanel>
                    <TabPanel value="Annual-Support-Cost">Item Three</TabPanel>
                    <TabPanel value="Assumptions-&-Questions">Item Three</TabPanel>
                </TabContext>
            </Box>
        }>

        </MainCard>
    )
}

export default Version;