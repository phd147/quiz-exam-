import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Counter from './Components/Counter/Counter';
import Login from './Containers/Login/login1';

import Student from './Containers/Student/Student';
import Exam from './Containers/Exam/Exam';

import PostQuestion from '../src/Components/PostQuestion/PostQuestion';

import Examming from './Containers/Examing/EngExam';

// init Auth from local Storage 
import InitAuth from './Components/InitAuth/InitAuth';

import BlackDrop from '../src/Components/BlackDrop/BlackDrop';

import Modal from '../src/Components/Modal/Modal';


class App extends React.Component {
    render(){
        return (
            <div>   
               
                
                <Switch>
                    <Route path="/counter" render = {() => <Counter timeOutCmp={<p>Time out</p>} time = {60000}/>}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/student" component={Student}/>
                    <Route path="/exam" component={Exam}/>
                    <Route path="/examming" component={Examming}/>
                    <Route path="/initAuth" component={InitAuth}/>
                    <Route path="/post" component={PostQuestion}/>

                    {/* test  */}
                    <Route path="/blackdrop" component={BlackDrop}/>
                    <Route path="/modal" component={Modal}/>
                </Switch>

                
            </div>
           
        )
    }
}

export default App ;