import { makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyle = makeStyles({
   container: {
      backgroundColor: "lightgray",
      padding: " 0 4%"
   },
   header: {
      display: "flex",
      justifyContent: "space-between",
   },
   picture: {
      height: "150px",
      margin: "0 2px",
   },
})

function CssTest() {
   const classes = useStyle();
   const [image, setImage] = useState([]);

   const fetchAllImage = async () => {
      await axios
         .get("https://picsum.photos/v2/list")
         .then(res => {
            setImage(res.data);
         })
         .catch(err => {
            console.log("err");
         })

   }
   useEffect(() => {
      fetchAllImage();
   }, []);


   return (
      <>
         <CssBaseline />
         <div className={classes.container}>
            <div className={classes.header}>
               <Typography variant="body1" component="p">
                  Everyone's photos
            </Typography>
               <Typography variant="body1" component="p">
                  View all {image.length}
               </Typography>
            </div>
            <div>
               {image.map(pic =>
                  <img className={classes.picture} src={pic.download_url} />
               )}
            </div>
         </div>
      </>
   );
}

export default CssTest;
