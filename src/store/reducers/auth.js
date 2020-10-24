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

        default : 
            return state ;
    }
}




export default reducer;