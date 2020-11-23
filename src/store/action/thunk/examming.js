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
        dispatch({type : actionTypes.FETCH_QUESTION_LOADING })
        const res = await axios.get(`https://quiz-exam-bk.firebaseio.com/${subject}.json`);
        const data = res.data ;
       
        let questionArr = [] ;

      
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


export const submitHandler = (answers,subject,keyUser) => {
    return async dispatch => {

       

        answers = answers.filter((el) => {
            return el.correct === el.userAnswer 
        });
        console.log(answers.length);
       
       

         await axios.patch(`https://quiz-exam-bk.firebaseio.com/user/${keyUser}/subject/${subject}.json`,{
           mark :  ((answers.length / 30)*10).toString().indexOf('.') !== -1 ? ((answers.length / 30)*10).toFixed(1) : ((answers.length / 30)*10)
        });

        dispatch({
            type : actionTypes.SUBMIT,
            correctAnswers : answers.length
        });

        
       

   

        
        


        
    

        

        


        // console.log(userIdKey);
        // axios.put(`https://quiz-exam-bk.firebaseio.com/user/${userIdKey}.json`, {
        //     [subject] : answers.length
        // });
    }
};



