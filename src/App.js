import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Chat from './Chat/Chat'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useState } from 'react';
import Login from './Login/Login'
import {useStateValue} from './Reducers/StateProvider'


function App() {
  
  const[{user}, dispatch] = useStateValue(null)

  return (
    <div className="app">

      {!user ? (
        <Login/>
      ) : (
        <div className='app_body'>
        <Router>
          <Sidebar/>

          <Switch>
            <Route path="/rooms/:roomId">
              <Chat/>
            </Route>
            
            <Route path="/">
              <Chat/>
            </Route>
          </Switch>
        </Router>
      </div>
      )}
      
    </div>
  );
}

export default App;
