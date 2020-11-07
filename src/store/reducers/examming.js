import * as actionTypes from '../action/actionTypes';


const initialState = {
    questionArr : [] ,
    math : 0 ,
    loading : false 
    
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.FETCH_QUESTION_SUCCESS) :
            return {
                ...state, 
                questionArr : action.questionArr
            }

        case (actionTypes.CHANGE_HANDLER) : 
            return {
                ...state, 
                questionArr : state.questionArr.map((el,id,els) => {
                    if(id === action.key){
                        return {
                            ...el,
                            userAnswer : action.value 
                        }
                    }
                    return el ;
                })
            }

        case (actionTypes.SUBMIT) : 
            return {
                ...state , 
                math : action.correctAnswers
            }
        
        default : 
            return state ;
    }
};



export default reducer ;