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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput
} from '@ionic/react';
import BioEntryModal from '../../components/BioEntryModal';
//files
import { abilityScoreMod } from '../../calculations';
//actions
import { addCharacter } from '../../actions/CharacterActions';
import { Character } from '../../actions/CharacterActionTypes';
//styles

const AddCharacterPage: React.FC = () => {
  const dispatch = useDispatch();
  const authState = useAppSelector((state) => state.auth);
  const { userId } = authState;
  const [ showModal, setShowModal] = useState(false);
  const [ newCharacter, setNewCharacter ] = useState<Character>({
    name: "",
    age: 0,
    eye_color: "",
    height: 0,
    weight: 0,
    gender: "",
    level: 0,
    race: "",
    playerClass: "",
    alignment: "",
    xp: 0,
    hit_points: 0,
    armor_class: 0,
    prof_bonus: 0,
    hit_die: "",
    str: 8,
    dex: 8,
    con: 8,
    int: 8,
    wis: 8,
    cha: 8
  });

  const history = useHistory();

  const handleSave = () => {
    console.log("character data", newCharacter);
    /*
    dispatch(addCharacter(characterData, userId));
    console.log('saved values:', characterData);
    history.goBack();
    */
  }

  //TODO Add cards for each API category,
  //create page that calls API and allows user to select from that page.

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
        <BioEntryModal showModal={showModal} setShowModal={setShowModal}/>
        <IonCard button>
          <IonCardHeader>
            <IonCardTitle>Character Bio</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Enter details about your character here.
            <IonList>
              <IonItem>
                <IonLabel>Name</IonLabel>
                <IonInput
                  value={newCharacter.name}
                  onIonChange={e => setNewCharacter({ ...newCharacter, name: e.detail.value})}/>
              </IonItem>
              <IonItem>
                <IonLabel>Age</IonLabel>
                <IonInput
                  value={newCharacter.age}
                  onIonChange={e => setNewCharacter({ ...newCharacter, age: parseInt(e.detail.value)})}
                  type="number"/>
              </IonItem>
              <IonItem>
                <IonLabel>Gender</IonLabel>
                <IonInput
                  value={newCharacter.gender}
                  onIonChange={e => setNewCharacter({ ...newCharacter, gender: e.detail.value})}/>
              </IonItem>
              <IonItem>
                <IonLabel>Eye Color</IonLabel>
                <IonInput
                  value={newCharacter.eye_color}
                  onIonChange={e => setNewCharacter({ ...newCharacter, eye_color: e.detail.value})}/>
              </IonItem>
              <IonItem>
                <IonLabel>Height</IonLabel>
                <IonInput
                  value={newCharacter.height}
                  onIonChange={e => setNewCharacter({ ...newCharacter, height: parseInt(e.detail.value)})}
                  type="number"/>
              </IonItem>
              <IonItem>
                <IonLabel>Weight</IonLabel>
                <IonInput
                  value={newCharacter.weight}
                  onIonChange={e => setNewCharacter({ ...newCharacter, weight: parseInt(e.detail.value)})}
                  type="number"/>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
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
