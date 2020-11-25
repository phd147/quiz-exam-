import * as actionTypes from '../action/actionTypes';



const initialState = {
    
    userId : null ,
    tokenId : null ,
    expireTime : null ,
    error : false ,
   
    userIdKey : null  ,
    isInit : false
}


const reducer  = (state = initialState, action) => {
    switch(action.type){
        case (actionTypes.LOGIN_SUCCESS) : 
            return {
                ...state, 
                tokenId : action.tokenId , 
                userId : action.userId ,
                expireTime : action.expireTime ,
                userIdKey : action.userIdKey
         }

         case(actionTypes.CLEAR_TOKEN) : 
            localStorage.removeItem('userId');
            localStorage.removeItem('tokenId');
            localStorage.removeItem('expireTime'); 
            localStorage.removeItem('userIdKey');


            return {
                ...state, 
                tokenId : null ,
                userId : null ,
                expireTime : null 
            }


        case(actionTypes.ERROR_LOGIN) : 
            return {
                ...state, 
                error : true 
            }
        case(actionTypes.GET_USER_ID_KEY) : 
            return {
                ...state, 
                userIdKey : action.userIdKey
            }

        case ('SET_INIT') : 
            return {
                ...state, 
                isInit : true 
            }

        default : 
            return state ;
    }
}




export default reducer;