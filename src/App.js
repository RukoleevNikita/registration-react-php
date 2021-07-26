import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Main from './components/Main/Main';
import Layout from './components/Layout/Layout';
// import Exit from './components/Exit/Exit';

// import PersonalAccount from './components/PersonalAccount/PersonalAccount'
// import cls from'./Global.module.css';

function App() {

  const isAuth = useSelector(state => state.user.isAuth);

  // const [connected, setConnected] = useState(false);

  // const statusHandler = (state) => {
  //   setConnected(state)
  // } 

  return (
      <BrowserRouter>
        <Layout>
          <Header />
            <Route 
              exact path='/main' 
              render={() => <Main />} 
            />
            {!isAuth &&
              <Switch>
                <Route 
                  path='/login' 
                  // render={() => <Login statusHandler = {statusHandler} />} 
                  render={() => <Login />} 
                />
                <Route 
                  path='/registration' 
                  render={() => <Registration />}  
                />
              </Switch>
          }
        </Layout>
      </BrowserRouter>
  );
}

export default App;
