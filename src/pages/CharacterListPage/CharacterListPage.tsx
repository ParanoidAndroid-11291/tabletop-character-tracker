//packages
import { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButtons,
  IonMenuButton,
  IonFab,
  IonFabButton,
  IonIcon,
  IonText
} from '@ionic/react';
import { add as addIcon } from 'ionicons/icons';
import { firestore } from '../../firebase';
//pages
//files
import { CHARACTER_LIST_ROUTE, ADD_CHARACTER_ROUTE } from '../../routes';
import { useAuth } from '../../auth';
import { Character, toCharacter } from '../../models';
//styles
import './CharacterListPage.css';

const CharacterListPage: React.FC = () => {
  const [ characters, setCharacters ] = useState<Character[]>([]);
  const { userId } = useAuth();
  useEffect(() => {
    const charactersRef = firestore.collection('users').doc(userId)
      .collection('characters');
    return charactersRef.limit(10).onSnapshot(({ docs }) => setCharacters(docs.map(toCharacter)));
  },[userId])

  const characterList = (characters: Character[]) => {
    return (
      <IonList>
        {characters.map((character) =>
          <IonCard key={character.id} routerLink={`${CHARACTER_LIST_ROUTE}/view/${character.id}`}>
            <IonCardHeader>
              <IonCardTitle>{character.name}</IonCardTitle>
              <IonCardSubtitle>{`Level ${character.level} ${character.race} ${character.class}`}</IonCardSubtitle>
            </IonCardHeader>
          </IonCard>
        )}
      </IonList>
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>My Characters</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        { characters.length > 0 ?
          characterList(characters) :
          <IonText>
            <h3>Add a character</h3>
          </IonText>
        }
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerLink={ ADD_CHARACTER_ROUTE }>
            <IonIcon icon={addIcon} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default CharacterListPage;
