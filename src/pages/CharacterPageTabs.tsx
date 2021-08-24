import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { diamondOutline, shieldOutline } from 'ionicons/icons'
import React from 'react';
import { Route } from 'react-router-dom';
import { useParams } from 'react-router';
import { useAppSelector } from '../hooks';

import {
  CHARACTER_ROUTE,
  CHARACTER_TABS_ROUTE,
  CHARACTER_INVENTORY_ROUTE,
  CHARACTER_BATTLE_ROUTE
} from '../routes';

import CharacterPage from './CharacterPages/CharacterPage';
import InventoryPage from './CharacterPages/InventoryPage';
import BattlePage from './CharacterPages/BattlePage';

const CharacterPageTabs: React.FC = () => {
  const charState = useAppSelector((state) => state.character);

  const { character } = charState;

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path={ CHARACTER_ROUTE }>
          <CharacterPage />
        </Route>
        <Route exact path={ CHARACTER_INVENTORY_ROUTE }>
          <InventoryPage />
        </Route>
        <Route exact path={ CHARACTER_BATTLE_ROUTE }>
          <BattlePage />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="inventory" href={ `${CHARACTER_TABS_ROUTE}/${character.id}/inventory` }>
          <IonIcon icon={ diamondOutline } />
          <IonLabel>Inventory</IonLabel>
        </IonTabButton>
        <IonTabButton tab="battle" href={ `${CHARACTER_TABS_ROUTE}/${character.id}/battle` }>
          <IonIcon icon={ shieldOutline } />
          <IonLabel>Battle</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default CharacterPageTabs;
