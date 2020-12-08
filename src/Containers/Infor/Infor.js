import React, { useEffect,useState } from 'react';


// props types 
import PropTypes from 'prop-types';

// vivooooooooooo
import Radar from '../../Components/Nivo/Radar/Rada';




import {useDispatch,useSelector} from 'react-redux';

import * as actionTypes from '../../store/action/actionTypes';

import {useHistory} from 'react-router-dom';

import classes from './Infor.module.css';

//back button 
import BackButton from '../../Components/BackButton/BackButton';

// material ui 
import {Paper,Grid,CircularProgress,Container} from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Box from '@material-ui/core/Box';





// axios 
import axios from 'axios';

const createData = (stt,name,status,mark) => ({stt,name,status,mark});




// const data = [
//   {
//     "taste": "fruity",
//     "chardonay": 47,
//     "carmenere": 118,
//     "syrah": 61
//   },
//   {
//     "taste": "bitter",
//     "chardonay": 91,
//     "carmenere": 93,
//     "syrah": 51
//   },
//   {
//     "taste": "heavy",
//     "chardonay": 109,
//     "carmenere": 87,
//     "syrah": 65
//   },
//   {
//     "taste": "strong",
//     "chardonay": 51,
//     "carmenere": 68,
//     "syrah": 94
//   },
//   {
//     "taste": "sunny",
//     "chardonay": 57,
//     "carmenere": 88,
//     "syrah": 117
//   }
// ];


// const subjects = ['chardonay','carmenere','syrah'];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});




// TAB PANEL 
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};




function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const Infor = props => {

  const classesMaterialUI = useStyles();
  const [value, setValue] = useState(0);
  const [data,setData] = useState([]);
  const [subjects,setSubjects] = useState([]);
   const maxValue = 10 ;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




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
            return ;
        }

        axios.get(`https://quiz-exam-bk.firebaseio.com/user/${userIdKey}/subject.json`)
        .then(data => {
            const subjectState = [] ;
            const dataOfVisualization = [];
            const subjectList = [];
            for(let key in data.data){
                subjectState.push({
                    id : key ,
                    isTest : data.data[key].isTest ,
                    mark : data.data[key].mark,
                    fullname : data.data[key].fullname
                });
                dataOfVisualization.push({
                  "taste": data.data[key].fullname,
                  "you" : data.data[key].mark
                });
                subjectList.push(data.data[key].fullname)
            };
            setListSubject(subjectState);
            setData(dataOfVisualization);
            setSubjects(['you']);
            
            


        })

    },[userIdKey]);


    




    useEffect( () => {

      
        console.log('component did mount')
      
       
    },[userIdKey]);


    return (
        <div className={classes.Infor}>
            <BackButton path="/student"/>

              <div className={classes.main}>
              <Container >

            
           
<Grid container >
  <Grid item xs={12} md={2}>

  </Grid>
  <Grid item xs={12} md={8}>
  <AppBar position="static">
<Tabs variant="fullWidth" centered value={value} onChange={handleChange} aria-label="simple tabs example">
<Tab label="Mark Table" {...a11yProps(0)} />
<Tab label="Mark Visualization" {...a11yProps(1)} />

</Tabs>
</AppBar>
<TabPanel value={value} index={0}>
<Paper elevation={3} className={classes.subjects} style={{"width":"100%","display":"flex","justifyContent":"center"}}>
            {listSubject.length  === 0 ? <CircularProgress/> : null}
            {listSubject.length !== 0 ? 
        <TableContainer component={Paper}>
            <Table className={classesMaterialUI.table} aria-label="simple table">
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
</TabPanel>
<TabPanel value={value} index={1}>
  <Paper elevation={3} style={{"height":"400px"}}>
  <Radar data={data} subjects={subjects} maxValue={maxValue}/>
  </Paper>
</TabPanel> 

  </Grid>
  <Grid item xs={12} md={2}>
  
    </Grid>
</Grid>
</Container>
              </div>

           
        </div>
    )
};


export default Infor ;