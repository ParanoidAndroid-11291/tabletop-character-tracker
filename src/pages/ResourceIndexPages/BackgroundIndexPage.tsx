import lodash from 'lodash';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { RESOURCE_MENU_ROUTE } from '../../routes';
import { setResourceUrl } from '../../actions/ResourceActions';
import {
  StartingEquipment,
  ApiReference,
  Choice
} from '../../actions/ResourceActionTypes';
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
  IonLoading,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/react';

import { getResource } from '../../actions/ResourceActions';

const BackgroundIndexPage: React.FC = () => {
  const dispatch = useDispatch();
  const resourceState = useAppSelector((state) => state.resource)
  const { url, background } = resourceState;

  useEffect(() => {
    dispatch(getResource('backgrounds', url));
  },[dispatch]);


  if (!Boolean(background)) {
    return <IonLoading isOpen={true} />
  }

  const startingEquipmentList = (items: StartingEquipment[]) => {
    return (
      <IonList>
        {items.map((item) =>
          <IonItem
            key={item.equipment.index}
            routerLink={`${RESOURCE_MENU_ROUTE}/view/equipment/${item.equipment.index}`}
            routerDirection="back"
            onClick={() => dispatch(setResourceUrl(item.equipment.url))}>
            <IonLabel color="primary">{`${item.equipment.name} x ${item.quantity}`}</IonLabel>
          </IonItem>
        )}
      </IonList>
    )
  }

  const referenceList = (items: ApiReference[], endpoint: string) => {
    return (
      <IonList>
        {items.map((item) =>
          <IonItem
            key={item.index}
            routerLink={`${RESOURCE_MENU_ROUTE}/view/${endpoint}/${item.index}`}
            routerDirection="back"
            onClick={() => dispatch(setResourceUrl(item.url))}>
            <IonLabel color="primary">{item.name}</IonLabel>
          </IonItem>
        )}
      </IonList>
    )
  }

  const equipmentOptionList = (items: Choice[]) => {
    return (
      <div>
        {items.map((item) =>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{item.type}</IonCardTitle>
              <IonCardSubtitle>{`Choose ${item.choose}`}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
              { lodash.map(item.from, (n: any) =>
                <IonItem
                  key={n.equipment_category.index}
                  routerLink={`${RESOURCE_MENU_ROUTE}/view/equipment-categories/${n.equipment_category.index}`}
                  routerDirection="back"
                  onClick={() => dispatch(setResourceUrl(n.equipment_category.url))}>
                  <IonLabel color="primary">{n.equipment_category.name}</IonLabel>
                </IonItem>
              ) }
              </IonList>
            </IonCardContent>
          </IonCard>
        )}
      </div>
    );
  }

  const choiceList = (choice: Choice) => {
    return (
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>{`Choose ${choice.choose}`}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            { choice.from.map((item: ApiReference) =>
              <IonItem
                key={item.index}
                routerLink={`${RESOURCE_MENU_ROUTE}/view/${choice.type}/${item.index}`}
                routerDirection="back"
                onClick={() => dispatch(setResourceUrl(item.url))}>
                <IonLabel color="primary">{item.name}</IonLabel>
              </IonItem>
            )}
          </IonList>
        </IonCardContent>
      </IonCard>
    );
  }

  const traitsList = (traits: Choice) => {
    return (
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>{`Choose ${traits.choose}`}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            { traits.from.map((item: any) =>
              <IonItem>
                <p>{item.desc ? item.desc : item }</p>
              </IonItem>
            )}
          </IonList>
        </IonCardContent>
      </IonCard>
    );
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
          <IonLabel>Skill Proficiencies</IonLabel>
        </IonListHeader>
        { starting_proficiencies?.length > 0 ?
          referenceList(starting_proficiencies, "proficiencies") :
          null
        }
        <IonListHeader>
          <IonLabel>Languages</IonLabel>
        </IonListHeader>
        { language_options ?
          choiceList(language_options) : null
        }
        <IonListHeader>
          <IonLabel>Starting Equipment</IonLabel>
        </IonListHeader>
        { starting_equipment?.length > 0 ?
          startingEquipmentList(starting_equipment) : null
        }
        <IonListHeader>
          <IonLabel>Starting Equipment Options</IonLabel>
        </IonListHeader>
        { starting_equipment_options?.length > 0 ?
           equipmentOptionList(starting_equipment_options): null
        }
        <IonListHeader>
          <IonLabel>Personality Trait</IonLabel>
        </IonListHeader>
        { personality_traits ?
          traitsList(personality_traits) : null
        }
        <IonListHeader>
          <IonLabel>Ideal</IonLabel>
        </IonListHeader>
        { ideals ?
          traitsList(ideals) : null
        }
        <IonListHeader>
          <IonLabel>Bond</IonLabel>
        </IonListHeader>
        { bonds ?
          traitsList(bonds) : null
        }
        <IonListHeader>
          <IonLabel>Flaw</IonLabel>
        </IonListHeader>
        { flaws ?
          traitsList(flaws) : null
        }
      </IonContent>
    </IonPage>
  );
}

export default BackgroundIndexPage;
