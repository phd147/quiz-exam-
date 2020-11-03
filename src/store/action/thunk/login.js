
import axios from 'axios';
import * as actionTypes from '../actionTypes';




export const submitHandler = (mail,pass) => {
    
    return  dispatch => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCx6BfXfUjJXEGnZmLWkJLYENFmjr7FZf8',{
            email : mail,
            password : pass,
            returnSecureToken : true 
        }).then(res => {
            console.log('login success');
            console.log(res);


            setTimeout(() => {
                dispatch({
                    type : actionTypes.CLEAR_TOKEN
                });
              },3600000);


              // lưu vào local Storage
              localStorage.setItem('tokenId',res.data.idToken);
              localStorage.setItem('userId',res.data.localId);
              localStorage.setItem('expireTime',new Date().getTime() + res.data.expiresIn*1000);



            dispatch({type :actionTypes.LOGIN_SUCCESS,
                    tokenId : res.data.idToken ,
                    userId : res.data.localId ,
                    expireTime : res.data.expiresIn 
            });
          
        });
    }
    
}