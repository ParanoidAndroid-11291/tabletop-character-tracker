import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { useParams } from 'react-router';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonBackButton,
  IonLoading
} from '@ionic/react';

import { getResource } from '../../actions/ResourceActions';

const ResourceIndexPage: React.FC = () => {
  const { endpoint, index } = useParams() as {
    endpoint: string;
    index: string;
  };
  const dispatch = useDispatch();
  const resourceState = useAppSelector((state) => state.resource)


  useEffect(() => {
    dispatch(getResource(endpoint, index));
  },[])

  const capitalizeTitle = (title: string) => {
    return title.replace(/^\w/, (c) => c.toUpperCase());
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        Some Stuff
      </IonContent>
    </IonPage>
  );
}

export default ResourceIndexPage;
