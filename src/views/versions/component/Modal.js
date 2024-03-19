import  React, { useState,useEffect }  from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';

export const Modal=({open,closeModal, onSubmit,defaultValue})=> {
  const initial={featurename: "",
  description: "",
  dependency: "",
  dependencyfeaturename:"",
  phase:"",
  specificrequirement:"",
  fixedcustom:"",
  developmentowner:"Client Delivery",
  productmanager:"",
  storypoints:0,
  estimateconfidencescore:"",
  estimatedby:"",
  timeline:"",
  urltoADOTicket:"",
  inPxFRsheet:"",
  commentsassumptions:""
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
            maxWidth:'800px',
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
             sx={{minWidth:'700px',
              width:'100%', display:'grid',gridTemplateColumns:'auto auto auto'}}>
                  <TextField 
                  sx={{ m: 1 }}
                  id="featurename" 
                  label="Feature Name" 
                  variant="filled"
                  name="featurename" 
                  onChange={handleChange}
                  value={formState.featurename} />

                  <TextField sx={{ m: 1,gridColumn: '2 / span 2'}}
                    id="description"
                    variant="filled"
                    label="Description"
                    multiline
                    maxRows={2}
                    name="description"
                    onChange={handleChange}
                    value={formState.description}
                  />

                  <FormControl variant="filled" sx={{ m: 1}}>
                  <InputLabel  id="dependency-label">Dependency? (Y/N)</InputLabel>
                      <Select
                          labelId="dependency-label"
                          id="dependency"
                          name="dependency"
                          onChange={handleChange}
                          value={formState.dependency}
                          label="Dependency? (Y/N)"
                      >
                          <MenuItem value='Y'>Y</MenuItem>
                          <MenuItem value='N'>N</MenuItem>
                      </Select>
                    </FormControl> 

                    <TextField 
                       sx={{ m: 1}}
                       id="dependencyfeaturename"
                       label="Dependency (Feature Name)"
                       variant="filled" 
                       name="dependencyfeaturename"
                       onChange={handleChange}
                       value={formState.dependencyfeaturename}
                    />

                    <TextField 
                      sx={{ m: 1}} 
                      id="phase" 
                      label="Phase" 
                      variant="filled" 
                      name="phase" 
                      onChange={handleChange} 
                      value={formState.phase}
                    />

                    <FormControl variant="filled" sx={{ m: 1}}>
                      <InputLabel  id="specificrequirement-label">Specific Requirement in RFP?</InputLabel>
                        <Select
                            labelId="specificrequirement-label"
                            id="specificrequirement"
                            name="specificrequirement"
                            onChange={handleChange}
                            value={formState.specificrequirement}
                            label="Specific Requirement in RFP?"
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
                              name="fixedcustom"
                              onChange={handleChange}
                              value={formState.fixedcustom}
                              label="fixedcustom-label"
                          >
                              <MenuItem value='Fixed'>Fixed</MenuItem>
                              <MenuItem value='Custom'>Custom</MenuItem>
                          </Select>
                    </FormControl> 

                    <FormControl variant="filled" sx={{ m: 1}}>
                      <InputLabel  id="fixedcustom-label">Development Owner</InputLabel>
                          <Select
                              labelId="fixedcustom-label"
                              id="fixedcustom"
                              name="developmentowner"
                              onChange={handleChange}
                              value={formState.developmentowner}
                              label="Specific Requirement in RFP? (Y/N)"
                          >
                              <MenuItem value='Client Delivery'>Client Delivery</MenuItem>
                              <MenuItem value='Product'>Product</MenuItem>
                          </Select>
                    </FormControl>

                    <TextField 
                      sx={{ m: 1}} 
                      id="Product Manager" 
                      label="Product Manager" 
                      variant="filled" 
                      name="productmanager" 
                      onChange={handleChange} 
                      value={formState.productmanager}
                     />

                    <TextField 
                      sx={{ m: 1}} 
                      id="Story Points" 
                      label="Story Points" 
                      variant="filled" 
                      type='number' 
                      name="storypoints" 
                      onChange={handleChange} 
                      value={formState.storypoints}
                    />

                    <TextField 
                      sx={{ m: 1}} 
                      id="Estimate Confidence Score" 
                      label="Estimate Confidence Score" 
                      variant="filled" 
                      name="estimateconfidencescore" 
                      onChange={handleChange} 
                      value={formState.estimateconfidencescore}
                    />

                    <TextField 
                      sx={{ m: 1}} 
                      id="Estimated By" 
                      label="Estimated By" 
                      variant="filled"
                      name="estimatedby" 
                      onChange={handleChange} 
                      value={formState.estimatedby}
                    />

                    <TextField 
                      sx={{ m: 1}} 
                      id="Timeline" 
                      label="Timeline" 
                      variant="filled"
                      name="timeline" 
                      onChange={handleChange} 
                      value={formState.timeline}
                     />

                    <TextField 
                      sx={{ m: 1}} 
                      id="URL to ADO Ticket" 
                      label="URL to ADO Ticket" 
                      variant="filled" 
                      name="urltoADOTicket" 
                      onChange={handleChange} 
                      value={formState.urltoADOTicket}
                    /> 
                    
                    <TextField 
                      sx={{ m: 1}} 
                      id="In Px F&R sheet?" 
                      label="In Px F&R sheet?" 
                      variant="filled" 
                      name="inPxFRsheet" 
                      onChange={handleChange} 
                      value={formState.inPxFRsheet}
                    />

                    <TextField 
                    sx={{ m: 1}} 
                    id="Comments/Assumptions" 
                    label="Comments/Assumptions" 
                    variant="filled" 
                    name="commentsassumptions" 
                    onChange={handleChange} 
                    value={formState.commentsassumptions}
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