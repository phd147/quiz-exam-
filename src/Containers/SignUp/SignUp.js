import React, { useCallback } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// import {NavLink} from 'react-router-dom';

import {useForm} from 'react-hook-form';

function Copyright() {

    

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.facebook.com/bk.bop19/">
        Phan Huynh Duc 17T3 DUT
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const {register,handleSubmit,errors} = useForm();


  console.log(errors);

  const onSubmit =useCallback((data) => {
        console.log(data);
        
  },[]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              inputRef={register({required: true})}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                error={errors.firstName}
              />
              <p style={{"color" : "red", "fontSize" : "16px"}}>{errors.firstName && errors.firstName.type === 'required' && 'FirstName is required'}</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              inputRef={register({required: true})}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                error={errors.lastName}
              />
              <p style={{"color" : "red", "fontSize" : "16px"}}>{errors.lastName && errors.lastName.type === 'required' && 'Last Name is required'}</p>
            </Grid>
            <Grid item xs={12}>
              <TextField
              inputRef={register({required: true})}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={errors.email}
              />
            <p style={{"color" : "red", "fontSize" : "16px"}}>{errors.email && errors.email.type === 'required' && 'Email is required'}</p>
            </Grid>
            <Grid item xs={12}>
              <TextField
              inputRef={register({required: true})}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={errors.password}
              />
              <p style={{"color" : "red", "fontSize" : "16px"}}>{errors.password && errors.password.type === 'required' && 'Password is required'}</p>
            </Grid>
            <Grid item xs={12}>
             
            </Grid>
          </Grid>
          <Button
            onClick={handleSubmit(onSubmit)}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
         
          
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}