//packages
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonLoading } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

//pages
import LoginPage from './pages/LoginPage/LoginPage';
import PrivateRoutes from './PrivateRoutes';

//files
import { AuthContext, useAuthInit } from './auth';
import {
  CHARACTER_LIST_ROUTE,
  LOGIN_ROUTE
} from './routes';
//styles

const App: React.FC = () => {
  const { loading, auth } = useAuthInit();

  if (loading) {
    return <IonLoading isOpen />;
  }

  return (
    <IonApp>
      <AuthContext.Provider value={auth}>
        <IonReactRouter>
          <Route exact path={ LOGIN_ROUTE }>
            <LoginPage />
          </Route>
          <Route path="/my">
            <PrivateRoutes />
          </Route>
          <Route render={() => {
            return auth ?
            <Redirect to={ CHARACTER_LIST_ROUTE } /> :
            <Redirect to={ LOGIN_ROUTE } />
          }}/>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
