//packages
import { useState, useEffect } from 'react';
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
//pages
//files
import { abilityScoreMod } from '../../calculations';
import { firestore } from '../../firebase';
import {
  Character,
  toCharacter,
  Stats,
  toStats,
  AbilityScores,
  toScores
} from '../../models';
import { useAuth } from '../../auth';
//styles
import './CharacterPage.css';

const CharacterPage: React.FC = () => {
  const { id } = useParams() as {
    id: string
  };

  const [ character, setCharacter ] = useState<Character>();
  const [ stats, setStats ] = useState<Stats>();
  const [ ability_scores, setAbilityScores ] = useState<AbilityScores>();
  const { userId } = useAuth();
  useEffect(() => {
    const characterRef = firestore.collection('users').doc(userId)
      .collection('characters').doc(id);
    characterRef.get().then((doc) => setCharacter(toCharacter(doc)));

    const statRef = firestore.collection('users').doc(userId)
      .collection('characters').doc(id).collection('stats').doc('character_stats');
    statRef.get().then((doc) => setStats(toStats(doc)));

    const scoreRef = firestore.collection('users').doc(userId)
      .collection('characters').doc(id).collection('ability_scores').doc('character_ability_scores');
    scoreRef.get().then((doc) => setAbilityScores(toScores(doc)));
  },[id,userId])

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
              <span>{character?.class}</span>
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
              <span>{stats?.hit_points}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">AC</IonLabel>
              <span>{stats?.armor_class}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Initiative</IonLabel>
              <span>{`+${abilityScoreMod(ability_scores?.dex)}`}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Proficiency Bonus</IonLabel>
              <span>{`+${stats?.prof_bonus}`}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Hit Die</IonLabel>
              <span>{`${stats?.hit_die} + ${stats?.hit_die_mod}`}</span>
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
                {abilityScoreMod(ability_scores?.str)}
              </IonText>
              <span>{ability_scores?.str}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Dexterity</IonLabel>
              <IonText
                className="mod-text"
                color="secondary">
                {abilityScoreMod(ability_scores?.dex)}
              </IonText>
              <span>{ability_scores?.dex}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Constitution</IonLabel>
              <IonText
                className="mod-text"
                color="secondary">
                {abilityScoreMod(ability_scores?.con)}
              </IonText>
              <span>{ability_scores?.con}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Intelligence</IonLabel>
              <IonText
                className="mod-text"
                color="secondary">
                {abilityScoreMod(ability_scores?.int)}
              </IonText>
              <span>{ability_scores?.int}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Wisdom</IonLabel>
              <IonText
                className="mod-text"
                color="secondary">
                {abilityScoreMod(ability_scores?.wis)}
              </IonText>
              <span>{ability_scores?.wis}</span>
            </IonItem>
            <IonItem>
              <IonLabel color="tertiary">Charisma</IonLabel>
              <IonText
                className="mod-text"
                color="secondary">
                {abilityScoreMod(ability_scores?.cha)}
              </IonText>
              <span>{ability_scores?.cha}</span>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CharacterPage;
