//packages
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonLoading,
  useIonToast
} from '@ionic/react';
//pages
//files
import { CHARACTER_LIST_ROUTE, LOGIN_ROUTE } from '../../routes';
import { useAuth } from '../../auth';
import { auth } from '../../firebase';
//styles

const RegisterPage: React.FC = () => {
  const [ present, dismiss ] = useIonToast();
  const { loggedIn } = useAuth();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const handleRegister = async () => {
    try{
      setLoading(true);
      const credential = await auth.createUserWithEmailAndPassword(email, password);
    }catch(e) {
      setLoading(false);
      present({
        message: e.message,
        color: "danger",
        duration: 2000
      });
    }
  }

  if (loggedIn) {
    return <Redirect to={ CHARACTER_LIST_ROUTE } />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value)}
              />
            </IonItem>
          </IonList>
        <IonButton onClick={ handleRegister } expand="block">Sign Up</IonButton>
        <IonButton routerLink={ LOGIN_ROUTE } expand="block" fill="clear">Back</IonButton>
        <IonLoading isOpen={ loading } />
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
