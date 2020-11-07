// import React, { useRef, useState } from 'react'; 
import React, { useEffect } from 'react';

import {useSelector,useDispatch} from 'react-redux';

import {useForm} from 'react-hook-form';

import imgBk from '../../assets/image/Logo.png';




// import * as actionTypes from '../../store/action/actionTypes';


// import {useForm} from 'react-hook-form';


// import {TextField} from '@material-ui/core';

import {submitHandler} from '../../store/action/thunk/login';

import {Redirect} from 'react-router-dom';


// material ui
import {TextField,Button,Grid} from '@material-ui/core';

import {Phone,MailOutlineOutlined} from '@material-ui/icons';



const Login = props =>  {
    console.log('rerendering');

    const auth = useSelector(state => state.auth.tokenId !== null );

    const dispatch = useDispatch();

    
    

    // const history = useHistory();

    const {register,errors,handleSubmit} = useForm();
    const onSubmit = data => {
        
        console.log(data);
        dispatch(submitHandler(data.email,data.password));

    }


    // const dispatch = useDispatch();


   
    const incomingPath = useSelector(state => state.route.incomingPath);

    useEffect(() => {
        console.log(errors);
    },[errors])


    // useEffect(() => {
    //     console.log('component did mount');
    //     if(!auth){
            
    //         history.push('initAuth');
    //     }
    //     console.log(incomingPath);
    // },[]);
    
    
        return (<div>
            {(auth && incomingPath === null) ? <Redirect to="/student"/> : null}
            {(auth && incomingPath !== null) ? <Redirect to={`/${incomingPath}`}/> : null}

            {/* ui layout */}
            <Grid container>
                <Grid item xs={12} md={6}>
                <img alt="logoBk" src={imgBk}/>
                
                </Grid>
                <Phone/>
                <p><MailOutlineOutlined/> Phone: 0236. 373 1 123 </p>

                
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

            <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>Submit</Button>
        </div>  
        
        )

}


export default Login ;