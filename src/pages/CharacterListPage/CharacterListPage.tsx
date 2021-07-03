//packages
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
  IonCardSubtitle
} from '@ionic/react';
//pages
//files
import { characters } from '../../characters';
import { CHARACTER_LIST_ROUTE } from '../../routes';
//styles
import './CharacterListPage.css';

const CharacterListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Characters</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonList>
          {characters.map((character) =>
            <IonCard key={character.id} routerLink={`${CHARACTER_LIST_ROUTE}/${character.id}`}>
              <IonCardHeader>
                <IonCardTitle>{character.name}</IonCardTitle>
                <IonCardSubtitle>{`Level ${character.level} ${character.race} ${character.class}`}</IonCardSubtitle>
              </IonCardHeader>
            </IonCard>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default CharacterListPage;
