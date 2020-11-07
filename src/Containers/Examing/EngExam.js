import React from 'react';

import {connect} from 'react-redux';

import {fetchQuestion,changeHandler,submitHandler} from '../../store/action/thunk/examming';




import Counter from '../../Components/Counter/Counter';

import classes from './Examming.module.css';

// material - ui GRID 
import {Grid,Container,Button} from '@material-ui/core';

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
        this.props.fetchQuestion();

        setTimeout(() => {
            this.props.submit(this.props.questionArr);
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
        this.props.submit(this.props.questionArr);

    }


    render(){

        let content = null ;
        if(this.props.questionArr.length !== 0){
            content = (
                this.props.questionArr.map((el,id) => {
                    
                    let question = el.question ;

                    if([14,15,16,17,22,23,24].includes(id)){
                        const questionArrEl = el.question.split('//');
                        
                    question = <span>{questionArrEl[0]}<u style={{"fontWeight" : "bold"}}>{questionArrEl[1]}</u>{questionArrEl[2]}</span>
                    }
                   

                    return (<div className={classes.question} key={el.id}>
                        {/* {id= 22 ? <h2>Mark the letter A, B, C or D to indicate the underlined part that needs correction in each of the
following questions.</h2> : null} */}

                        {id === 22 ? <div><h2>Read the following passage and mark the letter A, B, C, or D on your answer sheet to indicate the
correct answer to each of the questions.</h2><p style={{"fontSize":"20px"}}>
There was a man who had four sons. He wanted his sons to learn not to judge things too quickly. So he
sent them each on a quest, in turn, to go and look at a pear tree that was a great distance away. The first
son went in the winter, the second in the spring, the third in summer, and the youngest son in the fall.
When they had all gone and come back, he called them together to describe what they had seen.
The first son said that the tree was ugly, bent, and twisted. The second son said no – it was covered with
green buds and full of promise. The third son disagreed, he said it was laden with blossoms that smelled
so sweet and looked so beautiful, it was the most graceful thing he had ever seen. The last son disagreed
with all of them; he said it was ripe and drooping with fruit, full of life and fulfilment.
The man then explained to his sons that they were all right, because they had each seen but one season in
the tree’s life. He told them that you cannot judge a tree, or a person, by only one season, and that the
essence of who they are – and the pleasure, joy, and love that come from that life – can only be measuredTrang 5
at the end, when all the seasons are up. If you give up when it’s winter, you will miss the promise of your
spring, the beauty of your summer, fulfilment of your fall.
Don’t judge a life by one difficult season. Don’t let the pain of one season destroy the joy of all the rest.</p></div> : null}

                        {id === 0 ? <h2>Mark the letter to indicate the correct answer to each of the following questions</h2> : null}
                        {id === 14 ? <h2>Mark the letter A, B, C or D to indicate the word(s) CLOSEST in meaning to the underlined
word(s) in each of the following questions.</h2> : null}
                        {id === 16 ? <h2>Mark the letter A, B, C or D to indicate the word(s) OPPOSITE in meaning to the underlined
word(s) in each of the following questions.</h2>:null}
                            {id === 18 ? <div><h2>Read the following passage and mark the letter A, B, C, or D on your answer sheet to indicate the
correct word or phrase that best fits each of the numbered blanks</h2><p style={{ "fontSize" : "20px"}}>It is natural for young people to be critical of their parents at times and to blame them for most of the (19)
__________ between them. They have always complained, more or less justly, that their parents are oldfashioned, possessive and dominant; that they do not trust their children to deal with obstacles; (20)
___________ they talk too much about certain problems and that they have no sense of humor, at least in
parent-child relationships. I think it is true that parents often (21) _________ their teenage children and
also forget how they themselves felt when young.
Young people often irritate their parents with their choices in clothes and hairstyles, in entertainers and
music. This is not their motive. They feel cut off from the adult world into which they have not yet been
accepted. (22)_________they create a culture and society of their own. Then, if it turns out that their
music or entertainers or vocabulary or clothes or hairstyles irritate their parents, this gives them additional
enjoyment. They feel they are superior, at least in a small way, and that they are leaders in style and taste.
If you plan to control your life, co-operation can be part of that plan. You can charm others, especially
parents, into doing things the ways you want. You can impress others with your sense of responsibility
and (23) _________, so that they will give you the authority to do what you want to do.</p></div>:null}
                         <FormControl component="fieldset" className={classes.formAnswer} >
                        <FormLabel component="legend"><div>Question {id+1} : {question}</div> </FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={el.userAnswer} onChange={(event) =>this.props.onChangeHandler(id,event.target.value) }>
                            
                            
                           
                         <div className={classes.inputEl}> <span style={{"fontWeight" : "bold"}}>A. </span> <FormControlLabel value="A" control={<Radio />} label={el.answer['A']} /></div>
                         
                         <div className={classes.inputEl}> <span style={{"fontWeight" : "bold"}}>B. </span><FormControlLabel value="B" control={<Radio />} label={el.answer['B']} /></div> 
                         <div className={classes.inputEl}><span style={{"fontWeight" : "bold"}}>C. </span><FormControlLabel value="C" control={<Radio />} label={el.answer['C']} /></div> 
                         <div className={classes.inputEl}><span style={{"fontWeight" : "bold"}}>D. </span><FormControlLabel value="D" control={<Radio />} label={el.answer['D']} /></div> 
                         
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
           
                <div style={{"backgroundColor" : "#fff",
                "margin" : "0",
                "padding" : "0"
}}>
    <Counter timeOutCmp={<h1>Time out</h1>} time={40*60*1000}/>
       

       
     <Grid container className={classes.container}>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4} className={classes.title}>
                <h2>Bài thi trắc nghiệm </h2>
                <h3>Môn : Tiếng Anh</h3>
                <h3>Thời gian : 40 phút</h3>
        </Grid>

        <Grid item xs={12} md={4}></Grid>
     </Grid>
    

        <Grid container>
            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={8} className={this.props.questionArr.length===0 ? classes.content : null}>{content}</Grid>
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
}


const mapStateToProps = state => {
    return {
        questionArr : state.examming.questionArr,
        loading : state.examming.loading 
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchQuestion : () => dispatch(fetchQuestion()),
        onChangeHandler : (key,value) => dispatch(changeHandler(key,value)),
        submit : (answerArr) => dispatch(submitHandler(answerArr))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Examming)  ;