import *  as actionTypes from '../action/actionTypes';


const initialState = {
    incomingPath : null 
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case(actionTypes.CHANGE_ROUTE) : 
            return {
                ...state, 
                incomingPath : action.path
            }

        default : 
            return state ;
    }
}
export default reducer ;

