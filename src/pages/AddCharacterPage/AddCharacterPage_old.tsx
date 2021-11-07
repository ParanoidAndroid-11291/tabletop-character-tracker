//packages
import React, { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonBackButton,
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption
} from '@ionic/react';
//files
import { charLvlXp, abilityScoreMod } from '../../calculations';
//actions
import { addCharacter } from '../../actions/CharacterActions';
import { Character } from '../../actions/CharacterActionTypes';
//styles

const AddCharacterPage: React.FC = () => {
  const dispatch = useDispatch();
  const authState = useAppSelector((state) => state.auth);
  const { userId } = authState;

  const initCharacterData = {
    name: '',
    age: 0,
    eye_color: "",
    height: 0,
    weight: 0,
    gender: '',
    level: 0,
    race: '',
    playerClass: '',
    alignment: '',
    xp: 0,
    hit_points: 0,
    armor_class: 0,
    prof_bonus: 0,
    hit_die: '',
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
  };

  const history = useHistory();
  const [ characterData, setCharacterData ] = useState<Character>(initCharacterData);

  const handleSave = () => {
    dispatch(addCharacter(characterData, userId));
    console.log('saved values:', characterData);
    history.goBack();
  }

  const calcXpProf = (e: CustomEvent) => {
    const level = parseInt(e.detail.value);
    const obj = charLvlXp(level);
    const { xp, prof_bonus } = obj;
    setCharacterData({ ...characterData, level, xp, prof_bonus });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton/>
          </IonButtons>
          <IonTitle>Add A Character</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Bio</IonLabel>
          </IonItemDivider>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput value={characterData.name} onIonChange={(e) => setCharacterData({ ...characterData ,name: e.detail.value })}/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Gender</IonLabel>
            <IonInput value={characterData.gender} onIonChange={(e) => setCharacterData({ ...characterData ,gender: e.detail.value })}/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Race</IonLabel>
            <IonInput value={characterData.race} onIonChange={(e) => setCharacterData({ ...characterData ,race: e.detail.value })}/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Class</IonLabel>
            <IonInput value={characterData.playerClass} onIonChange={(e) => setCharacterData({ ...characterData ,playerClass: e.detail.value })}/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Alignment</IonLabel>
            <IonSelect value={characterData.alignment} onIonChange={(e) => setCharacterData({ ...characterData ,alignment: e.detail.value })}>
              <IonSelectOption>Lawful Good</IonSelectOption>
              <IonSelectOption>Neutral Good</IonSelectOption>
              <IonSelectOption>Chaotic Good</IonSelectOption>
              <IonSelectOption>Lawful Neutral</IonSelectOption>
              <IonSelectOption>True Neutral</IonSelectOption>
              <IonSelectOption>Chaotic Neutral</IonSelectOption>
              <IonSelectOption>Lawful Evil</IonSelectOption>
              <IonSelectOption>Neutral Evil</IonSelectOption>
              <IonSelectOption>Chaotic Evil</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Stats</IonLabel>
          </IonItemDivider>
          <IonItem>
            <IonLabel position="floating">Level</IonLabel>
            <IonInput
              type="number"
              max="20"
              value={characterData.level}
              onIonChange={(e) => calcXpProf(e)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">HP</IonLabel>
            <IonInput
              type="number"
              value={characterData.hit_points}
              onIonChange={(e) => setCharacterData({ ...characterData, hit_points: parseInt(e.detail.value) })}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Hit Die</IonLabel>
            <IonInput
              value={characterData.hit_die}
              onIonChange={(e) => setCharacterData({ ...characterData, hit_die: e.detail.value})}
            />
          </IonItem>
        </IonItemGroup>

        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Ability Scores</IonLabel>
          </IonItemDivider>
          <IonItem>
            <IonLabel position="floating">Strength</IonLabel>
            <IonInput
              type="number"
              min="8"
              value={characterData.str}
              onIonChange={(e) => setCharacterData({ ...characterData, str: parseInt(e.detail.value) })}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Dexterity</IonLabel>
            <IonInput
              type="number"
              min="8"
              value={characterData.dex}
              onIonChange={(e) => {
                const armor_class = 10 + abilityScoreMod(parseInt(e.detail.value))
                setCharacterData({ ...characterData, dex: parseInt(e.detail.value), armor_class })
              }}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Constitution</IonLabel>
            <IonInput
              type="number"
              min="8"
              value={characterData.con}
              onIonChange={(e) => setCharacterData({ ...characterData, con: parseInt(e.detail.value) })}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Intelligence</IonLabel>
            <IonInput
              type="number"
              min="8"
              value={characterData.int}
              onIonChange={(e) => setCharacterData({ ...characterData, int: parseInt(e.detail.value) })}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Wisdom</IonLabel>
            <IonInput
              type="number"
              min="8"
              value={characterData.wis}
              onIonChange={(e) => setCharacterData({ ...characterData, wis: parseInt(e.detail.value) })}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Charisma</IonLabel>
            <IonInput
              type="number"
              min="8"
              value={characterData.cha}
              onIonChange={(e) => setCharacterData({ ...characterData, cha: parseInt(e.detail.value) })}/>
          </IonItem>
        </IonItemGroup>

        <IonButton
          expand="block"
          style={{ marginTop: "1rem"}}
          onClick={handleSave}>
          Save
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddCharacterPage;
