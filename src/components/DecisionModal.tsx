import {
  IonContent,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonButton
} from '@ionic/react';

interface IProps {
  title: string;
  content: string;
  posBtnLabel: string;
  negBtnLabel: string;
  onPositiveSelect: () => void;
  onNegativeSelect: () => void;
}

const DecisionModal: React.FC<IProps> = (
  { onPositiveSelect, onNegativeSelect, title, content, posBtnLabel, negBtnLabel }) => {
  return (
    <div className="modal-container">
      <IonContent fullscreen className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              {content}
            </IonText>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton expand="block" color="danger" onClick={() => onPositiveSelect()}>{posBtnLabel}</IonButton>
                </IonCol>
                <IonCol>
                  <IonButton expand="block" onClick={() => onNegativeSelect()}>{negBtnLabel}</IonButton>
                </IonCol>
              </IonRow>
          </IonGrid>
          </IonCardContent>
        </IonCard>
    </IonContent>
    </div>
  );
};

export default DecisionModal;
