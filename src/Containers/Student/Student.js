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
        // this.props.getUserIdKey(this.props.userId);
        
    }
   

    render(){
        return (
            <div className={classes.student}>

                <Paper elevation={3} className={classes.parent}>

                <NavLink style={{"textDecoration" : "none", "color": "orange","display":"block","margin":"10px"}} to="/infor" exact activeStyle={{
                    color : "orange",
                    border: "2px solid orange"
                }}><Button style={{"width":"100%"}}  variant="contained" color="primary">
                    Infor</Button>
                </NavLink>
                
                <NavLink style={{"textDecoration" : "none", "color": "orange","display":"block","margin":"10px"}} to="/exam" exact activeStyle={{
                    color : "orange",
                    border: "2px solid orange"
                }}><Button style={{"width":"100%"}}  variant="contained" color="primary">
                    Exam</Button>
                </NavLink>
                <NavLink style={{"textDecoration" : "none", "color": "orange","display":"block","margin":"10px"}} to="/logout" exact activeStyle={{
                    color : "orange",
                    border: "2px solid orange"
                }}><Button style={{"width":"100%"}}  variant="contained" color="primary">
                    Logout</Button>
                </NavLink>
               

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



// const subject = {
//     eng : {
//         isTest : true ,
//         mark : 10 ,
//         label : "English" ,
        

//     },
//     cpA : {
//         isTest : false ,
//         mark : 0 ,
//         label : "Computer Architecture"
//     } ,
//     java : {
//         isTest : true ,
//         mark : 10 ,
//         label : "Java Programming"
//     }
// }