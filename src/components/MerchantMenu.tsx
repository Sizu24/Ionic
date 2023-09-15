import { IonContent, IonItemGroup, IonButton, IonText, IonCard, IonImg } from "@ionic/react";
import React from "react";

import './merchantMenu.css';
import '../pages/globals.css';
import MenuItem from "./MenuItem";

const MerchantMenu: React.FC = () => {
  return (
    <div className="menu">
      <div className="container">
        <IonItemGroup className="menu-nav">
          <IonButton className="menu-nav__button active ion-no-padding" fill="clear">Menu Items</IonButton>
          <IonButton className="menu-nav__button" fill="clear">Special Deals</IonButton>
          <IonButton className="menu-nav__button ion-no-padding" fill="clear">About</IonButton>
        </IonItemGroup>
        <div className="menu-items">
          <IonText className="menu-items__category" color="primary">Appetizers</IonText>
        </div>
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}

export default MerchantMenu;