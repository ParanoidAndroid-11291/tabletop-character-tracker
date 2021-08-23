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

import { RESOURCE_MENU_ROUTE } from '../../routes';
import { getResourceList, setResourceUrl } from '../../actions/ResourceActions';

const ResourceEndpointPage: React.FC = () => {
  const { endpoint } = useParams() as {
    endpoint: string;
  };
  const dispatch = useDispatch();
  const resourceState = useAppSelector((state) => state.resource)
  const { resourceList } = resourceState;

  useEffect(() => {
    dispatch(getResourceList(endpoint));
  },[])

  const capitalizeTitle = (title: string) => {
    return title.replace(/^\w/, (c) => c.toUpperCase());
  }

  const generateResourceList = () => {
    if (resourceList.length == 0) {
      return <IonLoading isOpen={true} />
    }

    return (
      <IonList>
        {resourceList.map((resource) =>
          <IonItem
            key={resource.index}
            routerLink={`${RESOURCE_MENU_ROUTE}/view/${endpoint}/${resource.index}`}
            onClick={() => dispatch(setResourceUrl(resource.url))}>
            <IonLabel color="primary">{resource.name}</IonLabel>
          </IonItem>
        )}
      </IonList>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={ RESOURCE_MENU_ROUTE }/>
          </IonButtons>
          <IonTitle>{capitalizeTitle(endpoint)}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        {generateResourceList()}
      </IonContent>
    </IonPage>
  );
}

export default ResourceEndpointPage;
