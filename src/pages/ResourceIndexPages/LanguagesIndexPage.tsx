import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { RESOURCE_MENU_ROUTE } from '../../routes';
import { Language } from '../../actions/ResourceActionTypes';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonList,
  IonLabel,
  IonText,
  IonButtons,
  IonBackButton,
  IonLoading
} from '@ionic/react';

import { getResource } from '../../actions/ResourceActions';

const LanguagesIndexPage: React.FC = () => {
  const dispatch = useDispatch();
  const resourceState = useAppSelector((state) => state.resource)
  const { url, character_resources } = resourceState;
  const [ language, setLanguage ] = useState<Language>();

  useEffect(() => {
    dispatch(getResource('languages', url));
  },[dispatch]);

  useEffect(() => {
    const { language } = character_resources;
    if (Boolean(language)) {
      setLanguage(language);
    }
  },[character_resources, language]);

  if (!Boolean(language)) {
    return <IonLoading isOpen={true} />
  }

  const { name, type, typical_speakers, script } = language;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={RESOURCE_MENU_ROUTE}/>
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonText color="secondary">
          <h3>Type</h3>
        </IonText>
        <p>{type}</p>
        <IonText color="secondary">
          <h3>Script</h3>
        </IonText>
        <p>{script}</p>
        <IonText color="secondary">
          <h3>Typical Speakers</h3>
        </IonText>
        <IonList>
          { typical_speakers.map((speaker) =>
            <IonItem key={speaker}>
              <IonLabel>{speaker}</IonLabel>
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default LanguagesIndexPage;
