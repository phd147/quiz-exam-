import React from  'react';


// import Lottie Component 
import Lottie from 'react-lottie';


// import navlink 


// import json file animations 
import animationData from '../../lotties/404.json';
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };



const NotFound = props => {
    
    // useEffect(() => {

    //     const fullname = 'Revolutionary';
    //     const briefName = 'rev';

    //     axios.get('https://quiz-exam-bk.firebaseio.com/user.json').then(
    //         data => {
    //             console.log(data);
    //             const objUser = {};
    //             const start = new Date().getTime();
    //             for(let key in data.data){
    //                 objUser[key] = {
    //                     ...data.data[key],
    //                     subject : {
    //                         ...data.data[key].subject,
    //                         [briefName] : {
    //                             isTest : false,
    //                             mark : 0,
    //                             fullname : fullname
    //                         }
    //                     }
    //                 }
    //             };
    //             const end = new Date().getTime();
    //             console.log(end - start);
    //             console.log(objUser);
    //             axios.patch('https://quiz-exam-bk.firebaseio.com/user.json',objUser);
    //         }
    //     )
    // },[])



    return (<div>
         <Lottie options={defaultOptions}
              height={400}
              width={400}
        />
       

    </div>)
}   


export default NotFound;





