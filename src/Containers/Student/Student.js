import React from 'react' ;


import {NavLink} from 'react-router-dom';

import classes from './Student.module.css';

import {connect} from 'react-redux';

import * as actionTypes from '../../store/action/actionTypes';



class Student extends React.Component {


    componentDidMount(){
        console.log(this.props.auth);
        if(!this.props.auth){
            this.props.changeRoute();
            this.props.history.push('/initAuth');
        }
    }
   

    render(){
        return (
            <div className={classes.student}>
                <NavLink to="/infor" exact activeStyle={{
                    color : "red",
                    border: "2px solid orange"
                }}>
                    infor
                </NavLink>
                <NavLink to="/exam" exact activeStyle={{
                    color : "red",
                    border: "2px solid orange"
                }}>
                    exam
                </NavLink>
                <NavLink to="/logout" exact activeStyle={{
                    color : "red",
                    border: "2px solid orange"
                }}>
                    logout
                </NavLink>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        auth : state.auth.tokenId !== null 
    }
}

const mapDispathToProps = dispatch => {
    return {
        changeRoute : () => dispatch({type : actionTypes.CHANGE_ROUTE,path : 'student'})
    }
}


export default connect(mapStateToProps,mapDispathToProps)(Student); 
