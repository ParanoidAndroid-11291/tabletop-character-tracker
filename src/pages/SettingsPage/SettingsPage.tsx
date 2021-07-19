//packages
import React from 'react';
import { useDispatch } from 'react-redux';
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
//actions
import { resetCharacterState } from '../../actions/CharacterActions';
//files
import { auth } from '../../firebase';
//styles

const SettingsPage: React.FC = () => {
const dispatch = useDispatch();
const handleLogout = () => {
  dispatch(resetCharacterState());
  auth.signOut();
}

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
          onClick={handleLogout}>
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
