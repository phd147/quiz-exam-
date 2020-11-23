import * as actionTypes from '../action/actionTypes';


const initialState = {
    questionArr : [] ,
   
    loading : false ,
    subject : null ,
    done : true ,
    mark : 'Loading'
    
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.FETCH_QUESTION_SUCCESS) :
            return {
                ...state, 
                questionArr : action.questionArr,
                loading : false
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
                mark : action.correctAnswers,
                done : true ,
                questionArr : []
               
            }
        

        case(actionTypes.SELECT_SUBJECT) : 
            return {
                ...state, 
                subject : action.path
            }

      
       

        case(actionTypes.DELETE_SUBJECT_STATE) :
            return {
                ...state, 
                subject : null,
                
            }
        case(actionTypes.FETCH_QUESTION_LOADING) : 
            return {
                ...state, 
                loading : true
            }

        case(actionTypes.RESULT_UNMOUNT_DELETE_SUBJECT_DONE):
            return {
                ...state, 
                done : false ,
                subject : null
            }
        case('DELETE_ARR_QUESTION') : 
            return {
                ...state, 
                questionArr : []
            }

        default : 
            return state ;
    }
};



export default reducer ;