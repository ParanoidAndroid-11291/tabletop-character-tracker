import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { RESOURCE_MENU_ROUTE } from '../../routes';
import { setResourceUrl } from '../../actions/ResourceActions';
import { AbilityScore } from '../../actions/ResourceActionTypes';
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
  IonLoading
} from '@ionic/react';

import { getResource } from '../../actions/ResourceActions';

const AbilityScoreIndexPage: React.FC = () => {
  const dispatch = useDispatch();
  const resourceState = useAppSelector((state) => state.resource)
  const { url, character_resources } = resourceState;
  const [ ability_score, setAbilityScore ] = useState<AbilityScore>({
    index: '',
    name: '',
    full_name: '',
    desc: [],
    skills: [],
    url: ''
  });

  useEffect(() => {
    dispatch(getResource('ability-scores', url));
  },[dispatch]);

  useEffect(() => {
    if (Boolean(character_resources)) {
      const { ability_score } = character_resources;
      setAbilityScore(ability_score);
    }
  },[character_resources, ability_score]);

  const skillList = () => {
    const { skills } = ability_score;
    return (
      <IonList>
        {skills.map((skill) =>
          <IonItem
            key={skill.index}
            routerLink={`${RESOURCE_MENU_ROUTE}/view/skills/${skill.index}`}
            onClick={() => dispatch(setResourceUrl(skill.url))}>
            <IonLabel>{skill.name}</IonLabel>
          </IonItem>
        )}
      </IonList>
    );
  }

  if (!Boolean(ability_score)) {
    return <IonLoading isOpen={true} />
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{ability_score.full_name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonText color="secondary">
          <h3>Description</h3>
        </IonText>
        <p>{ability_score.desc[0]}</p>
        <IonText color="secondary">
          <h3>Ability Check</h3>
        </IonText>
        <p>{ability_score.desc[1]}</p>
        <IonListHeader>
          <IonLabel>Skills</IonLabel>
        </IonListHeader>
        {skillList()}
      </IonContent>
    </IonPage>
  );
}

export default AbilityScoreIndexPage;
