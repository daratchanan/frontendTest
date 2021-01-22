import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, CssBaseline } from '@material-ui/core';
import { BrowserRouter, Link, useParams, useHistory, useLocation } from 'react-router-dom';
import bookingData from '../data/booking.json'
import bookings from '../data/booking-js' 

console.log(bookings, ';;;;;bookingzzzzzzz')
const useStyle = makeStyles({
   container: {
      width: "1479px",
      height: "1004px",
      display: "flex",
      margin: "0 auto",
   },
   left: {
      width: "585px",
      height: "1004px",
      background: "#46529D",
      display: "flex",
   },
   lhDetails: {
      marginLeft: "90px",
   },
   leftHeader: {
      width: "495px",
      height: "135px",
      background: "#2EBAEE",
      boxShadow: "0px 4px 32px rgba(57, 64, 111, 0.25)",
      overflow: "hidden",
   },
   roomLabel: {
      marginTop: "56px",
      marginLeft: "48px",
      fontWeight: "bold",
      fontSize: "54px",
      lineHeight: "100%",
      color: "#FFFFFF",
   },
   upComing: {
      marginTop: "125px",
      fontSize: "18px",
      lineHeight: " 100%",
      color: "#FFFFFF",
   },
   day: {
      width: "226px",
      height: "64px",
      marginTop: "58px",
      fontWeight: "300",
      fontSize: "64px",
      lineHeight: "100%",
      color: "#FFFFFF",
      opacity: "0.5",
   },
   date: {
      marginTop: "15px",
      fontWeight: "300",
      fontSize: "64px",
      lineHeight: "100%",
      color: "#FFFFFF",
   },
   bookingDetail: {
      marginTop: "90px",
   },
   bookingList: {
      marginBottom: "38px",
   },
   time: {
      fontSize: "16px",
      lineHeight: "100%",
      color: "#FFFFFF",
      opacity: "0.5",
   },
   bookingTitle: {
      marginTop: "8px",
      fontSize: "20px",
      lineHeight: "100%",
      color: "#FFFFFF",
   },
   right: {
      width: "100%",
      boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.14)",
   },
   rightHeader: {
      height: "135px",
      background: "#EFEEEC",
      display: "flex",
      justifyContent: "flex-end",
      flexDirection: "column",
      paddingBottom: "28px"
   },
   menu: {
      marginLeft: "64px",
      lineHeight: "100%",
      fontSize: "24px",
      textTransform: "uppercase",
   },
   menuLink: {
      textDecoration: "none",

   },
   menuLinkActive: {
      textDecorationLine: "underline"
   },
   menuLinkGap: {
      paddingLeft: "75px",
   },
   dayLabel: {
      marginTop: "78px",
      display: "flex",
      alignItems: "center",
      background: "#F7F7F7",
      border: "1px solid #ECECEC",
      width: "100%",
      height: "47px",
   },
   dateLabel: {
      marginLeft: "94px",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#787878",
      lineHeight: "100%",
   },
   bookingDetailRight: {
      marginTop: "50px",
   },
   bookingListRight: {
      marginBottom: "38px",
      display: "flex",
   },
   marking: {
      marginLeft: "54px",
   },
   timeRight: {
      fontSize: "16px",
      lineHeight: "100%",
      color: "#000",
      opacity: "0.5",
   },
   bookingTitleRight: {
      marginTop: "8px",
      fontSize: "20px",
      lineHeight: "100%",
      color: "#000",
   },
})

function BookingPage() {
   const params = useParams()
   const history = useHistory()
   const location = useLocation()
   
   const searchParams = new URLSearchParams(location.search)
   console.log(searchParams.get('roomId'))
   console.log(searchParams.get('roomType'))
   const classes = useStyle();
   // const [time, setTime] = useState('THIS_WEEK')
   const thisWeekClassName = params.time === 'thisweek' ? `${classes.menuLink} ${classes.menuLinkActive}` : classes.menuLink 
   const nextWeekClassName = params.time === 'nextweek'? 
      `${classes.menuLink} ${classes.menuLinkGap} ${classes.menuLinkActive}`
      : `${classes.menuLink} ${classes.menuLinkGap}` 

   return (
      <Box component="div">
           <CssBaseline />
         <Box component="div" className={classes.container}>
            <Box component="div" className={classes.left}>
               <Box component="div" className={classes.lhDetails}>
                  <Box component="div" className={classes.leftHeader}>
                     <Typography className={classes.roomLabel}>
                        A101
                     </Typography>
                  </Box>

                  <Typography className={classes.upComing}>
                     Upcoming
                  </Typography>

                  <Typography className={classes.day}>
                     Monday
                  </Typography>

                  <Typography className={classes.date}>
                     28 Sep
                  </Typography>

                  <Box component="div" className={classes.bookingDetail}>
                     <Box component="div" className={classes.bookingList}>
                        <Typography className={classes.time}>
                           13.00 - 14.00
                        </Typography>
                        <Typography className={classes.bookingTitle}>
                           Lunch with Petr
                        </Typography>
                     </Box>
                     <Box component="div" className={classes.bookingList}>
                        <Typography className={classes.time}>
                           15.00 - 16.00
                        </Typography>
                        <Typography className={classes.bookingTitle}>
                           Sale Weekly Meeting
                        </Typography>
                     </Box>
                  </Box>
               </Box>
            </Box>

            <Box className={classes.right}>
               <BrowserRouter>
                  <Box component="div" className={classes.rightHeader}>
                     <nav className={classes.menu}>
                        <Link className={thisWeekClassName} to="/bookings/thisweek">this week</Link>
                        {/* Redirect to other page by button */}
                        {/* <button onClick={() => {
                           history.push("/bookings/nextweek")
                        }}>
                           nextweek
                        </button> */}

                        <Link className={nextWeekClassName}  to="/bookings/nextweek">
                              next week
                        </Link>
                        <Link className={`${classes.menuLink} ${classes.menuLinkGap}`}>whole month</Link>
                     </nav>
                  </Box>
               </BrowserRouter>

               <Box component="div">
                  <Box component="div" className={classes.dayLabel}>
                     <Typography className={classes.dateLabel} >
                        Today(Mon,28 Sep)
                  </Typography>
                  </Box>

                  <Box component="div" className={classes.bookingDetailRight}>
                     <Box component="div" className={classes.bookingListRight}>
                        <Box component="div">
                           <Typography className={classes.marking} style={{ color: "#3DC7D2" }}>
                              ⬤
                     </Typography>
                        </Box>
                        <Box component="div" style={{ marginLeft: "30px" }}>
                           <Typography className={classes.timeRight}>
                              13.00 - 14.00
                        </Typography>
                           <Typography className={classes.bookingTitleRight}>
                              Lunch with Petr
                        </Typography>
                        </Box>
                     </Box>
                  </Box>

                  <Box component="div" className={classes.bookingDetailRight}>
                     <Box component="div" className={classes.bookingListRight}>
                        <Box component="div">
                           <Typography className={classes.marking} style={{ color: "#23CF5F" }}>
                              ⬤
                     </Typography>
                        </Box>
                        <Box component="div" style={{ marginLeft: "30px" }}>
                           <Typography className={classes.timeRight}>
                              13.00 - 14.00
                        </Typography>
                           <Typography className={classes.bookingTitleRight}>
                              Lunch with Petr
                        </Typography>
                        </Box>
                     </Box>
                  </Box>
               </Box>

               <Box component="div">
                  <Box component="div" className={classes.dayLabel}>
                     <Typography className={classes.dateLabel} >
                        Tomorrow(Tue,29 Sep)
                  </Typography>
                  </Box>

                  <Box component="div" className={classes.bookingDetailRight}>
                     <Box component="div" className={classes.bookingListRight}>
                        <Box component="div">
                           <Typography className={classes.marking} style={{ color: "#3DC7D2" }}>
                              ⬤
                     </Typography>
                        </Box>
                        <Box component="div" style={{ marginLeft: "30px" }}>
                           <Typography className={classes.timeRight}>
                              13.00 - 14.00
                        </Typography>
                           <Typography className={classes.bookingTitleRight}>
                              Lunch with Petr
                        </Typography>
                        </Box>
                     </Box>
                  </Box>

                  <Box component="div" className={classes.bookingDetailRight}>
                     <Box component="div" className={classes.bookingListRight}>
                        <Box component="div">
                           <Typography className={classes.marking} style={{ color: "#23CF5F" }}>
                              ⬤
                     </Typography>
                        </Box>
                        <Box component="div" style={{ marginLeft: "30px" }}>
                           <Typography className={classes.timeRight}>
                              13.00 - 14.00
                        </Typography>
                           <Typography className={classes.bookingTitleRight}>
                              Lunch with Petr
                        </Typography>
                        </Box>
                     </Box>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

export default BookingPage;