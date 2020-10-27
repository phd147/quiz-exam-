import * as actionTypes from '../actionTypes';

import axios from 'axios';



export const fetchQuestion = () => {
    return async dispatch => {
        const res = await axios.get('https://quiz-exam-bk.firebaseio.com/math.json');
        const data = res.data ;
       
        const questionArr = [] ;
        for(let key in data){
            questionArr.push(
                {
                   ...data[key],
                   id : key ,
                   userAnswer : ''
                }
            )
        };
        
        dispatch({
            type : actionTypes.FETCH_QUESTION_SUCCESS,
            questionArr : questionArr
        });
        

    }
};



export const changeHandler = (key,value) => {
   return async dispatch => {
       console.log('changingggg');
       dispatch({
           type : actionTypes.CHANGE_HANDLER,
           key : key ,
           value : value 
       })
   }
}


export const submitHandler = answer => {
    return dispatch => {
        answer = answer.filter((el,id,els) => {
            return el.correct === el.userAnswer 
        });
        console.log(answer.length);
        dispatch({
            type : actionTypes.SUBMIT,
            correctAnswers : answer.length
        })
    }
}