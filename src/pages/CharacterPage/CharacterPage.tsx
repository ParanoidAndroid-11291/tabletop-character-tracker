//packages
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonLabel,
  IonItem,
  IonText
} from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
//state
import { getCharacter } from '../../actions/CharacterActions';
//files
import { abilityScoreMod } from '../../calculations';
//styles
import './CharacterPage.css';

const CharacterPage: React.FC = () => {
  const dispatch = useDispatch();
  const authState = useAppSelector((state) => state.auth);
  const charState = useAppSelector((state) => state.character );
  const { userId } = authState;
  const { character, unsub } = charState;

  const { id } = useParams() as {
    id: string
  };

  useEffect(() => {
    dispatch(getCharacter(userId, id));
    return () => unsub;

  },[dispatch]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
          <IonTitle>{character?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard className="bio-card">
          <IonCardHeader>Bio</IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel color="tertiary">Level</IonLabel>
              <span>{character?.level}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Race</IonLabel>
              <span>{character?.race}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Class</IonLabel>
              <span>{character?.playerClass}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Alignment</IonLabel>
              <span>{character?.alignment}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">XP</IonLabel>
              <span>{character?.xp}</span>
            </IonItem>
          </IonCardContent>
        </IonCard>
        <IonCard className="stat-card">
          <IonCardHeader>Stats</IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel color="tertiary">HP</IonLabel>
              <span>{character?.hit_points}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">AC</IonLabel>
              <span>{character?.armor_class}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Initiative</IonLabel>
              <span>{`+${abilityScoreMod(character?.dex)}`}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Proficiency Bonus</IonLabel>
              <span>{`+${character?.prof_bonus}`}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Hit Die</IonLabel>
              <span>{`${character?.hit_die} + ${character?.level}`}</span>
            </IonItem>
          </IonCardContent>
        </IonCard>
        <IonCard className="ability-score-card">
          <IonCardHeader>Ability Scores</IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel color="tertiary">Strength</IonLabel>
              <IonText
                className="mod-text"
                color="secondary">
                {abilityScoreMod(character?.str)}
              </IonText>
              <span>{character?.str}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Dexterity</IonLabel>
              <IonText
                className="mod-text"
                color="secondary">
                {abilityScoreMod(character?.dex)}
              </IonText>
              <span>{character?.dex}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Constitution</IonLabel>
              <IonText
                className="mod-text"
                color="secondary">
                {abilityScoreMod(character?.con)}
              </IonText>
              <span>{character?.con}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Intelligence</IonLabel>
              <IonText
                className="mod-text"
                color="secondary">
                {abilityScoreMod(character?.int)}
              </IonText>
              <span>{character?.int}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Wisdom</IonLabel>
              <IonText
                className="mod-text"
                color="secondary">
                {abilityScoreMod(character?.wis)}
              </IonText>
              <span>{character?.wis}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Charisma</IonLabel>
              <IonText
                className="mod-text"
                color="secondary">
                {abilityScoreMod(character?.cha)}
              </IonText>
              <span>{character?.cha}</span>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CharacterPage;
