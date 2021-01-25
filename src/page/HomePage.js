import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   root: {
      '& > *': {
         margin: theme.spacing(1),
      },
      marginTop: '50px',
      textAlign: 'center'
   },
}));

export default function HomePage() {
   const classes = useStyles();
   return (
      <>
         <div className={classes.root}>
            <Link to={'/csstest'}>
               <Button variant="contained" color="primary">
                  CssTest
               </Button>
            </Link>
            
         </div>
         <div className={classes.root}>
            <Link to={'/bookings/thisweek?roomId=A101'}>
               <Button variant="contained" color="primary">
                  A101
            </Button>
            </Link>
            <Link to={'/bookings/thisweek?roomId=A102'}>
               <Button variant="contained" color="primary">
                  A102
            </Button>
            </Link>
            <Link to={'/bookings/thisweek?roomId=Auditorium'}>
               <Button variant="contained" color="primary">
                  Auditorium
            </Button>
            </Link>
         </div>
      </>
   )
}