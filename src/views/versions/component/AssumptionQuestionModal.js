import  React, { useState,useEffect }  from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';

export const AssumptionQuestionModal=({column1,open,closeModal, onSubmit,defaultValue})=> {
  const initial={assumption: "",
  question:"",
  addedBy: "",
  addedOn: "",
  }

  useEffect(() => {
    const value=defaultValue || initial;
    setFormState(value);
  }, [open]);

  const [formState, setFormState] = useState(initial);
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

    return (
    <React.Fragment>
      <Dialog sx={{width:'100%'}}
        open={open}
        onClose={closeModal}
        PaperProps={{
          component: 'form',
          style:{
            maxWidth:'500px',
          },
          onSubmit: (event) => {
            event.preventDefault();
            onSubmit(formState);
            closeModal();
          },
        }}
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
          <Box 
             sx={{width:'100%',display:'grid',minWidth: '400px',
              }}>
                  <TextField 
                  sx={{ m: 1 }}
                  id={column1==='assumption'?'assumption':'question'}
                  label={column1==='assumption'?'Assumption':'Question'}
                  variant="filled"
                  multiline
                  maxRows={3}
                  name={column1==='assumption'?'assumption':'question'}
                  onChange={handleChange}
                  value={column1==='assumption'?formState.assumption:formState.question} />

                  <TextField 
                  sx={{ m: 1}}
                    id="addedBy"
                    variant="filled"
                    label="Added By"
                    name="addedBy"
                    onChange={handleChange}
                    value={formState.addedBy}
                  />

                  
                    <TextField 
                    sx={{ m: 1}}
                    id="addedOn"
                    label="Added On"
                    variant="filled" 
                    name="addedOn"
                    onChange={handleChange}
                    value={formState.addedOn}
                    />

                    
          </Box>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}