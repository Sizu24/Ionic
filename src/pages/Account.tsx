import { IonAvatar, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar, IonText, IonItemGroup, IonIcon, IonButton } from '@ionic/react';
import React from 'react';
import Header from '../components/Header';
import { chevronBack } from 'ionicons/icons';

import profile from '../assets/icons/person.svg';
import people from '../assets/icons/people.svg';
import time from '../assets/icons/time.svg';
import chevronForward from '../assets/icons/chevron-forward.svg';
import card from '../assets/icons/card.svg';
import settings from '../assets/icons/settings-sharp.svg';
import help from '../assets/icons/help-circle.svg';

const Account: React.FC = () => {

  return (
    <IonPage className="account">
      <IonHeader>
        <IonToolbar>
          <IonTitle>account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Header leftIconType={'icon'} leftIcon={chevronBack} rightIconType='button' rightIcon={'share'} />
        
      <div className="container">
        <div className="account-hero">
          <IonAvatar className="account-hero__image-container">
            <IonImg className="account-hero__image" src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Image of person"></IonImg>
          </IonAvatar>
          <IonText>
            <h1 className="account-hero__title">
              Mari Chasie
            </h1>
          </IonText>
          <IonText>
            <p className="account-hero__subhead">@mchase3</p>
          </IonText>
        </div>

        <div className="account-list">
          <IonItemGroup className="account-list__item">
            <IonItemGroup className="account-list__item-group">
              <IonIcon className="account-list__item-icon" color="primary" icon={profile}></IonIcon>
              <IonText className="account-list__item-text ">Profile</IonText>
            </IonItemGroup>
            <IonIcon className="account-list__item-icon" icon={chevronForward}></IonIcon>
          </IonItemGroup>  
          <IonItemGroup className="account-list__item">
            <IonItemGroup className="account-list__item-group">
              <IonIcon className="account-list__item-icon" color="primary" icon={people}></IonIcon>
              <IonText className="account-list__item-text ">My Friends</IonText>
            </IonItemGroup>
            <IonIcon className="account-list__item-icon" icon={chevronForward}></IonIcon>
          </IonItemGroup>  
          <IonItemGroup className="account-list__item">
            <IonItemGroup className="account-list__item-group">
              <IonIcon className="account-list__item-icon" color="primary" icon={time}></IonIcon>
              <IonText className="account-list__item-text ">Order History</IonText>
            </IonItemGroup>
            <IonIcon className="account-list__item-icon" icon={chevronForward}></IonIcon>
          </IonItemGroup>  
          <IonItemGroup className="account-list__item">
            <IonItemGroup className="account-list__item-group">
              <IonIcon className="account-list__item-icon" color="primary" icon={card}></IonIcon>
              <IonText className="account-list__item-text ">Payment Methods</IonText>
            </IonItemGroup>
            <IonIcon className="account-list__item-icon" icon={chevronForward}></IonIcon>
          </IonItemGroup>  
          <IonItemGroup className="account-list__item">
            <IonItemGroup className="account-list__item-group">
              <IonIcon className="account-list__item-icon" color="primary" icon={settings}></IonIcon>
              <IonText className="account-list__item-text ">Settings</IonText>
            </IonItemGroup>
            <IonIcon className="account-list__item-icon" icon={chevronForward}></IonIcon>
          </IonItemGroup>  
          <IonItemGroup className="account-list__item">
            <IonItemGroup className="account-list__item-group">
              <IonIcon className="account-list__item-icon" color="primary" icon={help}></IonIcon>
              <IonText className="account-list__item-text ">Help Center</IonText>
            </IonItemGroup>
            <IonIcon className="account-list__item-icon" icon={chevronForward}></IonIcon>
          </IonItemGroup>  
        </div> 
        <IonButton className="account__button"> Log Out</IonButton>  
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Account;