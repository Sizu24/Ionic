import { IonContent, IonCard, IonIcon, IonImg, IonText, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonItemGroup } from '@ionic/react';
import React from 'react';
import Header from '../components/Header';

import { star, walletOutline, heart, bagHandle, chevronBack, informationCircleOutline } from 'ionicons/icons';

import './merchant.css';
import './globals.css';
import MerchantCard from '../components/MerchantCard';
import MerchantMenu from '../components/MerchantMenu';

const Merchant: React.FC = () => {

  return (
    <IonPage className="merchant">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Merchant</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        <div className='container'>
          <Header leftIconType="icon" leftIcon={chevronBack} rightIconType="icon" rightIcon={bagHandle} />
          <MerchantCard />
        </div>
        <MerchantMenu />
      </IonContent>
    </IonPage>
  );
};

export default Merchant;