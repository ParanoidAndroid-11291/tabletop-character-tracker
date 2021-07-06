//packages
import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonBackButton
} from '@ionic/react';
//components
//files
import { auth } from '../../firebase';
//styles

const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton
          color="medium"
          expand="block"
          onClick={() => auth.signOut()}>
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
