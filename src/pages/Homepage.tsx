import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonInput } from '@ionic/react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

import React from 'react';

const Homepage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Homepage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <div className="login-info-box">
        <IonText className="login-info-box__body">
          Special Deals Now!
        </IonText>
        <IonText className="login-info-box__body">
          Jonathan Lockwood Huie
        </IonText>
      </div>
        <form>
          <IonInput className="home__input" name="food-search" type="text" placeholder='Search food and restaurants'></IonInput>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Homepage;