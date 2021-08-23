import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { RESOURCE_MENU_ROUTE } from '../../routes';
import { setResourceUrl } from '../../actions/ResourceActions';
import { Proficiency, ApiReference } from '../../actions/ResourceActionTypes';
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

const ProficiencyIndexPage: React.FC = () => {
  const dispatch = useDispatch();
  const resourceState = useAppSelector((state) => state.resource)
  const { url, character_resources } = resourceState;
  const [ proficiency, setProficiency ] = useState<Proficiency>();

  useEffect(() => {
    dispatch(getResource('proficiencies', url));
  },[dispatch]);

  useEffect(() => {
    const { proficiency } = character_resources;
    if (Boolean(proficiency)) {
      setProficiency(proficiency);
    }
  },[character_resources, proficiency]);

  if (!Boolean(proficiency)) {
    return <IonLoading isOpen={true} />
  }

  const itemsList = (items: ApiReference[], endpoint: string) => {

    return (
      <IonList>
        {items.map((item) =>
          <IonItem
            key={item.index}
            routerLink={`${RESOURCE_MENU_ROUTE}/view/${ item.type ? item.type : endpoint}/${item.index}`}
            routerDirection="back"
            onClick={() => dispatch(setResourceUrl(item.url))}>
            <IonLabel color="primary">{item.name}</IonLabel>
          </IonItem>
        )}
      </IonList>
    )
  }

  const { name, type ,classes, races, references } = proficiency;
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
        <IonListHeader>
          <IonLabel>Classes</IonLabel>
        </IonListHeader>
        { classes?.length > 0 ?
          itemsList(classes, 'classes') :
          null
        }
        <IonListHeader>
          <IonLabel>Races</IonLabel>
        </IonListHeader>
        { races?.length > 0 ?
          itemsList(races, 'races') :
          null
        }
        <IonListHeader>
          <IonLabel>References</IonLabel>
        </IonListHeader>
        { references?.length > 0 ?
          itemsList(references, "equipment") :
          null
        }
      </IonContent>
    </IonPage>
  );
}

export default ProficiencyIndexPage;
