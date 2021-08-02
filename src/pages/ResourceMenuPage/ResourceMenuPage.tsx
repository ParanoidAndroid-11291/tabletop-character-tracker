//packages
import React from 'react';
import { chevronForwardOutline } from 'ionicons/icons';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/react';
import { RESOURCE_MENU_ROUTE, CHARACTER_LIST_ROUTE } from '../../routes';
//actions

const SettingsPage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={ CHARACTER_LIST_ROUTE }/>
          </IonButtons>
          <IonTitle>Reference</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/ability-scores`}>
            <IonLabel>Ability Scores</IonLabel>
            <IonIcon icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/skills`}>
            <IonLabel>Skills</IonLabel>
            <IonIcon icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/proficiencies`}>
            <IonLabel>Proficiencies</IonLabel>
            <IonIcon icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/languages`}>
            <IonLabel>Languages</IonLabel>
            <IonIcon icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/alignments`}>
            <IonLabel>Alignments</IonLabel>
            <IonIcon icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/backgrounds`}>
            <IonLabel>Backgrounds</IonLabel>
            <IonIcon icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/classes`}>
            <IonLabel>Classes</IonLabel>
            <IonIcon icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/races`}>
            <IonLabel>Races</IonLabel>
            <IonIcon icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/equipment-categories`}>
            <IonLabel>Equipment</IonLabel>
            <IonIcon icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/spells`}>
            <IonLabel>Spells</IonLabel>
            <IonIcon icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/conditions`}>
            <IonLabel>Conditions</IonLabel>
            <IonIcon icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/damage-types`}>
            <IonLabel>Damage Types</IonLabel>
            <IonIcon icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/magic-schools`}>
            <IonLabel>Magic Schools</IonLabel>
            <IonIcon icon={chevronForwardOutline} />
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/rules`}>
            <IonLabel>Rules</IonLabel>
            <IonIcon icon={chevronForwardOutline} />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
