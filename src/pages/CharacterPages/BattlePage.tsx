import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonButtons,
  IonBackButton
} from '@ionic/react';
import React from 'react';
//import { useParams } from 'react-router';
//import { getCharacter } from '../../actions/CharacterActions';

const BattlePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Battle</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Battle Page
      </IonContent>
    </IonPage>
    )
}

export default BattlePage;
