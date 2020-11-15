import React, { useEffect } from 'react';

import {useDispatch} from 'react-redux'

import * as actionTypes from '../../store/action/actionTypes';

const Logout = props => {
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch({type : actionTypes.CLEAR_TOKEN});
        props.history.push('/');
    });



    return (<div>
       <h1>logout ne hihi</h1>
         
    </div>

    )
}
export default Logout;