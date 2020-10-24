import React from 'react' ;


import {NavLink} from 'react-router-dom';

import classes from './Student.module.css';



class Student extends React.Component {


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


export default Student; 
