// import { useState } from 'react';
// import { useSelector } from 'react-redux';

// material-ui
// import { useTheme } from '@mui/material/styles';
import {
  Button,
  Grid
  // Box,
  // FormControl,
  // FormHelperText,
  // IconButton,
  // InputAdornment,
  // InputLabel,
  // OutlinedInput,
  // Stack,
  // Typography
  // useMediaQuery
} from '@mui/material';

// third party
// import * as Yup from 'yup';
// import { Formik } from 'formik';

// project imports
// import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router';

// import Google from 'assets/images/icons/social-google.svg';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = () => {
  // const FirebaseLogin = ({ ...others }) => {
  // const theme = useTheme();
  // const scriptedRef = useScriptRef();
  // const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  // const [checked, setChecked] = useState(true);
  const navigate = useNavigate();
  // const googleHandler = async () => {
  //   console.error('Login');
  // };

  // const [showPassword, setShowPassword] = useState(false);
  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <AnimateButton>
            <Button fullWidth onClick={handleLogin} size="large" variant="contained" color="secondary">
              Single Sign On
            </Button>
          </AnimateButton>
        </Grid>
      </Grid>
    </>
  );
};

export default FirebaseLogin;
