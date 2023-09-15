import { IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, useIonRouter, IonImg, IonText, IonItem } from '@ionic/react';
import {logInOutline, personCircleOutline } from 'ionicons/icons';
import Intro from '../components/Intro';
import mainLogo from '../assets/logos/nuncmitto-icon.png';
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

        <IonContent className="login ion-no-padding ion-no-margin">
          <IonCard className="login__card ion-no-margin">
            <IonCardContent className="login__card-content ion-text-center">
              <IonImg className="login__logo" src={mainLogo}></IonImg>
              <form className="login__form ion-text-start" onSubmit={handleLogin}>
                <IonInput className="login__form-input ion-margin-top" type="email" label={"Email"} labelPlacement="stacked" placeholder="email@mail.com"></IonInput>
                <div className="login__form-group">
                  <IonInput className="login__form-input ion-margin-end ion-margin-top" type="password" label={"Password"} labelPlacement="stacked" placeholder="**********"></IonInput>
                  <IonButton routerLink="/login" color={"primary"} className="form__button ion-margin-top" type="submit" expand="block">
                    Login
                  </IonButton>
                </div>
              </form>
              <IonButton className="form__button--secondary" fill="clear">Forgot Password?</IonButton>
              <div className="login-info-box">
                <IonText className="login-info-box__body">
                  “A wonderful gift may not be wrapped as you expect.”
                </IonText>
                <IonText className="login-info-box__body">
                  Jonathan Lockwood Huie
                </IonText>
              </div>
              <div className="login-group">
              <IonText>New User?</IonText>
              <IonButton  routerLink="/sign-up" fill="clear">Sign Up</IonButton>
              </div>
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