// material-ui
import { Button, Stack, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import FormHelperText from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { useState } from 'react';
import { Box } from '@mui/system';
import pages from 'menu-items/pages';

// ==============================|| SAMPLE PAGE ||============================== //

const Dashboard = () => {

  const [openModal, setOpenModal] = useState(false);
  const [client, setClient] = useState('');
  const [page, setPage] = useState(pages);


  const [estimation, setEstimation] = useState({

    id: '',
    title: '',
    type: 'item',
    url: '/estimation'

  })
  //   const [error, setError] = useState({
  //     clientError: false,
  //     estimateError:false
  // });
  // console.log(client, estimation);


  // console.log(pages['children'][0].title);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setClient('');
    setOpenModal(false);
  };

  console.log(page);

  const handleChange = (e) => {
    setEstimation({ ...estimation, id: e.target.value, title: e.target.value });
  }

  const handleAddEstimation = (e) => {
    e.preventDefault();
    console.log('clicked');
    try {
      page['children'].forEach((item, index) => {
        
        if (item.title == client) {
          console.log('matched');
          console.log(item.title);
          setPage({
            ...page,
            children: [{...page.children[index],
              children: [estimation]}]
          
          })

          // setPage({
          //   ...page,
          //   children: [estimation]
          
          // })

          handleCloseModal();
          return;

        }

      })
    } catch (error) {
      console.log(error)
    }
  }

  const items = ['Toyota', 'Envu', 'Performx', 'Honda']

  return (
    <MainCard>

      <Stack direction="row" alignItems="center" justifyContent="right" spacing={1}>
        <Button size="1.3rem" type="button" variant="contained" color="secondary" onClick={handleOpenModal}>
          Create Estimation
        </Button>
      </Stack>

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        PaperProps={{
          component: 'form',
          onSubmit: handleAddEstimation,
        }}
      >
        <DialogTitle sx={{ fontSize: '1.5rem' }}>Add new Estimation</DialogTitle>
        <DialogContent>


          <Box
            noValidate
            component="form"
            sx={{
              width: 270

            }}
          >

            <FormControl variant="filled" sx={{ mt: 1, minWidth: '100%' }}>

              <InputLabel id="demo-simple-select-filled-label">Client</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={client}
                onChange={(e) => setClient(e.target.value)}

              >
                {items.map((item, index) => {
                  return (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>)
                })}

              </Select>

              <TextField
                error={false}
                id="filled-error-helper-text"
                label="Estimation Name"
                variant="filled"
                sx={{ mt: 1 }}
                onChange={handleChange}
              />
            </FormControl>
          </Box>



        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">Cancel</Button>
          <Button type="submit" color="secondary">Add</Button>
        </DialogActions>
      </Dialog>

    </MainCard>
  )
}

export default Dashboard;
