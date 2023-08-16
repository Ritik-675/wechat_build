import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  console.log('Rendering App component');
  return (
    <div className="App">
      <Router>
        {/* {header} */}
        <Header />

        <div className='app__body'>
        {/* {side bar} */}
        <Sidebar />
        {/* {React-Router -> Chat Screen} */}
        
        <Switch>
          <Route path="/:roomId">
          {/* <h1>Chat Screen</h1> */}
          <Chat/>
          </Route>

          <Route path="/">
          <h1>Welcome</h1>
          {/* <Chat/> */}
          </Route>
        </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
