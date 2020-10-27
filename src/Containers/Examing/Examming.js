import React from 'react';

import {connect} from 'react-redux';

import {fetchQuestion,changeHandler,submitHandler} from '../../store/action/thunk/examming';


import Counter from '../../Components/Counter/Counter';


// radio material ui .
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';







class Examming extends React.Component {







    componentDidMount(){
        this.props.fetchQuestion();
        
    }




    render(){

        let content = null ;
        if(this.props.questionArr.length !== 0){
            content = (
                this.props.questionArr.map((el,id,els) => {
                    return (<div key={el.id}>
                         <FormControl component="fieldset">
                        <FormLabel component="legend">{` Câu ${id+1} : ${el.question}`}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={el.userAnswer} onChange={(event) =>this.props.onChangeHandler(id,event.target.value) }>
                          <FormControlLabel value="A" control={<Radio />} label={el.answer['A']} />
                          <FormControlLabel value="B" control={<Radio />} label={el.answer['B']} />
                          <FormControlLabel value="C" control={<Radio />} label={el.answer['C']} />
                          <FormControlLabel value="D" control={<Radio />} label={el.answer['D']} />
                        </RadioGroup>
                      </FormControl>
                    </div>
                       
                    )
                })
            );
        }



        console.log('renderingggggggg');
        console.log(this.props.questionArr);
        return (
            <div>
                <Counter timeOutCmp={<h1>Time out</h1>} time={60000}/>
                 <h2>examming </h2>
                    {content}
                    
                    <button onClick={() => this.props.submit(this.props.questionArr)}>submit my exam</button>
            </div>
           
        )
    }
}


const mapStateToProps = state => {
    return {
        questionArr : state.examming.questionArr
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