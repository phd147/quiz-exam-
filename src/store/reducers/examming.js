import * as actionTypes from '../action/actionTypes';


const initialState = {
    questionArr : [] ,
   
    loading : false ,
    subject : null ,
    done : false 
    
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
        

        case(actionTypes.SELECT_SUBJECT) : 
            return {
                ...state, 
                subject : action.path
            }

        case(actionTypes.DONE_EXAMMING)  : 
            return {
                ...state, 
                done : true 
            }

        default : 
            return state ;
    }
};



export default reducer ;