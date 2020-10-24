import * as actionTypes from '../action/actionTypes';


const initialState = {
    test : false 
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case (actionTypes.TEST) : 
            return {
                ...state, 
                test : !state.test
            }
        default : 
            return state ;
    }
}



export default reducer;