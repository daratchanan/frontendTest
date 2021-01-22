import CssTestPage from "./page/CssTestPage";
import BookingPage from "./page/BookingPage";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


function App() {
   
   return (
      <>
         <Router>
            <Switch>
               <Route path="/csstest" component={CssTestPage} />
               <Route path="/bookings/:time" component={BookingPage} />
            </Switch>
         </Router>
      </>
   );
}

export default App;
