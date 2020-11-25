import React from 'react';

import axios from 'axios';


// redux 
import {connect} from 'react-redux';

//action 
import {fetchUser} from '../../store/action/thunk/exam';

import {changeIncommingPath} from '../../store/action/thunk/route';

// material ui 
import {Button,Paper} from '@material-ui/core';

import {Skeleton} from '@material-ui/lab';


import * as actionTypes from '../../store/action/actionTypes';

import classes from './Exam.module.css';

// back button 
import BackButton from '../../Components/BackButton/BackButton';


class Exam extends React.Component {

    state = {
        subject : []
    }

    clickHandler = (fullname, path,userIdKey)  => {
        this.props.select(fullname,path);
        
        this.props.history.push('/examming');
        axios.patch(`https://quiz-exam-bk.firebaseio.com/user/${userIdKey}/subject/${path}.json`,{
            isTest : true
        }).then(data => console.log(data));
    }

    render(){
        return (<div className={classes.exam}>
            
           
             {/* {this.props.isTestMark} <NavLink to="/examming" >
                examming
            </NavLink> */}
            <Paper elevation={3} className={classes.parent}>
            <BackButton path="/student"/>
            {this.state.subject.length === 0 ? <React.Fragment>
                <Skeleton style={{"margin" : "10px"}} variant="rect" width={210} height={30} />
                <Skeleton style={{"margin" : "10px"}} variant="rect" width={210} height={30} />
                <Skeleton style={{"margin" : "10px"}} variant="rect" width={210} height={30} />
            </React.Fragment> : null }
           
           {this.state.subject.map((el,id) => {
               return (<Button disabled={el.isTest} style={{"display":"block","margin":"10px", "width":"100%"}} variant="contained" color="secondary" key={el.fullname} onClick={() => this.clickHandler(el.fullname, el.id,this.props.userIdKey)}>{el.fullname}</Button>)
           })}
             </Paper>
        </div>
          
        )
    }

     componentDidMount(){
        console.log('component did mount [EXAM.js]  user id ' + this.props.userId);
        if(this.props.auth){
            console.log('co auth roi khong can init');
              axios.get(`https://quiz-exam-bk.firebaseio.com/user/${this.props.userIdKey}.json`).then(data => {

                console.log(data);


                 const subjectObj = data.data.subject ;
                 const subjectState = [] ;
                 for(let key in subjectObj){
                     subjectState.push({
                         id : key ,
                         fullname : subjectObj[key].fullname ,
                         isTest : subjectObj[key].isTest
                     })
                 };
                 console.log(subjectState);
                 this.setState({subject : subjectState})
              } );
           

              return ;
           
        }

        this.props.changeIncommingPath('exam');
        this.props.history.push('/initAuth')
        
    }

}

const mapStateToProps = state => {
    return {
        userId : state.auth.userId,
        auth : state.auth.tokenId !== null ,
        userIdKey : state.auth.userIdKey
    }

}


const mapDispatchToProps = dispatch => {
    return {
        
        changeIncommingPath : (path) => dispatch(changeIncommingPath(path)),
        select : (fullname,subject) => dispatch({type : actionTypes.SELECT_SUBJECT, path : subject ,fullname : fullname})
    }
}






export default connect(mapStateToProps,mapDispatchToProps)(Exam) ;