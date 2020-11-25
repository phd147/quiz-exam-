// import React, { useRef, useState } from 'react'; 
import React, { useEffect } from 'react';

import {useSelector,useDispatch} from 'react-redux';

import {useForm} from 'react-hook-form';

import {useHistory} from 'react-router-dom'



import {connect} from 'react-redux';

// image 
import bk from './Bkdn.jpg';




// import * as actionTypes from '../../store/action/actionTypes';


// import {useForm} from 'react-hook-form';


// import {TextField} from '@material-ui/core';

import {submitHandler} from '../../store/action/thunk/login';

import {NavLink, Redirect} from 'react-router-dom';


// material ui
// import {TextField,Button,Grid} from '@material-ui/core';

import {Alert,AlertTitle} from '@material-ui/lab'

// import {Phone,MailOutlineOutlined} from '@material-ui/icons';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          phd147
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(Bkdn.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
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
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  




const Login = props =>  {
    console.log('rerendering');

    const classes = useStyles();

    const auth = useSelector(state => state.auth.tokenId !== null );

    const dispatch = useDispatch();

    
    

    const history = useHistory();

    const {register,errors,handleSubmit} = useForm();
    const onSubmit = data => {
        
        console.log(data);
        dispatch(submitHandler(data.email,data.password));

    }


    // const dispatch = useDispatch();


   
    const incomingPath = useSelector(state => state.route.incomingPath);

    useEffect(() => {
        console.log(errors);
    },[errors]);


   



    // useEffect(() => {
    //     console.log('component did mount');
    //     if(!auth){
            
    //         history.push('initAuth');
    //     }
    //     console.log(incomingPath);
    // },[]);

    useEffect(() => {
        if(!props.isInit && !props.auth){
          history.push('/initAuth');
        }
    },[history]);

    
    
        return (<div>
            {(auth && incomingPath === null) ? <Redirect to="/student"/> : null}
            {(auth && incomingPath !== null) ? <Redirect to={`/${incomingPath}`}/> : null}

            {/* ui layout */}
            {/* <Grid container>
                <Grid item xs={12} md={6}>
                <img alt="logoBk" src={imgBk}/>
                
                </Grid>
                <Phone/>
                <div><MailOutlineOutlined/> Phone: 0236. 373 1 123 </div>

                
            </Grid>

            <TextField name="email" error={errors.email && true } label="Email" inputRef={register({required : true, pattern: {
            value: /.+/,
            message: "invalid email address"
          }})}/>

          {errors.email && errors.email.type==="required" && <p>Email is required</p> }

          {errors.email && errors.email.type==="pattern" && <p>Invalid email</p> }
          
            <TextField label="Password" error={errors.password  && true } name="password" inputRef={register({required : true, pattern : {value : /.+/ ,message : "invalid password"} })}/>
           {errors.password && errors.password.type === 'required' && <p>Password is required</p>}
           {errors.password && errors.password.type === 'pattern' && <p>Invalid password</p>}

            <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>Submit</Button> */}
             <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} ><img style={{"width":"100%","height":"100%"}} alt="dut" src={bk}/></Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={register({required : true})}
              error={errors.email && true}
            />
            <p style={{"color" : "red"}} >{errors.email && errors.email.type==="required" && 'Email is required'}</p>
            <p style={{"color" : "red"}} >{errors.email && errors.email.type==="pattern" && 'Email is invalid pattern'}</p>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={register({required : true})}
              error = {errors.password && true}
            />
            <p style={{"color" : "red"}} >{errors.password && errors.password.type==="required" && 'Password is required'}</p>
            <p style={{"color" : "red"}}>{errors.password && errors.password.type==="pattern" && 'Password is invalid pattern'}</p>
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit(onSubmit)}
            >
              Sign In
            </Button>
            <Grid container justify="flex-end">
            <Grid item>
                <NavLink to="/signup">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
          </Grid>

            <Grid container>
            {props.errorLogin ? <Alert style={{"width" : "100%"}} severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Sai tài khoản hoặc mật khẩu <strong>Vui lòng đăng nhập lại !</strong>
              </Alert> : null}

            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
        </div>  
        
        )

}


const mapStateToProps = state => {
    return {
      errorLogin : state.auth.error,
      isInit : state.auth.isInit
    }
}


export default connect(mapStateToProps,null)(Login) ;