import CssTestPage from "./page/CssTestPage";
import BookingPage from "./page/BookingPage";
import { BrowserRouter , Switch, Route} from 'react-router-dom'



function App() {
   
   return (
      <>
         <BrowserRouter>
            <Switch>
               <Route path="/csstest" component={CssTestPage} />
               <Route path="/bookings/:time" component={BookingPage} />
            </Switch>
         </BrowserRouter>
      </>
   );
}

export default App;
