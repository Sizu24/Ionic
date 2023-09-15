import React from "react";
import { IonText, IonCard, IonImg, IonItemGroup, IonButton } from "@ionic/react";

import './menuItem.css';

const MenuItem: React.FC = () => {
  return (
    <IonCard className="menu-item">
      <div className="menu-item__section">
        <div className="menu-item__image-container">
          <IonImg className="menu-item__image" src="https://via.placeholder.com/24x24"></IonImg>
        </div>
        <IonItemGroup className="menu-item__group">
          <IonText className="menu-item__title">Pan Fried Won Ton</IonText>
          <IonText className="menu-item__price">$8.95</IonText>
        </IonItemGroup>
      </div>
      <IonButton color="light" className="menu-item__button">Add</IonButton>
    </IonCard>
  );
}

export default MenuItem;