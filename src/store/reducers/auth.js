import * as actionTypes from '../action/actionTypes';



const initialState = {
    
    userId : null ,
    tokenId : null ,
    expireTime : null 
}


const reducer  = (state = initialState, action) => {
    switch(action.type){
        case (actionTypes.LOGIN_SUCCESS) : 
            return {
                ...state, 
                tokenId : action.tokenId , 
                userId : action.userId ,
                expireTime : action.expireTime 
         }

         case(actionTypes.CLEAR_TOKEN) : 
            localStorage.removeItem('userId');
            localStorage.removeItem('tokenId');
            localStorage.removeItem('expireTime'); 


            return {
                ...state, 
                tokenId : null ,
                userId : null ,
                expireTime : null 
            }

        default : 
            return state ;
    }
}




export default reducer;