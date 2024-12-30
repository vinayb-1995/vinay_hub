import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearMessage } from '../Redux/redux'; // import the clearMessage action
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const MessageDisplay = () => {
  const message = useSelector(state => state.cart.message);
  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(clearMessage());
      }, 3000); // Clear the message after 3 seconds

      // Cleanup timer if the component unmounts or message changes
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  return (
    <div className='position-fixed d-flex z-3 fs-4'>
     {/*  {message.includes('is already in the cart.')? (
        <>
        <Alert variant="filled" severity="warning">
            {message}
        </Alert>
        </>
      ) : ( */}{(
        message.length>0?(
            <>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            {message}
        </Alert>
           </>
        ):null
      )}
    </div>
  );
};

export default MessageDisplay;
