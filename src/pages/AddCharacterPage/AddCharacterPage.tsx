//packages
import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption
} from '@ionic/react';
//components
//files
//styles

const AddCharacterPage: React.FC = () => {
  const [ alignment, setAlignment ] = useState<String>();

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
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Race</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Class</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Alignment</IonLabel>
            <IonSelect value={alignment} onIonChange={(e) => setAlignment(e.detail.value)}>
              <IonSelectOption>Lawful Good (LG)</IonSelectOption>
              <IonSelectOption>Neutral Good (NG)</IonSelectOption>
              <IonSelectOption>Chaotic Good (CG)</IonSelectOption>
              <IonSelectOption>Lawful Neutral (LN)</IonSelectOption>
              <IonSelectOption>True Neutral (TN)</IonSelectOption>
              <IonSelectOption>Chaotic Neutral (CN)</IonSelectOption>
              <IonSelectOption>Lawful Evil (LE)</IonSelectOption>
              <IonSelectOption>Neutral Evil (NE)</IonSelectOption>
              <IonSelectOption>Chaotic Evil (CE)</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">XP</IonLabel>
            <IonInput type="number"/>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Stats</IonLabel>
          </IonItemDivider>
          <IonItem>
            <IonLabel position="floating">HP</IonLabel>
            <IonInput type="number"/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">AC</IonLabel>
            <IonInput type="number"/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Initiative</IonLabel>
            <IonInput type="number"/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Proficiency Bonus</IonLabel>
            <IonInput type="number"/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Hit Die</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Hit Die Mod</IonLabel>
            <IonInput type="number"/>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Ability Scores</IonLabel>
          </IonItemDivider>
          <IonItem>
            <IonLabel position="floating">Strength</IonLabel>
            <IonInput type="number"/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Dexterity</IonLabel>
            <IonInput type="number"/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Constitution</IonLabel>
            <IonInput type="number"/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Intelligence</IonLabel>
            <IonInput type="number"/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Wisdom</IonLabel>
            <IonInput type="number"/>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Charisma</IonLabel>
            <IonInput type="number"/>
          </IonItem>
        </IonItemGroup>

        <IonButton expand="block" style={{ marginTop: "1rem"}}>Save</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddCharacterPage;
