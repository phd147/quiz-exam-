import React, {useEffect} from 'react';
import axios from 'axios';

const NotFound = props => {
    
    useEffect(() => {

        const fullname = 'Revolutionary';
        const briefName = 'rev';

        axios.get('https://quiz-exam-bk.firebaseio.com/user.json').then(
            data => {
                console.log(data);
                const objUser = {};
                const start = new Date().getTime();
                for(let key in data.data){
                    objUser[key] = {
                        ...data.data[key],
                        subject : {
                            ...data.data[key].subject,
                            [briefName] : {
                                isTest : false,
                                mark : 0,
                                fullname : fullname
                            }
                        }
                    }
                };
                const end = new Date().getTime();
                console.log(end - start);
                console.log(objUser);
                axios.patch('https://quiz-exam-bk.firebaseio.com/user.json',objUser);
            }
        )
    },[])



    return (<div>
        <h1>Not found</h1>
    </div>)
}   


export default NotFound;