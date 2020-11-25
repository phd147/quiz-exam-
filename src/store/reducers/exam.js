
import * as actionTypes from '../action/actionTypes';



const initialState = {
   fullname : null ,
   path : null 

}


const reducer = (state= initialState, action) => {
    switch(action.type){ 

        case(actionTypes.FETCH_USER) : 
            return {
                ...state ,
               ...action.obj
            }
       


        default : 
            return state ;
    }
};

export default reducer ;