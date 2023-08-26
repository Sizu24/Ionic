import { IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonBackButton, IonButtons } from '@ionic/react';
import { checkmarkDoneOutline } from 'ionicons/icons';
import logo from '../assets/logo.png';
import React from 'react';

const SignUp: React.FC = () => {

  function handleSignUp(e: any) {
    e.preventDefault();
    console.log("Signed Up!");
  }

  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref='/' />
        </IonButtons>
        <IonTitle>Sign Up</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding" scrollY={false}>
      <IonCard>
        <IonCardContent>
          <form onSubmit={handleSignUp}>
            <IonInput type="email" label={"Email"} labelPlacement="floating" placeholder="email@domain.com" fill="outline"></IonInput>
            <IonInput className="ion-margin-top" type="password" label={"Password"} labelPlacement="floating" placeholder="" fill="outline"></IonInput>
            <IonButton routerLink="/login" color={"secondary"} className="ion-margin-top" type="submit" expand="block">
              Sign Up
              <IonIcon icon={checkmarkDoneOutline} slot="end"></IonIcon>
            </IonButton>
          </form>
        </IonCardContent>
      </IonCard>
    </IonContent>
    <IonFooter>
        <IonToolbar>Toolbar Footer</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default SignUp;