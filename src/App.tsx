//packages
import { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonLoading } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useSelector, useDispatch } from 'react-redux';
//pages
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import PrivateRoutes from './PrivateRoutes';
//actions
import { authChange } from './actions/AuthActions';
//files
import { RootStore } from './store';
import {
  CHARACTER_LIST_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE
} from './routes';
//styles


const App: React.FC = () => {
  const authState = useSelector((state: RootStore) => state.auth );
  const { loading, userId } = authState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authChange());
  },[])

  if (loading) {
    return <IonLoading isOpen />;
  }

  return (
    <IonApp>
      <IonReactRouter>
        <Route exact path={ LOGIN_ROUTE }>
          <LoginPage />
        </Route>
        <Route exact path={ REGISTER_ROUTE }>
          <RegisterPage />
        </Route>
        <Route path="/my">
          <PrivateRoutes />
        </Route>
        <Route render={() => {
          return userId ?
          <Redirect to={ CHARACTER_LIST_ROUTE } /> :
          <Redirect to={ LOGIN_ROUTE } />
        }}/>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
