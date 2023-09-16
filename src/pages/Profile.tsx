import { IonAvatar, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Header from '../components/Header';
import { chevronBack } from 'ionicons/icons';

const Profile: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Header leftIconType={'icon'} leftIcon={chevronBack} rightIconType='button' rightIcon={'share'} />
        <IonAvatar className="profile__image-container">
          <IonImg className="profile__image" src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Image of person"></IonImg>
        </IonAvatar>
        
      </IonContent>
    </IonPage>
  );
};

export default Profile;