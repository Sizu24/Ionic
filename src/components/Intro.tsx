import { IonContent, IonHeader, IonPage, IonTitle,IonText, IonToolbar, IonButton } from '@ionic/react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import React from 'react';

import 'swiper/css';
import './intro.css';

import logo from '../assets/logo.png';
import mainLogo from '../assets/main-logo.png';

interface ContainerProps {
  onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>
}

const Intro: React.FC<ContainerProps>= ({onFinish}) => {

  return (
    <Swiper>
      <SwiperSlide>
        <img src={logo} alt="logo" />
        <IonText>
          <h3>Build apps with ionic component</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
        </SwiperSlide>
      <SwiperSlide>``
        <img src={mainLogo} alt="" />
        <IonText>
          <h3>This is the second page</h3>
        </IonText>
        <IonButton onClick={() => onFinish()}>Finish</IonButton>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;