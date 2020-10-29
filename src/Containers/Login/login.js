// import React, { useRef, useState } from 'react'; 
import React from 'react';
import {connect} from 'react-redux';

import * as actionTypes from '../../store/action/actionTypes';

// import {useForm} from 'react-hook-form';


// import {TextField} from '@material-ui/core';

import {submitHandler} from '../../store/action/thunk/login';

import axios from 'axios';

import {Redirect} from 'react-router-dom'






// function login(props){

//     // const [test,setTest] = useState(true);
    
   
//     return (
//         <div>
//             hello
//                 {/* <h2>hello from begin</h2>
//                 <input type="text" placeholder="gmail" ref={mailRef}/>
//                 <input type="password" placeholder="password" ref={passRef}/>
//                 <button onClick={() =>props.submitHandler(mailRef.current.value, passRef.current.value)}>submit</button> */}
//         </div>
//     )
// }

class Login extends React.Component {

    constructor(props){
        super(props);
        this.emailRef = React.createRef();
        this.passRef = React.createRef();

    }

    componentDidMount(){
        
       
    }


    render(){
        return (<div>
            {(this.props.auth && this.props.incommingPath === null) ? <Redirect to="/student"/> : null}
            {(this.props.auth && this.props.incommingPath !== null) ? <Redirect to={`/${this.props.incommingPath}`}/> : null}
             <h1>login</h1>
            <input type="text" placeholder="email" ref={this.emailRef}/>
            <input type="password" placeholder="password" ref={this.passRef} />
            <button onClick={() => this.props.submitHandler(this.emailRef.current.value,this.passRef.current.value)}>submit nao</button>
        </div>  
           
        )
    }
}



const mapStateToProps = state => {
    return {
        auth : state.auth.tokenId !== null ,
        incommingPath : state.route.incommingPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        testHandler : () => dispatch({
            type : actionTypes.TEST
        }),
        submitHandler : (mail,pass) => dispatch(submitHandler(mail,pass))

    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Login) ;