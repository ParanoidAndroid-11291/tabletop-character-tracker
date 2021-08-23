import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { RESOURCE_MENU_ROUTE } from '../../routes';
import { setResourceUrl } from '../../actions/ResourceActions';
import { Proficiency, ApiReference, Choice } from '../../actions/ResourceActionTypes';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonLabel,
  IonListHeader,
  IonItem,
  IonText,
  IonButtons,
  IonBackButton,
  IonLoading
} from '@ionic/react';

import { getResource } from '../../actions/ResourceActions';

const ClassIndexPage: React.FC = () => {
  const dispatch = useDispatch();
  const resourceState = useAppSelector((state) => state.resource)
  const { url, background } = resourceState;

  useEffect(() => {
    dispatch(getResource('classes', url));
  },[dispatch]);


  if (!Boolean(background)) {
    return <IonLoading isOpen={true} />
  }

  const {
    name,
    starting_proficiencies,
    language_options,
    starting_equipment,
    starting_equipment_options,
    feature,
    personality_traits,
    ideals,
    bonds,
    flaws
  } = background;
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
          <h3>{feature?.name}</h3>
        </IonText>
        {feature?.desc.map((description) =>
          <p>{`${description} `}</p>
        )}
        <IonListHeader>
          <IonLabel>Starting Equipment</IonLabel>
        </IonListHeader>

        <IonListHeader>
          <IonLabel>Starting Equipment Options</IonLabel>
        </IonListHeader>

      </IonContent>
    </IonPage>
  );
}

export default ClassIndexPage;
