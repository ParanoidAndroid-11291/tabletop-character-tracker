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
  IonInput
} from '@ionic/react';
//pages
//files
import { CHARACTER_LIST_ROUTE } from '../../routes';
import { useAuth } from '../../auth';
import { auth } from '../../firebase';
//styles

interface Props {
  onLogin: () => void;
}

const LoginPage: React.FC<Props> = ({ onLogin }) => {
  const { loggedIn } = useAuth();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleLogin = async () => {
    const credential = await auth.signInWithEmailAndPassword('test@example.com', 'password');
    console.log("login auth", credential);
  }

  if (loggedIn) {
    return <Redirect to={ CHARACTER_LIST_ROUTE } />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
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
        <IonButton onClick={ handleLogin } expand="block">Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
