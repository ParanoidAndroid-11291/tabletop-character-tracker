//packages
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
//pages
//files
import { characters } from '../../characters';
//styles
const CharacterPage: React.FC = () => {
  const { id } = useParams() as {
    id: string
  };

  const character = characters.find((character) => character.id === id);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
          <IonTitle>{character.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {`This is a character page for ${character.name}`}
      </IonContent>
    </IonPage>
  );
};

export default CharacterPage;
