import { IonItemGroup, IonButton, IonText } from "@ionic/react";
import React from "react";

import MenuItem from "./MenuItem";

const MerchantMenu: React.FC = () => {
  return (
    <div className="menu">
      <div className="menu__punchout"></div>
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
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}

export default MerchantMenu;