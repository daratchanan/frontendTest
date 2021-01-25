import CssTestPage from "./page/CssTestPage";
import BookingPage from "./page/BookingPage";
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import HomePage from "./page/HomePage";



function App() {
   
   return (
      <>
         <BrowserRouter>
            <Switch>
               <Route exact path="/" component={HomePage} />
               <Route path="/csstest" component={CssTestPage} />
               <Route path="/bookings/:time" component={BookingPage} />
            </Switch>
         </BrowserRouter>
      </>
   );
}

export default App;
