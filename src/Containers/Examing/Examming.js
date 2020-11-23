import React from 'react';

import {connect} from 'react-redux';


// redux thunk middleware 
import {fetchQuestion,changeHandler,submitHandler} from '../../store/action/thunk/examming';


// react router 
import {Redirect} from 'react-router-dom'


import Counter from '../../Components/Counter/Counter';

import classes from './Examming.module.css';

// material - ui GRID 
import {Grid,Button} from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// loading component in material ui 
import {CircularProgress} from '@material-ui/core';




// radio material ui .
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


class Examming extends React.Component {


    state = {
        open : false 
    }

    componentDidMount(){
        console.log('component did mount');
        this.props.fetchQuestion(this.props.subject);

        setTimeout(() => {
            this.props.submit(this.props.questionArr,this.props.subject,this.props.userId);

            this.props.history.push('/result');
        },40*60*1000);

        
        
    }

    handlerClose = () => {
        this.setState({
            open : false 
        });
    }


    handlerOpen = () => {
        this.setState({
            open : true  
        })
    }

    handlerAgree = () => {
        this.setState({
            open : false 
        });
        this.props.submit(this.props.questionArr,this.props.subject,this.props.userIdKey);
        this.props.history.push('/result');

    }


    render(){

        let content = null ;
        if(this.props.questionArr.length !== 0){
            content = (
                this.props.questionArr.map((el,id) => {
                    
                    let question = el.question ;

            
                    return (<div className={classes.question} key={el.id}>
                       
                      
                         <FormControl component="fieldset" className={classes.formAnswer} >
                        <FormLabel component="legend"><div><span style={{"color" : "#6c5ce7", "fontWeight":"bold"}}>Question {id+1} </span> : {question}</div> </FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={el.userAnswer} onChange={(event) =>this.props.onChangeHandler(id,event.target.value) }>
                            
                            
                           
                         <div className={classes.inputEl}> <span style={{"fontWeight" : "bold"}}> </span> <FormControlLabel value="A" control={<Radio />} label={` A. ${el.answer['A']}`} /></div>
                         
                         <div className={classes.inputEl}> <span style={{"fontWeight" : "bold"}}> </span><FormControlLabel value="B" control={<Radio />} label={` B. ${el.answer['B']}`} /></div> 
                         <div className={classes.inputEl}><span style={{"fontWeight" : "bold"}}> </span><FormControlLabel value="C" control={<Radio />} label={` C. ${el.answer['C']}`} /></div> 
                         <div className={classes.inputEl}><span style={{"fontWeight" : "bold"}}> </span><FormControlLabel value="D" control={<Radio />} label={` D. ${el.answer['D']}`} /></div> 
                         
                        </RadioGroup>
                      </FormControl>
                    </div>
                       
                    )
                })
            );
        }
        else {
            content = <CircularProgress/>
        }



        console.log('renderingggggggg');
        console.log(this.props.questionArr);

       

       
        

        return (
           
                <div style={{"backgroundColor" : "#F6F7F9",
                "margin" : "0",
                "padding" : "0"
}}>

  
    {!this.props.subject ? <Redirect to="/student"/>: null}
    

    <Counter timeOutCmp={<h1>Time out</h1>} time={40*60*1000}/>
       

       
     <Grid container className={classes.container}>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4} className={classes.title}>
                <h2>Bài thi trắc nghiệm </h2>
                <h3>Môn : {this.props.subject === 'eng'  ? "English" : "Computer Architecture"}</h3>
                <h3>Thời gian : 40 phút</h3>
        </Grid>

        <Grid item xs={12} md={4}></Grid>
     </Grid>
    

        <Grid container className={classes.gridQuestion} >
            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={8} className={this.props.questionArr.length === 0 ? classes.questions : null} >{content}</Grid>
            <Grid item xs={12} md={2}></Grid>

        </Grid>

        <Dialog
            open={this.state.open}
            onClose={this.handlerClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Bạn có chắc nộp bài hay không ?"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                     
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handlerClose} color="primary">
                        Hủy
                </Button>
                <Button onClick={this.handlerAgree} color="primary" autoFocus>
                        Chắc chắn
                    </Button>
                </DialogActions>
        </Dialog>
        <div className={classes.buttonParent}>{this.props.questionArr.length !== 0 ? <Button variant="contained" color="primary" onClick={this.handlerOpen}>Submit</Button> : null}</div>
        
        {/* <button onClick={() => this.props.submit(this.props.questionArr)}>submit my exam</button> */}
      
            </div>
               
           
            
        
           
        )
    }
    componentWillUnmount(){
        this.props.deleteArrQuestion();
    }
}


const mapStateToProps = state => {
    return {
        questionArr : state.examming.questionArr,
        loading : state.examming.loading ,
        subject : state.examming.subject ,
        userId : state.auth.userId,
        done : state.examming.done ,
        userIdKey : state.auth.userIdKey 
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchQuestion : (subject) => dispatch(fetchQuestion(subject)),
        onChangeHandler : (key,value) => dispatch(changeHandler(key,value)),
        submit : (answerArr,subject,userId) => dispatch(submitHandler(answerArr,subject,userId)),
        deleteArrQuestion : () => dispatch({type : 'DELETE_ARR_QUESTION'})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Examming)  ;