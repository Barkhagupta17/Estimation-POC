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
import { useMemo } from 'react';

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
  

  const [formError, setFormError] = useState({
    featurename: false,
    description: false,
    dependency: false,
    dependencyfeaturename:false,
    phase:false,
    specificrequirement:false,
    fixedcustom:false,
    developmentowner: false,
    productmanager:false,
    storypoints:false,
    estimateconfidencescore:false,
    estimatedby:false,
    timeline:false,
    urltoADOTicket:false,
    inPxFRsheet:false,
    commentsassumptions:false
  })

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value.trim() });
    if (e.target.value !== '' || e.target.value !== 0){
      setFormError({...formError, [e.target.name] : false});
    }
    // disablAddBtn();
  };

  const onBlurValidation = (e) =>{
    if(e.target.value === 0 || e.target.value === ''){
      setFormError({...formError, [e.target.name] : true});
    }
  }

  // const disablAddBtn = useMemo(
  //   () => formState.featurename !== 0 || formState.dependency !== 0 ||
  //   formState.featurename.length === 0 || formState.dependencyfeaturename.length === 0||
  //   formState.phase.length === 0 || formState.specificrequirement.length === 0 ||
  //   formState.fixedcustom.length === 0 || formState.developmentowner.length === 0 ||
  //   formState.productmanager.length === 0 || formState.storypoints.length === 0 ||
  //   formState.estimateconfidencescore.length === 0 || formState.estimatedby.length === 0 ||
  //   formState.timeline.length === 0 || formState.urltoADOTicket.length === 0 ||
  //   formState.inPxFRsheet.length === 0 || formState.commentsassumptions.length === 0
    
  //   ,   
  //   [formState]
  // )

  // Validation on Save btn
  const disablAddBtn = useMemo(
    () => formState.featurename === '' || formState.dependency === '' ||
    formState.featurename === '' || formState.dependencyfeaturename === '' ||
    formState.phase === '' || formState.specificrequirement === '' ||
    formState.fixedcustom === '' || formState.developmentowner === '' ||
    formState.productmanager === '' || formState.storypoints === 0 || formState.storypoints === '' ||
    formState.estimateconfidencescore  === '' || formState.estimatedby === '' ||
    formState.timeline === '' || formState.urltoADOTicket === '' ||
    formState.inPxFRsheet === '' || formState.commentsassumptions === ''
    
    ,   
    [formState]
  )
  // console.log(disablAddBtn());

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
                  value={formState.featurename} 
                  error = {formError.featurename}
                  onBlur={onBlurValidation}
                  />

                  <TextField sx={{ m: 1,gridColumn: '2 / span 2'}}
                    id="description"
                    variant="filled"
                    label="Description"
                    multiline
                    maxRows={2}
                    name="description"
                    onChange={handleChange}
                    value={formState.description}
                    error = {formError.description}
                    onBlur={onBlurValidation}
                  />

                  <FormControl error = {formError.dependency} variant="filled" sx={{ m: 1}}>
                  <InputLabel  id="dependency-label">Dependency? (Y/N)</InputLabel>
                      <Select
                          labelId="dependency-label"
                          id="dependency"
                          name="dependency"
                          onChange={handleChange}
                          value={formState.dependency}
                          label="Dependency? (Y/N)"
                          onBlur={onBlurValidation}
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
                       error = {formError.dependencyfeaturename}
                       onBlur={onBlurValidation}
                    />

                    <TextField 
                      sx={{ m: 1}} 
                      id="phase" 
                      label="Phase" 
                      variant="filled" 
                      name="phase" 
                      onChange={handleChange} 
                      value={formState.phase}
                      error = {formError.phase}
                      onBlur={onBlurValidation}
                    />

                    <FormControl error = {formError.specificrequirement} variant="filled" sx={{ m: 1}}>
                      <InputLabel  id="specificrequirement-label">Specific Requirement in RFP?</InputLabel>
                        <Select
                            labelId="specificrequirement-label"
                            id="specificrequirement"
                            name="specificrequirement"
                            onChange={handleChange}
                            value={formState.specificrequirement}
                            label="Specific Requirement in RFP?"
                            onBlur={onBlurValidation}
                        >
                            <MenuItem value='Y'>Y</MenuItem>
                            <MenuItem value='N'>N</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl error = {formError.fixedcustom} variant="filled" sx={{ m: 1}}>
                      <InputLabel  id="fixedcustom-label">Fixed/Custom</InputLabel>
                          <Select
                              labelId="fixedcustom-label"
                              id="fixedcustom"
                              name="fixedcustom"
                              onChange={handleChange}
                              value={formState.fixedcustom}
                              label="fixedcustom-label"
                              onBlur={onBlurValidation}
                          >
                              <MenuItem value='Fixed'>Fixed</MenuItem>
                              <MenuItem value='Custom'>Custom</MenuItem>
                          </Select>
                    </FormControl> 

                    <FormControl error = {formError.developmentowner} variant="filled" sx={{ m: 1}}>
                      <InputLabel  id="fixedcustom-label">Development Owner</InputLabel>
                          <Select
                              labelId="fixedcustom-label"
                              id="fixedcustom"
                              name="developmentowner"
                              onChange={handleChange}
                              value={formState.developmentowner}
                              label="Specific Requirement in RFP? (Y/N)"
                              onBlur={onBlurValidation}
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
                      error = {formError.productmanager}
                      onBlur={onBlurValidation}
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
                      error = {formError.storypoints}
                      onBlur={onBlurValidation}
                    />

                    <TextField 
                      sx={{ m: 1}} 
                      id="Estimate Confidence Score" 
                      label="Estimate Confidence Score" 
                      variant="filled" 
                      name="estimateconfidencescore" 
                      onChange={handleChange} 
                      value={formState.estimateconfidencescore}
                      error = {formError.estimateconfidencescore}
                      onBlur={onBlurValidation}
                    />

                    <TextField 
                      sx={{ m: 1}} 
                      id="Estimated By" 
                      label="Estimated By" 
                      variant="filled"
                      name="estimatedby" 
                      onChange={handleChange} 
                      value={formState.estimatedby}
                      error = {formError.estimatedby}
                      onBlur={onBlurValidation}
                    />

                    <TextField 
                      sx={{ m: 1}} 
                      id="Timeline" 
                      label="Timeline" 
                      variant="filled"
                      name="timeline" 
                      onChange={handleChange} 
                      value={formState.timeline}
                      error = {formError.timeline}
                      onBlur={onBlurValidation}
                     />

                    <TextField 
                      sx={{ m: 1}} 
                      id="URL to ADO Ticket" 
                      label="URL to ADO Ticket" 
                      variant="filled" 
                      name="urltoADOTicket" 
                      onChange={handleChange} 
                      value={formState.urltoADOTicket}
                      error = {formError.urltoADOTicket}
                      onBlur={onBlurValidation}
                    /> 
                    
                    <TextField 
                      sx={{ m: 1}} 
                      id="In Px F&R sheet?" 
                      label="In Px F&R sheet?" 
                      variant="filled" 
                      name="inPxFRsheet" 
                      onChange={handleChange} 
                      value={formState.inPxFRsheet}
                      error = {formError.inPxFRsheet}
                      onBlur={onBlurValidation}
                    />

                    <TextField 
                    sx={{ m: 1, gridColumn: '2 / span 2'}} 
                    id="Comments/Assumptions" 
                    label="Comments/Assumptions" 
                    variant="filled" 
                    name="commentsassumptions" 
                    onChange={handleChange} 
                    value={formState.commentsassumptions}
                    error = {formError.commentsassumptions}
                    onBlur={onBlurValidation}
                    /> 

          </Box>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color='secondary'>Cancel</Button>
          <Button type="submit" color='secondary' disabled={disablAddBtn}>Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}