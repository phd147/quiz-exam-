import React from 'react';
import {Route,Switch} from 'react-router-dom';


// route 

import Infor from '../src/Containers/Infor/Infor';

import Counter from './Components/Counter/Counter';
import Login from './Containers/Login/login1';

import Student from './Containers/Student/Student';
import Exam from './Containers/Exam/Exam';

import PostQuestion from '../src/Components/PostQuestion/PostQuestion';

import Examming from './Containers/Examing/Examming';

import Result from './Containers/Result/Result';

import SignUp from './Containers/SignUp/SignUp';

import Logout from './Containers/Logout/Logout';

import TestNivo from './Components/TestNivo/TestNivo';


// init Auth from local Storage 
import InitAuth from './Components/InitAuth/InitAuth';

import BlackDrop from '../src/Components/BlackDrop/BlackDrop';

// import Modal from '../src/Components/Modal/Modal';

// css 
import classes from './App.module.css';


class App extends React.Component {
    render(){
        return (
            <div className={classes.app}>   
               
                
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <Route path="/counter" render = {() => <Counter timeOutCmp={<p>Time out</p>} time = {60000}/>}/>
                    
                    <Route path="/student" component={Student}/>
                    <Route path="/exam" component={Exam}/>
                    <Route path="/examming" component={Examming}/>
                    <Route path="/initAuth" component={InitAuth}/>
                    <Route path="/post" component={PostQuestion}/>

                    {/* test  */}
                    <Route path="/blackdrop" component={BlackDrop}/>
                    {/* <Route path="/modal" component={Modal}/> */}
                    <Route path="/result" component={Result}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/logout" component={Logout}/>

                    <Route path="/nivo" component={TestNivo}/>
                    <Route path="/infor" component={Infor}/>

                </Switch>

                
            </div>
           
        )
    }
}

export default App ;