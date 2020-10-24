
import axios from 'axios';
import * as actionTypes from '../actionTypes';




export const submitHandler = (mail,pass) => {
    console.log('heeeeeeeeeeeeeeloooooooo');
    console.log(mail,pass)
    return  dispatch => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCx6BfXfUjJXEGnZmLWkJLYENFmjr7FZf8',{
            email : mail,
            password : pass,
            returnSecureToken : true 
        }).then(res => {
            console.log('login success');
            console.log(res);
            dispatch({type :actionTypes.LOGIN_SUCCESS,
                    tokenId : res.data.idToken ,
                    userId : res.data.localId ,
                    expireTime : res.data.expiresIn 
            });
        });
    }
    
}