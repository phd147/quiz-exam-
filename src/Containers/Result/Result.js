import React from 'react';


import {Paper} from '@material-ui/core';


// import * as actionTypes from '../../store/action/actionTypes';

// import axios from 'axios';



import classes from './Result.module.css';
import { NavLink } from 'react-router-dom';


class Result extends React.Component{

    fetchCorrect = async () => {
        // const data = await axios.get('https://quiz-exam-bk.firebaseio.com/user/-MKZzUi9XNQaSBCd3UOu')
    }


    componentDidMount(){
        // this.props.fetchCorrect(this.props.subject);
    }

    render(){
        return (
            <div className={classes.result}>

           <Paper elevation={2} className={classes.parent}>
           <h1>Your Exam Result</h1>
           <p>Số câu đúng : {this.props.correct} / 30 </p>

            <NavLink onClick={() => console.log('click handler')} to="/student" style={{"display" : "inline-block","textDecoration" : "none","border":"1px solid red","padding":"10px"}}>
                Back to Student
            </NavLink>

           </Paper>

            
            </div>
        )
    }

} 

// const mapStateToProps = state => {
//     return {
//         subject : state.exam.subject,
//         correct : state.examming.correct
        
//     }
// };


// const mapDispatchToProps = dispatch => {
//     return {
//         fetchCorrect : subject => dispatch({type : actionTypes.FETCH_CORRECT, subject : subject})
//     }
// }





export default Result ;