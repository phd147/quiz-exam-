import * as actionTypes from '../actionTypes';


export const initAuth = () => {
    return dispatch => {
        dispatch({
            type : actionTypes.LOGIN_SUCCESS,
            userId : localStorage.getItem('userId'),
            expireTime : localStorage.getItem('expireTime'),
            tokenId : localStorage.getItem('tokenId')
        })
    }
}