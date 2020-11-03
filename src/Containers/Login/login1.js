// import React, { useRef, useState } from 'react'; 
import React from 'react';

import {useSelector,useDispatch} from 'react-redux';

import {useForm} from 'react-hook-form';



// import {useForm} from 'react-hook-form';


// import {TextField} from '@material-ui/core';

import {submitHandler} from '../../store/action/thunk/login';

import {Redirect} from 'react-router-dom';

import {TextField} from '@material-ui/core'



const Login = props =>  {

    const dispatch = useDispatch();

    const {register,handleSubmit} = useForm();
    const onSubmit = data => {
        
        console.log(data);
        dispatch(submitHandler(data.email,data.password));

    }


    // const dispatch = useDispatch();


    const auth = useSelector(state=> state.auth.tokenId !==null );
    const incomingPath = useSelector(state => state.route.incomingPath);


    

    
        return (<div>
            {(auth && incomingPath === null) ? <Redirect to="/student"/> : null}
            {(auth && incomingPath !== null) ? <Redirect to={`/${incomingPath}`}/> : null}
             <h1>login</h1>
            <input name="email" type="text" placeholder="email" ref={register}/>
            <TextField name="password" inputRef={register}/>
            {/* <input name="password" type="password" placeholder="password" ref={register} /> */}
            <button onClick={handleSubmit(onSubmit)}>submit nao</button>
        </div>  
           
        )
   
}


export default Login ;