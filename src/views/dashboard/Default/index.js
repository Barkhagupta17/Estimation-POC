// material-ui
import { Button, Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Dashboard = () => (
  <MainCard>
    <Grid item xs={12}>
      <Grid container>
        <Grid item>
          <Button fullWidth size="1.3rem" type="button" variant="contained" color="secondary">
            Create Estimation
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </MainCard>
);

export default Dashboard;
