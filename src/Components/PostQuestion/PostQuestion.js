import React from 'react';


// material ui 

import {TextField,Button} from '@material-ui/core';


// axios 
import axios from 'axios';


class PostQuestion extends React.Component {


    constructor(props){
       super(props);
        this.question = React.createRef();
        this.correct = React.createRef();
        this.a = React.createRef();
        this.b = React.createRef();
        this.c = React.createRef();
        this.d = React.createRef();
    }

    submitHandler = () => {
        console.log(this.a)
        const data = {
            answer : {
                A : this.a.current.value ,
                B : this.b.current.value ,
                C : this.c.current.value ,
                D : this.d.current.value 
            },
            correct : this.correct.current.value ,
            question : this.question.current.value
        };
        console.log(data);

        axios.post('https://quiz-exam-bk.firebaseio.com/eng.json',data);
    }


    render(){
        return (
            <React.Fragment>
                 <h1>post question </h1>
                <TextField inputRef={this.question} label="question"/>
                <TextField inputRef={this.a} label="cau a"/>
                <TextField inputRef={this.b} label="cau b"/>
                <TextField inputRef={this.c} label="cau c"/>
                <TextField inputRef={this.d} label="cau d"/>
                <TextField inputRef={this.correct} label="correct answer"/>
                <Button variant="contained" color="primary" onClick={this.submitHandler}>Submit</Button>
            </React.Fragment>
           
    
        )
    }

    
}



export default PostQuestion ;