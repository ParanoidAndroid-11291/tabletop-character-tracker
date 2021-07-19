//packages
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { firestore } from '../../firebase';
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
  IonText,
  IonLoading
} from '@ionic/react';
import { add as addIcon } from 'ionicons/icons';
//state
import { getCharacters } from '../../actions/CharacterActions';
import { Character } from '../../actions/CharacterActionTypes';
//files
import { CHARACTER_LIST_ROUTE, ADD_CHARACTER_ROUTE } from '../../routes';
//styles
import './CharacterListPage.css';

const CharacterListPage: React.FC = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const dispatch = useDispatch();
  const authState = useAppSelector((state) => state.auth);
  const characterState = useAppSelector((state) => state.character);
  const { userId } = authState;
  const { characters } = characterState;

  useEffect(() => {
    setIsLoading(true);
    const charactersRef = firestore.collection('users').doc(userId)
      .collection('characters');
    return charactersRef.limit(10).onSnapshot(({ docs }) => {
    const flatCharList = docs.map((doc) => ({ id: doc.id, ...doc.data() } as Character ));
    dispatch(getCharacters(flatCharList));
    setIsLoading(false);
    }, (error) => {
      console.log(error)
      setIsLoading(false);
    });
  },[dispatch])

  const characterList = (characters: Character[]) => {
    return (
      <IonList>
        {characters.map((character) =>
          <IonCard key={character.id} routerLink={`${CHARACTER_LIST_ROUTE}/view/${character.id}`}>
            <IonCardHeader>
              <IonCardTitle>{character.name}</IonCardTitle>
              <IonCardSubtitle>{`Level ${character.level} ${character.race} ${character.playerClass}`}</IonCardSubtitle>
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
        <IonLoading isOpen={isLoading} />
      </IonContent>
    </IonPage>
  );
};

export default CharacterListPage;
