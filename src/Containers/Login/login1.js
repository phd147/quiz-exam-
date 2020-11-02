// import React, { useRef, useState } from 'react'; 
import React, {  useRef} from 'react';

import {useSelector,useDispatch} from 'react-redux';



// import {useForm} from 'react-hook-form';


// import {TextField} from '@material-ui/core';

import {submitHandler} from '../../store/action/thunk/login';

import {Redirect} from 'react-router-dom';




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

const Login = props =>  {

    // constructor(props){
    //     super(props);
    //     this.emailRef = React.createRef();
    //     this.passRef = React.createRef();

    // }

    // componentDidMount(){
    //     console.log('hello');
       
    // }

    const emailRef = useRef();
    const passwordRef = useRef();


    const dispatch = useDispatch();
    const auth = useSelector(state=> state.auth.tokenId !==null );
    const incomingPath = useSelector(state => state.route.incomingPath);


    
        return (<div>
            {(auth && incomingPath === null) ? <Redirect to="/student"/> : null}
            {(auth && incomingPath !== null) ? <Redirect to={`/${incomingPath}`}/> : null}
             <h1>login</h1>
            <input type="text" placeholder="email" ref={emailRef}/>
            <input type="password" placeholder="password" ref={passwordRef} />
            <button onClick={() => dispatch(submitHandler(emailRef.current.value,passwordRef.current.value))}>submit nao</button>
        </div>  
           
        )
   
}





export default Login ;