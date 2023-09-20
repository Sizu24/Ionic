 import React from "react";
 import { IonItemGroup, IonImg } from "@ionic/react";

 const FloatingNav: React.FC = () => {
  return (
    <IonItemGroup className="home-shortcuts ion-padding">
    <IonImg className="home-shortcuts__icon" src="https://via.placeholder.com/24x24" alt="" />
    <IonImg className="home-shortcuts__icon" src="https://via.placeholder.com/24x24" alt="" />
    <IonImg className="home-shortcuts__icon" src="https://via.placeholder.com/24x24" alt="" />
  </IonItemGroup>
  );
 }

 export default FloatingNav;