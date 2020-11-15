import React from 'react' ;


import {NavLink} from 'react-router-dom';

import classes from './Student.module.css';

import {connect} from 'react-redux';

import * as actionTypes from '../../store/action/actionTypes';

import {Button,Paper} from '@material-ui/core';

// thunk 
import {getUserIdKeyAction} from '../../store/action/thunk/student';





class Student extends React.Component {


    componentDidMount(){
        console.log(this.props.auth);
        if(!this.props.auth){
            this.props.changeRoute();
            this.props.history.push('/initAuth');
            return ;
        };
        // lay user Id Key cua user do roi cho vao global store cua redux 
        this.props.getUserIdKey(this.props.userId);
        
    }
   

    render(){
        return (
            <div className={classes.student}>

                <Paper elevation={3} className={classes.parent}>

                <Button  style={{"display":"block","margin":"10px"}}  variant="contained" color="primary">
                <NavLink style={{"textDecoration" : "none", "color": "orange"}} to="/infor" exact activeStyle={{
                    color : "orange",
                    border: "2px solid orange"
                }}>
                    Infor
                </NavLink></Button>
                <Button style={{"display":"block","margin":"10px"}}  variant="contained" color="primary">
                <NavLink style={{"textDecoration" : "none", "color": "orange"}} to="/exam" exact activeStyle={{
                    color : "orange",
                    border: "2px solid orange"
                }}>
                    Exam
                </NavLink></Button>
                <Button style={{"display":"block","margin":"10px"}}  variant="contained" color="primary">
                <NavLink style={{"textDecoration" : "none", "color": "orange"}} to="/logout" exact activeStyle={{
                    color : "orange",
                    border: "2px solid orange"
                }}>
                    Logout
                </NavLink></Button>
               

                </Paper>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        auth : state.auth.tokenId !== null ,
        userId : state.auth.userId 
    }
}

const mapDispathToProps = dispatch => {
    return {
        changeRoute : () => dispatch({type : actionTypes.CHANGE_ROUTE,path : 'student'}),
        getUserIdKey : (userId) => dispatch(getUserIdKeyAction(userId))
    }
}


export default connect(mapStateToProps,mapDispathToProps)(Student); 
