import { IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonBackButton, IonButtons, IonImg, IonItemDivider, IonText, IonItemGroup } from '@ionic/react';
import { checkmarkDoneOutline } from 'ionicons/icons';
import React from 'react';

import logo from '../assets/logos/app-logo.png';
import google from '../assets/logos/google-logo.svg';
import apple from '../assets/logos/apple-logo.svg';
import facebook from '../assets/logos/fb-logo.svg';
import insta from '../assets/logos/ig-logo.svg';


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

    <IonContent className="signup ion-no-padding ion-no-margin">
      <IonCard className="signup__card ion-no-margin">
        <IonCardContent className="signup__card-content ion-text-center">
          <IonImg src={logo}></IonImg>
          <form className="signup__form ion-text-start" onSubmit={handleSignUp}>
            <div className="signup__form-group">
              <IonInput className="signup__form-input" type="text" label={"First Name"} labelPlacement={"stacked"} placeholder="Mari"></IonInput>
              <IonInput className="signup__form-input" type="text" label={"Last Name"} labelPlacement={"stacked"} placeholder="Chasie"></IonInput>
            </div>
            <IonInput className="signup__form-input ion-margin-top" type="email" label={"Email"} labelPlacement="stacked" placeholder="email@mail.com"></IonInput>
            <div className="signup__form-group">
              <IonInput className="signup__form-input ion-margin-top" type="text" label={"Country"} labelPlacement="stacked" placeholder="+1 (US)"></IonInput>
              <IonInput className="signup__form-input ion-margin-top" type="tel" label={"Mobile Number"} labelPlacement="stacked" placeholder="123-456-7890"></IonInput>
            </div>
            <div className="signup__form-group">
            <IonInput className="signup__form-input ion-margin-end" type="password" label={"Password"} labelPlacement="stacked" placeholder="**********"></IonInput>
            <IonButton routerLink="/login" color={"primary"} className="ion-margin-top ion-padding" type="submit" expand="block">
              Sign Up
            </IonButton>
            </div>
          </form>
          <IonText className="signup__body">or connect with</IonText>
          <IonItemGroup className="signup__socials">
            <IonIcon icon={google} size={"large"} className="signup__socials-icon"></IonIcon>
            <IonIcon icon={apple} className="signup__socials-icon"></IonIcon>
            <IonIcon icon={facebook} size={"small"}className="signup__socials-icon"></IonIcon>
            <IonIcon icon={insta} className="signup__socials-icon"></IonIcon>
          </IonItemGroup>
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