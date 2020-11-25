import React, { useEffect,useState } from 'react';


// props types 
import PropTypes from 'prop-types';





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




// radar nivo component 
// import Radar from '../../Components/Nivo/Radar/Rada';
// import Line from '../../Components/Nivo/Line/Line';

// axios 
import axios from 'axios';

const createData = (stt,name,status,mark) => ({stt,name,status,mark});

const data = [
  {
    "taste": "fruity",
    "chardonay": 47,
    "carmenere": 118,
    "syrah": 61
  },
  {
    "taste": "bitter",
    "chardonay": 91,
    "carmenere": 93,
    "syrah": 51
  },
  {
    "taste": "heavy",
    "chardonay": 109,
    "carmenere": 87,
    "syrah": 65
  },
  {
    "taste": "strong",
    "chardonay": 51,
    "carmenere": 68,
    "syrah": 94
  },
  {
    "taste": "sunny",
    "chardonay": 57,
    "carmenere": 88,
    "syrah": 117
  }
]

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});



// const data = [
//   {
//     "id": "japan",
//     "color": "hsl(279, 70%, 50%)",
//     "data": [
//       {
//         "x": "plane",
//         "y": 41
//       },
//       {
//         "x": "helicopter",
//         "y": 276
//       },
//       {
//         "x": "boat",
//         "y": 49
//       },
//       {
//         "x": "train",
//         "y": 243
//       },
//       {
//         "x": "subway",
//         "y": 39
//       },
//       {
//         "x": "bus",
//         "y": 249
//       },
//       {
//         "x": "car",
//         "y": 285
//       },
//       {
//         "x": "moto",
//         "y": 188
//       },
//       {
//         "x": "bicycle",
//         "y": 255
//       },
//       {
//         "x": "horse",
//         "y": 291
//       },
//       {
//         "x": "skateboard",
//         "y": 56
//       },
//       {
//         "x": "others",
//         "y": 218
//       }
//     ]
//   },
//   {
//     "id": "france",
//     "color": "hsl(181, 70%, 50%)",
//     "data": [
//       {
//         "x": "plane",
//         "y": 257
//       },
//       {
//         "x": "helicopter",
//         "y": 130
//       },
//       {
//         "x": "boat",
//         "y": 22
//       },
//       {
//         "x": "train",
//         "y": 71
//       },
//       {
//         "x": "subway",
//         "y": 123
//       },
//       {
//         "x": "bus",
//         "y": 194
//       },
//       {
//         "x": "car",
//         "y": 54
//       },
//       {
//         "x": "moto",
//         "y": 285
//       },
//       {
//         "x": "bicycle",
//         "y": 43
//       },
//       {
//         "x": "horse",
//         "y": 71
//       },
//       {
//         "x": "skateboard",
//         "y": 204
//       },
//       {
//         "x": "others",
//         "y": 280
//       }
//     ]
//   },
//   {
//     "id": "us",
//     "color": "hsl(121, 70%, 50%)",
//     "data": [
//       {
//         "x": "plane",
//         "y": 269
//       },
//       {
//         "x": "helicopter",
//         "y": 216
//       },
//       {
//         "x": "boat",
//         "y": 57
//       },
//       {
//         "x": "train",
//         "y": 10
//       },
//       {
//         "x": "subway",
//         "y": 276
//       },
//       {
//         "x": "bus",
//         "y": 17
//       },
//       {
//         "x": "car",
//         "y": 34
//       },
//       {
//         "x": "moto",
//         "y": 272
//       },
//       {
//         "x": "bicycle",
//         "y": 200
//       },
//       {
//         "x": "horse",
//         "y": 165
//       },
//       {
//         "x": "skateboard",
//         "y": 70
//       },
//       {
//         "x": "others",
//         "y": 2
//       }
//     ]
//   },
//   {
//     "id": "germany",
//     "color": "hsl(195, 70%, 50%)",
//     "data": [
//       {
//         "x": "plane",
//         "y": 287
//       },
//       {
//         "x": "helicopter",
//         "y": 59
//       },
//       {
//         "x": "boat",
//         "y": 201
//       },
//       {
//         "x": "train",
//         "y": 80
//       },
//       {
//         "x": "subway",
//         "y": 252
//       },
//       {
//         "x": "bus",
//         "y": 76
//       },
//       {
//         "x": "car",
//         "y": 38
//       },
//       {
//         "x": "moto",
//         "y": 11
//       },
//       {
//         "x": "bicycle",
//         "y": 175
//       },
//       {
//         "x": "horse",
//         "y": 148
//       },
//       {
//         "x": "skateboard",
//         "y": 98
//       },
//       {
//         "x": "others",
//         "y": 66
//       }
//     ]
//   },
//   {
//     "id": "norway",
//     "color": "hsl(145, 70%, 50%)",
//     "data": [
//       {
//         "x": "plane",
//         "y": 36
//       },
//       {
//         "x": "helicopter",
//         "y": 200
//       },
//       {
//         "x": "boat",
//         "y": 210
//       },
//       {
//         "x": "train",
//         "y": 197
//       },
//       {
//         "x": "subway",
//         "y": 241
//       },
//       {
//         "x": "bus",
//         "y": 165
//       },
//       {
//         "x": "car",
//         "y": 93
//       },
//       {
//         "x": "moto",
//         "y": 148
//       },
//       {
//         "x": "bicycle",
//         "y": 261
//       },
//       {
//         "x": "horse",
//         "y": 287
//       },
//       {
//         "x": "skateboard",
//         "y": 69
//       },
//       {
//         "x": "others",
//         "y": 194
//       }
//     ]
//   }
// ]

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
  const [value, setValue] = React.useState(0);

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
        }


    },[]);

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
Item Two
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