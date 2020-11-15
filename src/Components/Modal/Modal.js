import React, { useCallback, useState } from 'react';

// material - ui 
import Button from '@material-ui/core/Button';



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

