import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { RESOURCE_MENU_ROUTE } from '../../routes';
import { setResourceUrl } from '../../actions/ResourceActions';
import { AbilityScore, ApiReference } from '../../actions/ResourceActionTypes';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonText,
  IonButtons,
  IonBackButton,
  IonLoading,
  IonIcon
} from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';

import { getResource } from '../../actions/ResourceActions';

const AbilityScoreIndexPage: React.FC = () => {
  console.log('AbilityScoreIndexPage rendered');
  const dispatch = useDispatch();
  const resourceState = useAppSelector((state) => state.resource)
  const { url, character_resources } = resourceState;
  const [ ability_score, setAbilityScore ] = useState<AbilityScore>();

  useEffect(() => {
    dispatch(getResource('ability-scores', url));
  },[dispatch]);

  useEffect(() => {
    const { ability_score } = character_resources;
    if (Boolean(ability_score)) {
      setAbilityScore(ability_score);
    }
  },[character_resources, ability_score]);

  const skillList = (skills: ApiReference[]) => {
    return (
      <IonList>
        {skills.map((skill) =>
          <IonItem
            key={skill.index}
            routerLink={`${RESOURCE_MENU_ROUTE}/view/skills/${skill.index}`}
            routerDirection="back"
            onClick={() => dispatch(setResourceUrl(skill.url))}>
            <IonLabel>{skill.name}</IonLabel>
            <IonIcon icon={ chevronForwardOutline } />
          </IonItem>
        )}
      </IonList>
    );
  }

  if (!Boolean(ability_score)) {
    return <IonLoading isOpen={true} />
  }

  const { full_name, desc, skills } = ability_score;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={RESOURCE_MENU_ROUTE}/>
          </IonButtons>
          <IonTitle>{full_name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonText color="secondary">
          <h3>Description</h3>
        </IonText>
        <p>{desc[0]}</p>
        <IonText color="secondary">
          <h3>Ability Check</h3>
        </IonText>
        <p>{desc[1]}</p>
        <IonListHeader>
          <IonLabel>Skills</IonLabel>
        </IonListHeader>
        { skills.length > 0 ?
          skillList(skills) :
          null
        }
      </IonContent>
    </IonPage>
  );
}

export default AbilityScoreIndexPage;
