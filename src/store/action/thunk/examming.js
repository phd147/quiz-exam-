import * as actionTypes from '../actionTypes';

import axios from 'axios';


const shuffleArr = arr => {
    for(let i=arr.length -1 ; i>=0;i--){
        const j = Math.floor(Math.random()*i);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}




export const fetchQuestion = (subject) => {
    return async dispatch => {
        console.log("subject" + subject);
        const res = await axios.get(`https://quiz-exam-bk.firebaseio.com/${subject}.json`);
        const data = res.data ;
       
        let questionArr = [] ;

        if(subject ==='eng'){
            for(let key in data){
                questionArr.push(
                    {
                       ...data[key],
                       id : key ,
                       userAnswer : ''
                    }
                )
            };
        }


        // subject === 'cpa '
        else {
            for(let key in data){
                questionArr.push({
                    ...data[key],
                    id : key ,
                    userAnswer : ''
                })
            };
            shuffleArr(questionArr);
            console.log(questionArr);
            questionArr = questionArr.slice(1,31);
        }

       


        


        
        
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


export const submitHandler = (answers,subject,userId) => {
    return async dispatch => {
        answers = answers.filter((el,id,els) => {
            return el.correct === el.userAnswer 
        });
        console.log(answers.length);
        dispatch({
            type : actionTypes.SUBMIT,
            correctAnswers : answers.length
        });
        const userIdKey = await  axios.get('https://quiz-exam-bk.firebaseio.com/user.json');
        axios.put(`https://quiz-exam-bk.firebaseio.com/user/${userIdKey}.json`, {
            [subject] : answers.length
        });
    }
};



