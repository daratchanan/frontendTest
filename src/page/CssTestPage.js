import '../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function CssTestPage() {

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
         <div className="main-container">
            <div className="headerTitle">
               <p>
                  Everyone's photos
               </p>
               <p>
                  View all {image.length}
               </p>
            </div>
            <div >
               {image.map(pic =>
                  <img key={pic.id} className="picture" src={pic.download_url} />
               )}
            </div>
         </div>
      </>
   );
}

export default CssTestPage;
