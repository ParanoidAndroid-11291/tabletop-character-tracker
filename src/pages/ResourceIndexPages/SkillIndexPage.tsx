import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { RESOURCE_MENU_ROUTE } from '../../routes';
import { setResourceUrl } from '../../actions/ResourceActions';
import { Skill } from '../../actions/ResourceActionTypes';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonText,
  IonLabel,
  IonButtons,
  IonBackButton,
  IonLoading
} from '@ionic/react';

import { getResource } from '../../actions/ResourceActions';

const SkillIndexPage: React.FC = () => {
  const dispatch = useDispatch();
  const resourceState = useAppSelector((state) => state.resource)
  const { url, character_resources } = resourceState;
  const [ skill, setSkill ] = useState<Skill>();

  useEffect(() => {
    dispatch(getResource('skills', url));
  },[dispatch]);

  useEffect(() => {
    const { skill } = character_resources;
    if (Boolean(skill)) {
      setSkill(skill);
    }
  },[character_resources, skill]);

  if (!Boolean(skill)) {
    return <IonLoading isOpen={true} />
  }

  const { ability_score } = skill;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={RESOURCE_MENU_ROUTE}/>
          </IonButtons>
          <IonTitle>{skill?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonText color="secondary">
          <h3>Description</h3>
        </IonText>
        <p>{skill?.desc[0]}</p>
        <IonText color="secondary">
          <h3>Related Ability Score</h3>
        </IonText>
        <IonItem
          routerLink={`${RESOURCE_MENU_ROUTE}/view/ability-scores/${ability_score?.index}`}
          routerDirection="back"
          onClick={() => dispatch(setResourceUrl(ability_score?.url))}>
          <IonLabel color="primary">{ability_score?.name}</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
}

export default SkillIndexPage;
