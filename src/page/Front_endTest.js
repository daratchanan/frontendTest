import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyle = makeStyles({
   // mainContainer: {
   //    width: "1671px",
   //    height: "1253px",
   //    background: "radial - gradient(75.44 % 75.44 % at 30.03 % 0 %, rgba(255, 255, 255, 0.2) 0 %, rgba(255, 255, 255, 0) 100 %), linear- gradient(236.58deg, #BCBFC8 10.31 %, #91A2C6 90.59 %), #B9BDC8",
   // },
   container: {
      width: "1479px",
      height: "1004px",
      display: "flex",
      //margin: "123px 0 126px 96px",
      margin: "0 auto",
      background: "#EFEEEC",
   },
   left: {
      width: "585px",
      height: "1004px",
      background: "#46529D",
   },
   leftHeader: {
      width: "495px",
      height: "135px",
      marginLeft: "90px",
      background: "#2EBAEE",
      boxShadow: "0px 4px 32px rgba(57, 64, 111, 0.25)",
   },
   room: {
      width: "130px",
      height: "54px",
      paddingTop: "56px",
      paddingLeft:"48px",
      fontFamily: "Roboto",
      fontSstyle: "normal",
      fontWeight: "bold",
      fontSize: "54px",
      lineHeight: "100%",
      color: "#FFFFFF",
   },
   right: {
      width: "100%",
      background: "#FFFFFF",
      boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.14)",
   },
   rightHeader: {
      height: "135px",
      background: "#EFEEEC",
   },
   week: {
      paddingTop: "83px",
      paddingLeft: "200px"
   },
   today: {
      background: "#F7F7F7",
      border: "1px solid #ECECEC",
      boxSizing: "border-box",
      position: "absolute",
      width: "893px",
      height: "47px",
      left: "682px",
      top: "336px",
   }

})


function Front_endTest() {
   const classes = useStyle();

   return (
      <div >
         <div className={classes.container}>
            <div className={classes.left}>
               <div className={classes.leftHeader}>
                  <Typography variant="h3" className={classes.room}>
                     A101
                  </Typography>
               </div>
               <div>
                  <p>Upcoming</p>
                  <h1>Monday</h1>
                  <h2>28 sep</h2>
               </div>
               <div>
                  <div>
                     <p>13.00 - 14.00</p>
                     <p>Lunch with Petr</p>
                  </div>

               </div>
            </div>

            <div className={classes.right}>
               <AppBar position="static" className={classes.rightHeader} elevation={1}>
                  <Toolbar className={classes.week}>
                     <Button >this week</Button>
                     <Button >next week</Button>
                     <Button >whole month</Button>
                  </Toolbar>
               </AppBar>
               <div >
                  <Typography variant="body2" >
                     today(Mon,28 Sep)
               </Typography>
               </div>
            </div>


         </div>
      </div>
   )
}

export default Front_endTest;
