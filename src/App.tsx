//packages
import { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

//pages
import LoginPage from './pages/LoginPage/LoginPage';
import PrivateRoutes from './PrivateRoutes';

//files
import { AuthContext } from './auth';
import {
  CHARACTER_LIST_ROUTE,
  LOGIN_ROUTE
} from './routes';
//styles

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <IonApp>
      <AuthContext.Provider value={{ loggedIn }}>
        <IonReactRouter>
          <Route exact path={ LOGIN_ROUTE }>
            <LoginPage onLogin={() => setLoggedIn(true)}/>
          </Route>
          <Route path="/my">
            <PrivateRoutes />
          </Route>
          <Route render={() => {
            return loggedIn ?
            <Redirect to={ CHARACTER_LIST_ROUTE } /> :
            <Redirect to={ LOGIN_ROUTE } />
          }}/>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
