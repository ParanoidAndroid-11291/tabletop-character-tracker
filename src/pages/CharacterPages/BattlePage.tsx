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
import { useParams } from 'react-router';
import { CHARACTER_TABS_ROUTE } from '../../routes';
//import { getCharacter } from '../../actions/CharacterActions';

const BattlePage: React.FC = () => {
  const { id } = useParams() as {
    id: string;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={`${ CHARACTER_TABS_ROUTE }/${id}`}/>
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
