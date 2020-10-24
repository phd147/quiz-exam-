import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Counter from './Components/Counter/Counter';
import Login from './Containers/Login/login';

import Student from './Containers/Student/Student';
import Exam from './Containers/Exam/Exam';

import Examming from './Containers/Examing/Examming';


class App extends React.Component {
    render(){
        return (
            <div>
                <h1>hello world</h1>
                <Switch>
                    <Route path="/counter" render = {() => <Counter timeOutCmp={<p>Time out</p>} time = {60000}/>}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/student" component={Student}/>
                    <Route path="/exam" component={Exam}/>
                    <Route path="/examming" component={Examming}/>
                </Switch>
                
            </div>
           
        )
    }
}

export default App ;