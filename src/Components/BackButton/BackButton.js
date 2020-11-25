import React from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


import {Button} from '@material-ui/core'


import {NavLink} from 'react-router-dom';

import classes from './BackButton.module.css';


const BackButton  = props => {


    return (<NavLink className={classes.backButton} to={`${props.path}`}>
        <Button variant="contained" color="secondary">
        <ArrowBackIosIcon style={{"fontSize" : "40px"}}/>
        </Button>
        
    </NavLink>)
}


export default BackButton;