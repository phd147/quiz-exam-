import React, { useEffect,useState } from 'react';

import {useDispatch,useSelector} from 'react-redux';

import * as actionTypes from '../../store/action/actionTypes';

import {useHistory} from 'react-router-dom';

import classes from './Infor.module.css';

// material ui 
import {Paper,Grid,CircularProgress} from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// axios 
import axios from 'axios';

const createData = (stt,name,status,mark) => ({stt,name,status,mark});



const Infor = props => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [listSubject,setListSubject] = useState([]);

    const auth = useSelector(state => state.auth.tokenId);
    const userIdKey = useSelector(state => state.auth.userIdKey);

   


    console.log('renderingggggg Infor.js');
    console.log(auth);
    console.log(userIdKey);
    console.log(listSubject);

    const rows = [];
    if(listSubject.length !== 0 ){
        for(let i = 0; i< listSubject.length ; i++){
            rows.push(createData(i+1,listSubject[i].fullname,listSubject[i].isTest ? "ĐÃ THI" : "CHƯA THI",listSubject[i].isTest ?listSubject[i].mark : "CHƯA CÓ DỮ LIỆU" ));
        }
    }
    console.log(rows);



    useEffect(() => {
        
        if(!auth){
            dispatch({type : actionTypes.CHANGE_ROUTE, path: 'infor' });
            history.push('/initAuth');
        }


    },[history,dispatch,auth]);

    useEffect( () => {
        console.log('component did mount')
       axios.get(`https://quiz-exam-bk.firebaseio.com/user/${userIdKey}/subject.json`)
        .then(data => {
            const subjectState = [] ;
            for(let key in data.data){
                subjectState.push({
                    id : key ,
                    isTest : data.data[key].isTest ,
                    mark : data.data[key].mark,
                    fullname : data.data[key].fullname
                })
            };
            setListSubject(subjectState)

        })
       
    },[userIdKey]);


    return (
        <div className={classes.Infor}>
            <Grid container>
                <Grid item xs={12} md={4}></Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} className={classes.subjects}>
                        {listSubject.length  === 0 ? <CircularProgress/> : null}
                        {listSubject.length !== 0 ? 
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell align="right">Subject</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Mark</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.stt}>
              <TableCell component="th" scope="row">
                {row.stt}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.mark}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> : null}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}></Grid>

            </Grid>
        </div>
    )
};


export default Infor ;