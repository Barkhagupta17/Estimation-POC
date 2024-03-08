// material-ui
import { Button, Stack } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Dashboard = () => (
  <MainCard>   
        
          <Stack direction="row" alignItems="center" justifyContent="right" spacing={1}>
            <Button size="1.3rem" type="button" variant="contained" color="secondary">
              Create Estimation
            </Button>
          </Stack>  
     
  </MainCard>
);

export default Dashboard;
