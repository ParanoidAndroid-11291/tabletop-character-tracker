//packages
import { Redirect, Route } from 'react-router-dom';
import { IonPage, IonRouterOutlet } from '@ionic/react';
import { useAppSelector } from './hooks';
//pages
import CharacterListPage from './pages/CharacterListPage/CharacterListPage';
import CharacterPageTabs from './pages/CharacterPageTabs';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import AddCharacterPage from './pages/AddCharacterPage/AddCharacterPage';
import ResourceMenuPage from './pages/ResourceMenuPage/ResourceMenuPage';
import ResourceEndpointPage from './pages/ResourceEndpointPage/ResourceEndpointPage';
import AbilityScoreIndexPage from './pages/ResourceIndexPages/AbilityScoreIndexPage';
import SkillIndexPage from './pages/ResourceIndexPages/SkillIndexPage';
import ProficiencyIndexPage from './pages/ResourceIndexPages/ProficiencyIndexPage';
import LanguagesIndexPage from './pages/ResourceIndexPages/LanguagesIndexPage';
import AlignmentsIndexPage from './pages/ResourceIndexPages/AlignmentsIndexPage';
import BackgroundIndexPage from './pages/ResourceIndexPages/BackgroundIndexPage';
import AppMenu from './AppMenu';
//files
import {
  CHARACTER_LIST_ROUTE,
  CHARACTER_TABS_ROUTE,
  SETTINGS_ROUTE,
  LOGIN_ROUTE,
  ADD_CHARACTER_ROUTE,
  RESOURCE_MENU_ROUTE,
  RESOURCE_ENDPOINT_ROUTE,
  ABILITY_SCORE_INDEX_ROUTE,
  SKILLS_INDEX_ROUTE,
  PROFICIENCIES_INDEX_ROUTE,
  LANGUAGES_INDEX_ROUTE,
  ALIGNMENTS_INDEX_ROUTE,
  BACKGROUNDS_INDEX_ROUTE
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
          <Route path={ CHARACTER_TABS_ROUTE }>
            <CharacterPageTabs />
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
          <Route exact path={ PROFICIENCIES_INDEX_ROUTE }>
            <ProficiencyIndexPage />
          </Route>
          <Route exact path={ LANGUAGES_INDEX_ROUTE }>
            <LanguagesIndexPage />
          </Route>
          <Route exact path={ ALIGNMENTS_INDEX_ROUTE }>
            <AlignmentsIndexPage />
          </Route>
          <Route exact path={ BACKGROUNDS_INDEX_ROUTE }>
            <BackgroundIndexPage />
          </Route>
        </IonRouterOutlet>
      </IonPage>
  </div>
  );
};


export default PrivateRoutes;
