import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Login from './login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { useState } from 'react';

function App() {
  console.log('Rendering App component');
  const [user, setUser] = useState(null);
  // console.log(user);
  return (
    <div className="App">
      <Router>
        {/* {header} */}
        {/* {!user ? (
          // <h1>dhd</h1>
          <Login />
        ) : (
          <> */}
            <Header />

            <div className='app__body'>
              {/* {side bar} */}
              <Sidebar />
              {/* {React-Router -> Chat Screen} */}

              <Switch>
                <Route path="/:roomId">
                  {/* <h1>Chat Screen</h1> */}
                  <Chat />
                </Route>

                <Route path="/">
                  <h1>Welcome</h1>
                  {/* <Chat/> */}
                </Route>
              </Switch>

            </div>
          {/* </>
        )} */}
      </Router>
    </div>
  );
}


export default App;
