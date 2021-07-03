//packages
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

//pages
import CharacterListPage from './pages/CharacterListPage/CharacterListPage';
import CharacterPage from './pages/CharacterPage/CharacterPage';

//files
import { CHARACTER_LIST_ROUTE, CHARACTER_ROUTE } from './routes';
//styles

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path={ CHARACTER_LIST_ROUTE }>
          <CharacterListPage />
        </Route>
        <Route exact path={ CHARACTER_ROUTE }>
          <CharacterPage />
        </Route>
        <Route exact path="/">
          <Redirect to={ CHARACTER_LIST_ROUTE } />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
