import React from 'react';


import {Paper,Button} from '@material-ui/core';

import {Alert} from '@material-ui/lab'

// REACT REDUX
import {connect} from 'react-redux';
import * as actionTypes from '../../store/action/actionTypes';


// import * as actionTypes from '../../store/action/actionTypes';

// import axios from 'axios';


import {Redirect} from 'react-router-dom'


import classes from './Result.module.css';
import { NavLink } from 'react-router-dom';

// 


class Result extends React.Component{



 


    componentDidMount(){
        // this.props.fetchCorrect(this.props.subject);
    }

    render(){
        return (
            <div className={classes.result}>

              {!this.props.subject ?<Redirect to="/student"/> : null}  
           <Paper elevation={2} className={classes.parent} >
           <h1 style={{"color":"#ff9f43"}}>Your Exam Result</h1>
           
           <Alert variant="outlined" severity="success">
                    Số câu đúng : {this.props.mark} / 30 
            </Alert>
            <NavLink to="/student" style={{"textDecoration" : "none"}}>
                <Button variant="contained" color="primary" >Back to Student</Button>    
            </NavLink>

           </Paper>

            
            </div>
        )
    }

    componentWillUnmount(){
        console.log('[Result.js] component will unmount');
        this.props.delete_subject_done();

    }
    


} 

const mapStateToProps = state => {
    return {
        subject : state.examming.subject,
        
        mark : state.examming.mark,
       
        
    }
};


const mapDispatchToProps = dispatch => {
    return {
        delete_subject_done : ()=> dispatch({type : actionTypes.RESULT_UNMOUNT_DELETE_SUBJECT_DONE})
    }
}





export default connect(mapStateToProps,mapDispatchToProps)(Result) ;