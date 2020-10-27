import React from 'react';


import {NavLink} from 'react-router-dom';

// redux 
import {connect} from 'react-redux';

//action 
import {fetchUser} from '../../store/action/thunk/exam';


class Exam extends React.Component {
    render(){
        return (<div>
             {this.props.isTestMark} <NavLink to="/examming" >
                examming
            </NavLink>
        </div>
          
        )
    }

    componentDidMount(){
        console.log('component did mount  user id ' + this.props.userId);
       this.props.fetchUser(this.props.userId);
    }



}

const mapStateToProps = state => {
    return {
        userId : state.auth.userId
    }

}


const mapDispatchToProps = dispatch => {
    return {
        fetchUser : (userId) => dispatch(fetchUser(userId))
    }
}






export default connect(mapStateToProps,mapDispatchToProps)(Exam) ;