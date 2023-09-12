import { IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, useIonRouter } from '@ionic/react';
import {logInOutline, personCircleOutline } from 'ionicons/icons';
import Intro from '../components/Intro';
import mainLogo from '../assets/app-logo.png';
import background from '../assets/intro-background.jpg';
import React, { useState, useEffect } from 'react';
import { Preferences } from '@capacitor/preferences';

import './login.css';

const INTRO_KEY = 'intro-seen';

const Login: React.FC = () => {

  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(false);

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      console.log("file: Login.tsx:17 ~ checkStorage ~ seen:", seen);
      setIntroSeen(seen.value === 'true');
    }
    checkStorage();
  }, []);

  function handleLogin(e: any) {
    e.preventDefault();
    console.log("Logged In!");
  }

  const finishIntro = async() => {
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: 'true' });
  }

  const seeIntroAgain = () => {
    setIntroSeen(false);
    Preferences.remove({ key: INTRO_KEY });
  }

  return (
    <>
    {!introSeen ? <Intro onFinish={finishIntro}/> : (
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" scrollY={true}>
        <div className="ion-text-center ion-padding">
          <img className='login__image' src={background} alt="Logo" />
        </div>
        <IonCard>
          <IonCardContent className="intro-cta__container">
            {/* <form onSubmit={handleLogin}>
              <IonInput type="email" label={"Email"} labelPlacement="floating" placeholder="email@domain.com" fill="outline"></IonInput>
              <IonInput className="ion-margin-top" type="password" label={"Password"} labelPlacement="floating" placeholder="" fill="outline"></IonInput>
              <IonButton routerLink="/sign-up" color={"secondary"} className="ion-margin-top" type="submit" expand="block">
                Sign Up
                <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
              </IonButton>
              <IonButton routerLink="/login" color={"secondary"} className="ion-margin-top" type="submit" expand="block">
                Login
                <IonIcon icon={logInOutline} slot="end"></IonIcon>
              </IonButton>
            </form> */}

              <IonButton routerLink="/sign-up" color={"secondary"} className="ion-margin-top intro-cta__button" type="submit" expand="block">
                Sign Up
                <IonIcon icon={personCircleOutline} slot="end"></IonIcon>
              </IonButton>
              <IonButton routerLink="/login" color={"transparent"} className="ion-margin-top intro-cta__button" type="submit" expand="block">
                Login
                <IonIcon icon={logInOutline} slot="end"></IonIcon>
              </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <IonFooter>
          <IonToolbar>Toolbar Footer</IonToolbar>
        </IonFooter>
      </IonPage>
    )}
    </>
  );
};

export default Login;