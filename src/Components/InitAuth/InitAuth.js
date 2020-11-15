import React from 'react';

import {connect} from 'react-redux';

import {initAuth} from '../../store/action/thunk/initAuth';

import * as actionTypes from '../../store/action/actionTypes';


class InitAuth extends React.Component {

    componentDidMount(){
        console.log('component did mount [initAuth.js]');

        const expireTime = localStorage.getItem('expireTime');
        const tokenId = localStorage.getItem('tokenId');
        console.log(expireTime - new Date().getTime())
        if(tokenId && (expireTime - new Date().getTime()) > 0){
            console.log('co token id trong localStorage');

            // bo vao state va setTimeout clearToken
           
            this.props.initAuth();

            setTimeout(() => {
                this.props.clearToken();
            },expireTime - new Date().getTime());

           this.props.incomingPath === null ? this.props.history.push('/student') :  this.props.history.push(`/${this.props.incomingPath}`)

            return ;

        }

        this.props.history.push('/')

        
    }

    render(){
        return (
            <h1>init auth ne</h1>
        )
    }
}

const mapStateToProps = state => {
    return {
        incomingPath : state.route.incomingPath
    }
};

const mapDispatchToProps = dispatch => {

    return {
        initAuth : () => dispatch(initAuth()),
        clearToken : () => dispatch({type : actionTypes.CLEAR_TOKEN})
    }

}



export default connect(mapStateToProps,mapDispatchToProps)(InitAuth);