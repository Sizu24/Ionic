import React from "react";
import { IonCard, IonIcon, IonImg, IonText, IonItemGroup, IonCardContent } from "@ionic/react";
import { star, walletOutline, heart, informationCircleOutline } from 'ionicons/icons';

const MerchantCard: React.FC = () => {
  return (
    <IonCard className="merchant-card">
    <IonIcon className="merchant-card__icon" color="primary" icon={heart} ></IonIcon>
    <IonIcon className="merchant-card__icon" icon={informationCircleOutline}></IonIcon>
    <IonImg className="merchant-card__image" src="https://ionicframework.com/docs/img/demos/card-media.png"></IonImg>
    <div className="merchant-info">
      <div className="merchant-info__logo-container">
        <IonImg className="merchant-info__logo" src="https://via.placeholder.com/100x100" alt="" />
      </div>
      <IonText className="merchant-info__title">
        <h2>Koreana</h2>
      </IonText>
      <IonText className="merchant-info__body ion-text-center">
        <p>329 East Winnemucca BLVD</p>
        <p>Winnemucca, NV 89445</p>
      </IonText>
      <IonText className="merchant-info__data" color="primary">
        <p>Open 8:00 - 10:00</p> 
      </IonText>
      <IonItemGroup className="text-row">
        <IonIcon className="merchant-info__data-icon" color="primary" icon={star}></IonIcon>
        <IonCardContent className="merchant-info__data">5.0</IonCardContent>
        <IonIcon className="merchant-info__data-icon" icon={walletOutline}></IonIcon>
        <IonCardContent className="merchant-info__data"> $25-$65</IonCardContent>
      </IonItemGroup>
    </div>
  </IonCard>
  );
}

export default MerchantCard;