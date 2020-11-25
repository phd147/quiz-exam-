
import axios from 'axios';
import * as actionTypes from '../actionTypes';




export const submitHandler = (mail,pass) => {
    
    return async dispatch => {
        try {
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCx6BfXfUjJXEGnZmLWkJLYENFmjr7FZf8',{
                email : mail,
                password : pass,
                returnSecureToken : true 
            });

            const dataRes = await axios.get(`https://quiz-exam-bk.firebaseio.com/user.json?orderBy="userId"&equalTo="${res.data.localId}"`);
            console.log(dataRes);
            // get userId Key 
            let userIdKey = null ;
            for(let key in dataRes.data){
                userIdKey = key ;
            };
            

                setTimeout(() => {
                    dispatch({
                        type : actionTypes.CLEAR_TOKEN
                    });
                  },3600000);
    
    
                  // lưu vào local Storage
                  localStorage.setItem('tokenId',res.data.idToken);
                  localStorage.setItem('userId',res.data.localId);
                  localStorage.setItem('expireTime',new Date().getTime() + res.data.expiresIn*1000);
                  localStorage.setItem('userIdKey',userIdKey);
    
    
    
                dispatch({type :actionTypes.LOGIN_SUCCESS,
                        tokenId : res.data.idToken ,
                        userId : res.data.localId ,
                        expireTime : res.data.expiresIn ,
                        userIdKey : userIdKey
                });
        }
        catch(err){
            console.log(err);
            dispatch({type : actionTypes.ERROR_LOGIN})
        };
    }
    
}