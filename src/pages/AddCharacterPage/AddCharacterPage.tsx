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
import { abilityScoreMod } from '../../calculations';
//actions
import { addCharacter } from '../../actions/CharacterActions';
import { Character } from '../../actions/CharacterActionTypes';
//styles

const AddCharacterPage: React.FC = () => {
  const dispatch = useDispatch();
  const authState = useAppSelector((state) => state.auth);
  const { userId } = authState;

  const initCharacterData = {

  }

  const history = useHistory();
  //const [ characterData, setCharacterData ] = useState<Character>(initCharacterData);

  const handleSave = () => {
    console.log("character saved!");
    /*
    dispatch(addCharacter(characterData, userId));
    console.log('saved values:', characterData);
    history.goBack();
    */
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
