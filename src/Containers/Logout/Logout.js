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
     
         
    </div>

    )
}
export default Logout;