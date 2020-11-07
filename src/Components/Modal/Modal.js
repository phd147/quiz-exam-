import React, { useCallback, useState } from 'react';

// material - ui 
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const Modal = props => {

    const [open,setOpen] = useState(false);

    const handleClickOpen = useCallback(() => {
        setOpen(true);
    },[]);


    const handlerAgree = useCallback(() => {
        console.log('agreement');
        setOpen(false);
    },[]); 

    const handleClose = useCallback(() => {
        setOpen(false);
    },[]);



    return (
        <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
       
      </div>
    )
};


export default Modal ;

