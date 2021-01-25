import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, CssBaseline } from '@material-ui/core';
import { BrowserRouter,useParams, useHistory, useLocation } from 'react-router-dom';
import dayjs from "dayjs";
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { bookingData } from '../data/bookingData';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
dayjs.extend(weekOfYear);

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
   },
   menu: {
      marginLeft: "64px",
      lineHeight: "100%",
      fontSize: "24px",
      textTransform: "uppercase",
   },
   menuLink: {
      color: "#000000",
      opacity: "0.5",
      fontSize: "24px",
   },
   menuLinkActive: {
      borderBottom: "2px solid #46529D",
      borderRadius: 0,
      color: "#000000",
      fontSize: "24px",
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
   const classes = useStyle();
   const { time } = useParams()
   const history = useHistory()
   const location = useLocation()
   const today = "2019-09-28";

   const [todayList, setTodayList] = useState([]);
   const [allBooking, setAllBooking] = useState([]);

   const searchParams = new URLSearchParams(location.search)
   const roomLabel = searchParams.get('roomId');

   const getBookingForWeek = (roomId, weekNo) => {
      const targetRoom = bookingData.filter(room => room.roomId === roomId);
      const allDay = targetRoom
         .filter(day => dayjs(day.startTime).format("YYYY-MM-DD") === dayjs(weekNo).format("YYYY-MM-DD"));
      const thisWeek = targetRoom
         .filter(day => dayjs(day.startTime).week() === dayjs(weekNo).week());
      const nextWeek = targetRoom
         .filter(day => dayjs(day.startTime).week() === dayjs(weekNo).week() + 1);
      const wholeMonth = targetRoom
         .filter(day => dayjs(day.startTime).month() === dayjs(weekNo).month());

      return { allDay, thisWeek, nextWeek, wholeMonth }
   };

   const groupData = (data) => {
      const result = {};
      for (let i = 0; i < data.length; i++) {
         const start = dayjs(data[i].startTime).format('YYYY-MM-DD');
         if (result[start]) {
            result[start].push(data[i])
         } else {
            result[start] = [data[i]]
         }
      }
      setAllBooking(Object.entries(result));
   };

   const allData = (allTime) => {
      history.push(`/bookings/${allTime}?roomId=${roomLabel}`);

      const { thisWeek, nextWeek, wholeMonth } = getBookingForWeek(roomLabel, today);
      
      if (allTime === "thisweek") {
         groupData(thisWeek);
      } else if (allTime === "nextweek") {
         groupData(nextWeek);
      } else if (allTime === "wholemonth") {
         groupData(wholeMonth);
      }
   };

   useEffect(() => {
      const { allDay } = getBookingForWeek(roomLabel, today);
      setTodayList(allDay);
      allData("thisweek");
   }, [])


   return (
      <Box component="div">
         <CssBaseline />
         <Box component="div" className={classes.container}>
            <Box component="div" className={classes.left}>
               <Box component="div" className={classes.lhDetails}>
                  <Box component="div" className={classes.leftHeader}>
                     <Typography className={classes.roomLabel}>
                        {roomLabel}
                     </Typography>
                  </Box>

                  <Typography className={classes.upComing}>
                     Upcoming
                  </Typography>

                  <Typography className={classes.day}>
                     {dayjs(today).format("dddd")}
                  </Typography>

                  <Typography className={classes.date}>
                     {dayjs(today).format("DD MMM")}
                  </Typography>

                  <Box component="div" className={classes.bookingDetail}>
                     {todayList.map(data =>
                        <Box component="div" className={classes.bookingList}>
                           <Typography className={classes.time}>
                              {dayjs(data.startTime).format("HH.mm")} - {dayjs(data.endTime).format("HH.mm")}
                           </Typography>
                           <Typography className={classes.bookingTitle}>
                              {data.title}
                           </Typography>
                        </Box>
                     )}
                  </Box>
               </Box>
            </Box>

            <Box className={classes.right}>
               <BrowserRouter>
                  <AppBar position="static" className={classes.rightHeader}>
                     <Toolbar>
                        <Button
                           className={time === "thisweek" ? classes.menuLinkActive : classes.menuLink}
                           onClick={() => allData("thisweek")}
                        >
                           this week
                        </Button>
                        <Button
                           className={time === "nextweek" ? classes.menuLinkActive : classes.menuLink}
                           onClick={() => allData("nextweek")}
                        >
                           next week
                        </Button>
                        <Button
                           className={time === "wholemonth" ? classes.menuLinkActive : classes.menuLink}
                           onClick={() => allData("wholemonth")}
                        >
                           whole month
                        </Button>
                     </Toolbar>
                  </AppBar>
               </BrowserRouter>

               <Box component="div">
                  {allBooking.map(data =>
                     <Box component="div">
                        <Box component="div" className={classes.dayLabel}>
                           <Typography className={classes.dateLabel} >
                              {time === "thisweek"? "Today" : ""} {time === "thisweek"? "(" : ""}{dayjs(data[0]).format("ddd, DD MMM")}{time === "thisweek"? ")" : ""}
                           </Typography>
                        </Box>
                        {data[1].map(dataList => 
                        <Box component="div" className={classes.bookingDetailRight}>
                           <Box component="div" className={classes.bookingListRight}>
                              <Box component="div">
                                 <Typography className={classes.marking} style={{ color: "#3DC7D2" }}>
                                    ⬤
                                 </Typography>
                              </Box>
                              <Box component="div" style={{ marginLeft: "30px" }}>
                                 <Typography className={classes.timeRight}>
                                    {dayjs(dataList.startTime).format("HH:mm")} - {dayjs(dataList.endTime).format("HH:mm")}
                                 </Typography>
                                 <Typography className={classes.bookingTitleRight}>
                                    {dataList.title}
                                 </Typography>
                              </Box>
                           </Box>
                        </Box>
                        )}
                     </Box>
                  )}
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

export default BookingPage;
