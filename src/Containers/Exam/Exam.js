import React from 'react';


import {NavLink} from 'react-router-dom';

// redux 
import {connect} from 'react-redux';

//action 
import {fetchUser} from '../../store/action/thunk/exam';

import {changeIncommingPath} from '../../store/action/thunk/route';

// material ui 
import {Button} from '@material-ui/core';


import * as actionTypes from '../../store/action/actionTypes';


class Exam extends React.Component {

    state = {
        subject : [{name : 'English',path : 'eng'},{name : 'Computer Architecture',path:'cpA'}]
    }

    clickHandler = path => {
        this.props.select(path);
        
        this.props.history.push('/examming');
    }

    render(){
        return (<div>
             {/* {this.props.isTestMark} <NavLink to="/examming" >
                examming
            </NavLink> */}
           {this.state.subject.map((el,id) => {
               return (<Button key={el.name} onClick={() => this.clickHandler(el.path)}>{el.name}</Button>)
           })}

        </div>
          
        )
    }

    componentDidMount(){
        console.log('component did mount [EXAM.js]  user id ' + this.props.userId);
        if(this.props.auth){
            console.log('co auth roi khong can init')
            this.props.fetchUser(this.props.userId);
            return ;
        }

        this.props.changeIncommingPath('exam');
        this.props.history.push('/initAuth')
        
    }



}

const mapStateToProps = state => {
    return {
        userId : state.auth.userId,
        auth : state.auth.tokenId !== null 
    }

}


const mapDispatchToProps = dispatch => {
    return {
        fetchUser : (userId) => dispatch(fetchUser(userId)),
        changeIncommingPath : (path) => dispatch(changeIncommingPath(path)),
        select : (subject) => dispatch({type : actionTypes.SELECT_SUBJECT, path : subject })
    }
}






export default connect(mapStateToProps,mapDispatchToProps)(Exam) ;