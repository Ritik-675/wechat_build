import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      {/* {header} */}
      <Header />

      <div className='app__body'>
      {/* {side bar} */}
      <Sidebar />
      {/* {React-Router -> Chat Screen} */}
      </div>
    </div>
  );
}

export default App;
