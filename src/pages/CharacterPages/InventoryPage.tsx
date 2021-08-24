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

const InventoryPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Inventory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Inventory Page
      </IonContent>
    </IonPage>
    )
}

export default InventoryPage;
