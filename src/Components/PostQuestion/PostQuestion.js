import React from 'react';


// material ui 

import {TextField,Button} from '@material-ui/core';


// axios 
import axios from 'axios';


// classes CSS Modules 
import classes from './PostQuestion.module.css';


class PostQuestion extends React.Component {





    constructor(props){
       super(props);
        this.question = React.createRef();
        this.correct = React.createRef();
        this.a = React.createRef();
        this.b = React.createRef();
        this.c = React.createRef();
        this.d = React.createRef();


        this.state = {
            success : 'proccessing' 
        }
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

        

        
            axios.post('https://quiz-exam-bk.firebaseio.com/rev.json',data).then(data => {
                this.setState({success : "okkkk"});
                this.a.current.value = '';
                this.b.current.value = '';
                this.c.current.value = '';
                this.d.current.value = '';
                this.question.current.value = '';
                this.correct.current.value = '';
                setTimeout(() => {
                    this.setState({success: "next"})
                },2000)
            }).catch(err => {
                this.setState({success : "faillll"})
            });
        

       
    }


    render(){
        return (
           <div className={classes.container}>
                 <h1 className={classes.child}>post question </h1>
                <TextField style={{
                    "margin" : "20px"
                }}  multiline rows={5} inputRef={this.question} label="question"/>
                <TextField  style={{
                    "margin" : "20px"
                }} inputRef={this.a} label="cau a"/>
                <TextField  style={{
                    "margin" : "20px"
                }} className={classes.child}inputRef={this.b} label="cau b"/>
                <TextField style={{
                    "margin" : "20px"
                }} inputRef={this.c} label="cau c"/>
                <TextField style={{
                    "margin" : "20px"
                }}  inputRef={this.d} label="cau d"/>
                <TextField style={{
                    "margin" : "20px"
                }}  inputRef={this.correct} label="correct answer"/>
                <Button style={{
                    "margin" : "20px"
                }} variant="contained" color="primary" onClick={this.submitHandler}>Submit</Button>
        <div style={{
            "position": "fixed",
            "top" : "30%",
            "left" : "50%",
            "width" : "200px",
            "fontSize" : "40px",
            "color" : "red"
        }}>{this.state.success}</div>
           </div>
          
    
        )
    }

    
}



export default PostQuestion ;



