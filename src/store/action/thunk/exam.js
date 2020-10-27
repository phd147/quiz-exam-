
import axios from 'axios';
import * as actionTypes from '../actionTypes';


export const fetchUser = (userId) => {
    return async dispatch => {
        console.log('getting user information');

        try {

        const res = await axios.get(`https://quiz-exam-bk.firebaseio.com/user.json?orderBy="userId"&equalTo="${userId}"`)
           console.log(res.data);

           let objContainInfor = {};

           for(let key in res.data){
                objContainInfor = res.data[key];
           }
           console.log(objContainInfor);
           dispatch({
               type : actionTypes.FETCH_USER,
               obj : objContainInfor 
           })

        } catch (error) {
            console.log(error);
        }


        
        
    }
}