import *  as actionTypes from '../action/actionTypes';


const initialState = {
    incommingPath : null 
}



const reducer = (state = initialState, action) => {

    switch(action.type){

        case(actionTypes.CHANGE_ROUTE) : 
            return {
                ...state, 
                incommingPath : action.path
            }





        default : 
            return state ;
    }

}

export default reducer ;

