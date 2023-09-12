import { IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonText, useIonRouter, IonButtons, IonImg } from '@ionic/react';
import {logInOutline, personCircleOutline } from 'ionicons/icons';
import Intro from '../components/Intro';
import mainLogo from '../assets/app-logo.png';
import logoName from '../assets/nuncmitto-name.png';
import rocket from '../assets/landing-rocket.svg';
import background from '../assets/intro-background.jpg';
import React, { useState, useEffect } from 'react';
import { Preferences } from '@capacitor/preferences';

import './landing.css';

const INTRO_KEY = 'intro-seen';

const Landing: React.FC = () => {

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
          <IonTitle>Landing Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={true}>
        <div className="ion-text-center">
          <img className="landing__image" src={background} alt="Logo" />
          <IonText className="ion-text-center">
            <h2 className="landing__title">
            enjoy with pleasure
            </h2>
          </IonText>
        </div>
        <IonCard className='landing__card ion-no-margin'>
          <IonCardContent className="landing-cta__container ion-text-center">
            <IonImg className="landing__logo" src={logoName} alt="Logo"></IonImg>
            <IonText className="ion-text-center">
              <h2 className="landing__subhead">
                Send a legendary gift today!
              </h2>
            </IonText>
            <img className="landing__icon ion-padding-bottom" src={rocket} alt="Blue rocket icon" />
            <IonButtons className="landing__cta-container ion-justify-content-center ion-padding-bottom">
              <IonButton routerLink="/sign-up" className="ion-margin-top landing-cta__button" type="submit" expand="block">
                Sign Up
              </IonButton>
              <IonButton routerLink="/login" color={"primary"} className="ion-margin-top landing-cta__button" type="submit" expand="block">
                Login
              </IonButton>
            </IonButtons>
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

export default Landing;