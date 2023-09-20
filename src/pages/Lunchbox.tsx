import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonItemGroup, IonIcon, IonImg, IonLabel, IonListHeader } from '@ionic/react';
import React, { useState } from 'react';
import Header from '../components/Header';
import FloatingNav from '../components/FloatingNav';
import Pagination from '../components/Pagination';

import chevronRight from '../assets/icons/chevron-forward.svg';
import gift from '../assets/icons/gift.svg';

const Lunchbox: React.FC = () => {

  const [newGift, isNewGift] = useState(true);

  return (
    <IonPage className="lunchbox">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lunchbox</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="container">
          <Header />
          <div className="lunchbox-list">
            <IonListHeader className="lunchbox-list__header">
              <IonLabel className="ion-text-center">
                <h1 className="lunchbox___title">My Lunchbox</h1>
              </IonLabel>
                <IonItemGroup className="lunchbox__subtitle-group">
                  <IonLabel className="ion-text-left">
                    <p className="lunchbox__subtitle">Days Left</p>
                  </IonLabel>
                  <IonLabel className="ion-text-left">
                    <p className="lunchbox__subtitle">Redeeming At</p>
                  </IonLabel>
                </IonItemGroup>
            </IonListHeader>
            <IonItemGroup className="lunchbox-list__item">
              <IonIcon color="primary" icon={gift} className="lunchbox-list__icon"></IonIcon>
              {newGift === true ?
                <IonText className="lunchbox-list__title">New Gift!</IonText>
              :
                <div className="lunchbox-list__image-container">
                  <IonImg className="lunchbox-list__image" src="https://picsum.photos/200/300"></IonImg>
                </div>
              }
              <IonIcon className="lunchbox-list__arrow" icon={chevronRight}></IonIcon>
            </IonItemGroup>
            <IonItemGroup className="lunchbox-list__item">
              <IonIcon color="primary" icon={gift} className="lunchbox-list__icon"></IonIcon>
              {newGift === true ?
                <IonText className="lunchbox-list__title">New Gift!</IonText>
              :
                <div className="lunchbox-list__image-container">
                  <IonImg className="lunchbox-list__image" src="https://picsum.photos/200/300"></IonImg>
                </div>
              }
              <IonIcon className="lunchbox-list__arrow" icon={chevronRight}></IonIcon>
            </IonItemGroup>
            <IonItemGroup className="lunchbox-list__item">
              <IonIcon color="primary" icon={gift} className="lunchbox-list__icon"></IonIcon>
              {newGift === true ?
                <IonText className="lunchbox-list__title">New Gift!</IonText>
              :
                <div className="lunchbox-list__image-container">
                  <IonImg className="lunchbox-list__image" src="https://picsum.photos/200/300"></IonImg>
                </div>
              }
              <IonIcon className="lunchbox-list__arrow" icon={chevronRight}></IonIcon>
            </IonItemGroup>
            <IonItemGroup className="lunchbox-list__item">
              <IonIcon color="primary" icon={gift} className="lunchbox-list__icon"></IonIcon>
              {newGift === true ?
                <IonText className="lunchbox-list__title">New Gift!</IonText>
              :
                <div className="lunchbox-list__image-container">
                  <IonImg className="lunchbox-list__image" src="https://picsum.photos/200/300"></IonImg>
                </div>
              }
              <IonIcon className="lunchbox-list__arrow" icon={chevronRight}></IonIcon>
            </IonItemGroup>
            <IonItemGroup className="lunchbox-list__item">
              <IonIcon color="primary" icon={gift} className="lunchbox-list__icon"></IonIcon>
              {newGift === true ?
                <IonText className="lunchbox-list__title">New Gift!</IonText>
              :
                <div className="lunchbox-list__image-container">
                  <IonImg className="lunchbox-list__image" src="https://picsum.photos/200/300"></IonImg>
                </div>
              }
              <IonIcon className="lunchbox-list__arrow" icon={chevronRight}></IonIcon>
            </IonItemGroup>
          </div>
          <Pagination />
          <FloatingNav />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Lunchbox;