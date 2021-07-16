//packages
import { Redirect, Route } from 'react-router-dom';
import { IonPage, IonRouterOutlet } from '@ionic/react';
import { connect } from 'react-redux';
//pages
import CharacterListPage from './pages/CharacterListPage/CharacterListPage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import AddCharacterPage from './pages/AddCharacterPage/AddCharacterPage';
import AppMenu from './AppMenu';
//files
import {
  CHARACTER_LIST_ROUTE,
  CHARACTER_ROUTE,
  SETTINGS_ROUTE,
  LOGIN_ROUTE,
  ADD_CHARACTER_ROUTE
} from './routes';
import { AuthInit } from './models';
//styles

interface IProps {
  auth: AuthInit;
}

const PrivateRoutes: React.FC<IProps> = ({ auth }) => {
  const { loggedIn } = auth;

  if (!loggedIn) {
    return <Redirect to={ LOGIN_ROUTE } />
  }

  return (
    <div className="private-routes-containter">
      <AppMenu />
      <IonPage>
        <IonRouterOutlet id="main-content">
          <Route exact path={ CHARACTER_LIST_ROUTE }>
            <CharacterListPage />
          </Route>
          <Route exact path={ CHARACTER_ROUTE }>
            <CharacterPage />
          </Route>
          <Route exact path={ ADD_CHARACTER_ROUTE }>
            <AddCharacterPage />
          </Route>
          <Route exact path={ SETTINGS_ROUTE }>
            <SettingsPage />
          </Route>
        </IonRouterOutlet>
      </IonPage>
  </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth as AuthInit
  }
};

export default connect(mapStateToProps)(PrivateRoutes);
