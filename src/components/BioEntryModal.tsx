import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonButton
} from '@ionic/react';

interface IProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

const BioEntryModal: React.FC<IProps> = ({ showModal, setShowModal }) => {
  return (
    <IonModal isOpen={showModal}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            New Character Bio Info
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Name</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel>Gender</IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel>Race</IonLabel>
            <IonSelect>
              <IonSelectOption value="human">Human</IonSelectOption>
              <IonSelectOption value="elf">Elf</IonSelectOption>
              <IonSelectOption value="orc">Orc</IonSelectOption>
              <IonSelectOption value="halfling">Halfling</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Alignment</IonLabel>
            <IonSelect>
              <IonSelectOption value="lg">Lawful Good</IonSelectOption>
              <IonSelectOption value="ng">Neutral Good</IonSelectOption>
              <IonSelectOption value="cg">Chaotic Good</IonSelectOption>
              <IonSelectOption value="ln">Lawful Neutral</IonSelectOption>
              <IonSelectOption value="tn">True Neutral</IonSelectOption>
              <IonSelectOption value="cn">Chaotic Neutral</IonSelectOption>
              <IonSelectOption value="le">Lawful Evil</IonSelectOption>
              <IonSelectOption value="ne">Neutral Evil</IonSelectOption>
              <IonSelectOption value="ce">Chaotic Evil</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
        <IonButton>Save</IonButton>
        <IonButton color='medium' fill='outline' onClick={() => setShowModal(false)}>Cancel</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default BioEntryModal;
