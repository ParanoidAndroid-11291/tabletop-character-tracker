import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { RESOURCE_MENU_ROUTE } from '../../routes';
import { Alignment } from '../../actions/ResourceActionTypes';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonButtons,
  IonBackButton,
  IonLoading
} from '@ionic/react';

import { getResource } from '../../actions/ResourceActions';

const AlignmentsIndexPage: React.FC = () => {
  const dispatch = useDispatch();
  const resourceState = useAppSelector((state) => state.resource)
  const { url, character_resources } = resourceState;
  const [ alignment, setAlignment ] = useState<Alignment>();

  useEffect(() => {
    dispatch(getResource('alignment', url));
  },[dispatch]);

  useEffect(() => {
    const { alignment } = character_resources;
    if (Boolean(alignment)) {
      setAlignment(alignment);
    }
  },[character_resources, alignment]);

  if (!Boolean(alignment)) {
    return <IonLoading isOpen={true} />
  }

  const { name, abbreviation, desc } = alignment;
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
          <h3>Abbreviation</h3>
        </IonText>
        <p>{abbreviation}</p>
        <IonText color="secondary">
          <h3>Description</h3>
        </IonText>
        {desc}
      </IonContent>
    </IonPage>
  );
}

export default AlignmentsIndexPage;
