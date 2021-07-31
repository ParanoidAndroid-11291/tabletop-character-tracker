//packages
import { Redirect, Route } from 'react-router-dom';
import { IonPage, IonRouterOutlet } from '@ionic/react';
import { useAppSelector } from './hooks';
//pages
import CharacterListPage from './pages/CharacterListPage/CharacterListPage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import AddCharacterPage from './pages/AddCharacterPage/AddCharacterPage';
import ResourceMenuPage from './pages/ResourceMenuPage/ResourceMenuPage';
import ResourceEndpointPage from './pages/ResourceEndpointPage/ResourceEndpointPage';
import AbilityScoreIndexPage from './pages/ResourceIndexPages/AbilityScoreIndexPage';
import SkillIndexPage from './pages/ResourceIndexPages/SkillIndexPage';
import AppMenu from './AppMenu';
//files
import {
  CHARACTER_LIST_ROUTE,
  CHARACTER_ROUTE,
  SETTINGS_ROUTE,
  LOGIN_ROUTE,
  ADD_CHARACTER_ROUTE,
  RESOURCE_MENU_ROUTE,
  RESOURCE_ENDPOINT_ROUTE,
  ABILITY_SCORE_INDEX_ROUTE,
  SKILLS_INDEX_ROUTE
} from './routes';
//styles


const PrivateRoutes: React.FC = () => {
  const authState = useAppSelector((state) => state.auth);
  const { loggedIn } = authState;

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
          <Route exact path={ RESOURCE_MENU_ROUTE }>
            <ResourceMenuPage />
          </Route>
          <Route exact path={ RESOURCE_ENDPOINT_ROUTE }>
            <ResourceEndpointPage />
          </Route>
          <Route exact path={ ABILITY_SCORE_INDEX_ROUTE }>
            <AbilityScoreIndexPage />
          </Route>
          <Route exact path={ SKILLS_INDEX_ROUTE }>
            <SkillIndexPage />
          </Route>
        </IonRouterOutlet>
      </IonPage>
  </div>
  );
};


export default PrivateRoutes;
