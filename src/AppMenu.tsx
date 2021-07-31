//packages
import {
  IonMenu,
  IonMenuToggle,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';

//pages

//files
import { SETTINGS_ROUTE, RESOURCE_MENU_ROUTE } from './routes';
//styles

const AppMenu: React.FC = () => (
  <IonMenu side="start" content-id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonMenuToggle>
            <IonItem
              button
              routerLink={ SETTINGS_ROUTE }
              >
                <IonLabel>Settings</IonLabel>
            </IonItem>
            <IonItem
              button
              routerLink={ RESOURCE_MENU_ROUTE }
              >
                <IonLabel>Resources</IonLabel>
            </IonItem>
        </IonMenuToggle>
        </IonList>
      </IonContent>
  </IonMenu>
);

export default AppMenu;
