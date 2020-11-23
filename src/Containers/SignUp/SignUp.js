import React, { useCallback,useState } from 'react';
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

import {Alert} from '@material-ui/lab';

import {useHistory} from 'react-router-dom'



// axios 
import axios from 'axios';

import {NavLink} from 'react-router-dom'

// import {NavLink} from 'react-router-dom';

import {useSelector} from 'react-redux';

import {Redirect} from 'react-router-dom'


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
  const history = useHistory();

  const [done,setDone] = useState(false);
  const [error,setError] = useState(false);

  const classes = useStyles();
  const {register,handleSubmit,errors} = useForm();
  const auth = useSelector(state => state.auth.tokenId !== null );

  const signUpHandler =  async (data) => {

    try {
      console.log(data);
      // init subject of each user 
      const subjectObjRes = await axios.get('https://quiz-exam-bk.firebaseio.com/subject.json');
      const subjectObj = subjectObjRes.data;
      const subjectOfUser = {};
      for(let key in subjectObj){
        subjectOfUser[subjectObj[key]] = {
          fullname : key ,
          isTest : false,
          mark : 0 
        }
      };
      console.log(subjectOfUser);
      // get userId 
      const signUpData = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCx6BfXfUjJXEGnZmLWkJLYENFmjr7FZf8',{
        email : data.email ,
        password : data.password,
        returnSecureToken : true 
      });
      const userId = signUpData.data.localId ;
      console.log(userId);

      await axios.post('https://quiz-exam-bk.firebaseio.com/user.json',{
        name : data.firstName+' '+ data.lastName,
        subject : subjectOfUser,
        userId : userId

      })

      setError(false);
      setDone(true);
      setTimeout(() => {
        history.push('/');
      },2000);
    }
    catch(err) {
      console.log(err);
      setError(true);
    }
      
  };

  const signUpHandlerCallback = useCallback(signUpHandler,[]);


  console.log(errors);
  console.log(auth);

  const onSubmit =useCallback((data) => {
    signUpHandlerCallback(data);
        
  },[signUpHandlerCallback]);

  return (
    <div>
      {auth ? <Redirect to="student"/> : null}
   
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
                error={errors.firstName ? true : false}
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
                error={errors.lastName ? true : false}
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
                error={errors.email ? true : false}
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
                error={errors.password ? true : false}
              />
              <p style={{"color" : "red", "fontSize" : "16px"}}>{errors.password && errors.password.type === 'required' && 'Password is required'}</p>
            </Grid>
            <Grid item xs={12}>
             
            </Grid>
          </Grid>
          {done ? <Alert severity="success">Bạn đã đăng kí thành công!</Alert> : null}
          {error ? <Alert severity="error">Đăng kí thất bại , vui lòng thử lại!</Alert> : null }
          <Button
            onClick={handleSubmit(onSubmit)}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <NavLink to="/" style={{"textDecoration" : "none"}}>
          <Button
            
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Back to Sign in
          </Button>
          </NavLink>
         
         
          
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </div>
  );
}