import React from 'react';



class Counter extends React.Component {

   constructor(props){
        super(props);
        this.state = {
            remainingTime : this.props.time ,
            timeout : false 
        }
   }

  



   shouldComponentUpdate(props,state){
        if(state.remainingTime === 0 && state.timeout === false ){
            clearInterval(this.timer);
            this.setState({
                timeout : true 
            })
            return false ;
        }
      return true ;
   }





    render(){
        let minutes = Math.floor((this.state.remainingTime/ 60000));
        
        let seconds = (this.state.remainingTime - minutes * 60000) /1000;

        if(minutes < 10) minutes = '0' +minutes ;
        if(seconds < 10) seconds = '0' + seconds ;


        return (
            <div>
                {this.state.timeout ? this.props.timeOutCmp : <p>{minutes} : {seconds}</p> }
            </div>
        )

    }   
    componentDidMount(){
       this.timer = setInterval(() => {
           console.log(this.state.remainingTime);
           this.setState( prevState => ({remainingTime : prevState.remainingTime - 1000}))
       },1000);
    }


}


export default Counter ;
