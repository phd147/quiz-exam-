// import React, { useRef, useState } from 'react'; 
import React, { useEffect } from 'react';

import {useSelector,useDispatch} from 'react-redux';

import {useForm} from 'react-hook-form';




import * as actionTypes from '../../store/action/actionTypes';


// import {useForm} from 'react-hook-form';


// import {TextField} from '@material-ui/core';

import {submitHandler} from '../../store/action/thunk/login';

import {Redirect, useHistory} from 'react-router-dom';

import {TextField} from '@material-ui/core'



const Login = props =>  {
    console.log('rerendering');

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
    },[errors])


    useEffect(() => {
        console.log('component did mount ');
        if(!auth){
            
            history.push('initAuth');
        }
    },[]);
    

    
        return (<div>
            {(auth && incomingPath === null) ? <Redirect to="/student"/> : null}
            {(auth && incomingPath !== null) ? <Redirect to={`/${incomingPath}`}/> : null}
             <h1>login</h1>
            <input name="email" type="text" placeholder="email" ref={register({required : true, pattern: {
            value: /.+/,
            message: "invalid email address"
          }})}/>
          {errors.email && errors.email.type==="required" &&'is required '}
          {errors.email && errors.email.type==="pattern" &&' invalid pattern '}
            <TextField error={errors.password && errors.password && true } name="password" inputRef={register({required : true, pattern : {value : /.+/ ,message : "invalid password"} })}/>
            {/* <input name="password" type="password" placeholder="password" ref={register} /> */}
            <button onClick={handleSubmit(onSubmit)}>submit nao</button>
        </div>  
        
        

        )
   
}


export default Login ;