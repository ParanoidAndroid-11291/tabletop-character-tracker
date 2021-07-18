//packages
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
//actions
import { auth, clearError } from '../../actions/AuthActions';
//files
import { CHARACTER_LIST_ROUTE, REGISTER_ROUTE } from '../../routes';
import { RootStore } from '../../store';
//styles

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: RootStore) => state.auth );
  const { loggedIn, loading, error } = authState;

  const [ present, dismiss ] = useIonToast();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleLogin = () => {
    dispatch(auth(email, password));
  };

  if(Boolean(error)) {
    present({
      message: error.message,
      color: "danger",
      duration: 2000
    });
    dispatch(clearError());
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
        <IonButton onClick={ handleLogin } expand="block">Sign In</IonButton>
        <IonButton routerLink={ REGISTER_ROUTE } expand="block" fill="clear">Don't have an account?</IonButton>
        <IonLoading isOpen={ loading } />
      </IonContent>
    </IonPage>
  );
};


export default LoginPage;
