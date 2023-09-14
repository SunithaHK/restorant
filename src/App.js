// import logo from './logo.svg';
import Addfood from './components/Addfood';
import './components/Foodlist';
import Navbar from './components/Navbar';
import Orders from './components/Orders';
import Home from './components/Home';
import Search from './components/Search';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Fooddetails from './components/Fooddetails';
import UpdateFood from './components/updateFood';
import Signup from './Validation/Signup';
function App() {

  return (<>
   < Router>
   <div className='app'>
<Navbar></Navbar>
<Switch>
 < Route exact path="/"><Home/></Route> 
  < Route exact path="/signup"><Signup/></Route> 
  <Route path="/addfood"><Addfood/></Route>
  <Route path="/updateFood:id"><UpdateFood/></Route>
 < Route path="/orders"> <Orders/></Route>
 <Route path="/search:int"><Search/></Route>
  <Route path="/fooddetails:id"><Fooddetails/></Route>
    </Switch>
    </div>
    </Router>
    </>
      );
}

export default App;
