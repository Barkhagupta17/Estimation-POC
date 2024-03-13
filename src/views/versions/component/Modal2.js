import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DialogTitle from '@mui/material/DialogTitle';

export const Modal2=({open, setOpen})=> {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog sx={{width:'100%'}}
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            handleClose();
          },
        }}
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
        <FormControl fullWidth>
        <TextField sx={{ m: 1}} id="featurename" label="Feature Name" variant="filled" />
        <TextField sx={{ m: 1}}
          id="filled-multiline-flexible"
          variant="filled"
          label="Multiline"
          multiline
          maxRows={4}
          gutterMargin
        />
         <FormControl variant="filled" sx={{ m: 1}}>
         <InputLabel  id="dependency-label">Dependency? (Y/N)</InputLabel>
            <Select
                labelId="dependency-label"
                id="dependency"
                // // value={age}
                label="Dependency? (Y/N)"
                // onChange={handleChange}
            >
                <MenuItem value='Y'>Y</MenuItem>
                <MenuItem value='N'>N</MenuItem>
            </Select>
          </FormControl> 
          <TextField sx={{ m: 1}} id="dependencyfeaturename" label="Dependency (Feature Name)" variant="filled" />
          <TextField sx={{ m: 1}} id="phase" label="Phase" variant="filled" />
          <FormControl variant="filled" sx={{ m: 1}}>
         <InputLabel  id="specificrequirement-label">Specific Requirement in RFP? (Y/N)</InputLabel>
            <Select
                labelId="specificrequirement-label"
                id="specificrequirement"
                // // value={age}
                label="Specific Requirement in RFP? (Y/N)"
                // onChange={handleChange}
            >
                <MenuItem value='Y'>Y</MenuItem>
                <MenuItem value='N'>N</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="filled" sx={{ m: 1}}>
         <InputLabel  id="fixedcustom-label">Fixed/Custom</InputLabel>
            <Select
                labelId="fixedcustom-label"
                id="fixedcustom"
                // // value={age}
                label="Specific Requirement in RFP? (Y/N)"
                // onChange={handleChange}
            >
                <MenuItem value='Fixed'>Fixed</MenuItem>
                <MenuItem value='Custom'>Custom</MenuItem>
            </Select>
          </FormControl> 
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}