//packages
import React from 'react';
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
            <IonLabel color="primary">Ability Scores</IonLabel>
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/skills`}>
            <IonLabel color="primary">Skills</IonLabel>
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/proficiencies`}>
            <IonLabel color="primary">Proficiencies</IonLabel>
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/languages`}>
            <IonLabel color="primary">Languages</IonLabel>
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/alignments`}>
            <IonLabel color="primary">Alignments</IonLabel>
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/backgrounds`}>
            <IonLabel color="primary">Backgrounds</IonLabel>
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/classes`}>
            <IonLabel color="primary">Classes</IonLabel>
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/races`}>
            <IonLabel color="primary">Races</IonLabel>
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/equipment-categories`}>
            <IonLabel color="primary">Equipment</IonLabel>
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/spells`}>
            <IonLabel color="primary">Spells</IonLabel>
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/conditions`}>
            <IonLabel color="primary">Conditions</IonLabel>
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/damage-types`}>
            <IonLabel color="primary">Damage Types</IonLabel>
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/magic-schools`}>
            <IonLabel color="primary">Magic Schools</IonLabel>
          </IonItem>
          <IonItem routerLink={`${RESOURCE_MENU_ROUTE}/view/rules`}>
            <IonLabel color="primary">Rules</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
