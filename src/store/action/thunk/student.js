import * as actionTypes from '../actionTypes';

import axios from 'axios';


export const getUserIdKeyAction = userId => {
    return async dispatch => {
        try {
            const dataRes = await axios.get(`https://quiz-exam-bk.firebaseio.com/user.json?orderBy="userId"&equalTo="${userId}"`);
            console.log(dataRes);
            // get userId Key 
            let userIdKey = null ;
            for(let key in dataRes.data){
                userIdKey = key ;
            };
            dispatch({type : actionTypes.GET_USER_ID_KEY, userIdKey : userIdKey})
        }
        catch(error) {
            console.log(error);
        }
    }
}