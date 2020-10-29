

import * as actionTypes from '../actionTypes';

export const changeIncommingPath = (path) => {
    return dispatch => {
        console.log('changing path');
        dispatch({type : actionTypes.CHANGE_ROUTE,
        path : path
        })
    }
}