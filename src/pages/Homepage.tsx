import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonAvatar, IonText, IonInput, IonImg, IonButton, IonItemGroup, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonItem } from '@ionic/react';
import { searchOutline, optionsOutline } from 'ionicons/icons';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

import './homepage.css';
import './section.css';
import './globals.css';

import logoName from '../assets/logos/nuncmitto-name.png';
import RestaurantsSlider from '../components/RestaurantsSlider';

const Homepage: React.FC = () => {

  return (
    <IonPage className="home">
      
      <IonHeader>
        <IonToolbar>
          <IonTitle>Homepage</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="home-content">
        <div className="home-container container">
          <IonItemGroup className="home-header header">
            <IonAvatar className="home-header__avatar">
              <IonImg className="home-header__avatar-image" src="https://via.placeholder.com/28x28" alt="Logo"></IonImg>
            </IonAvatar>
            <IonImg className="home-header__logo header__logo" src={logoName} alt="Logo"></IonImg>
            <IonImg className="home-header__icon" src="https://via.placeholder.com/24x24" alt="Logo"></IonImg>
          </IonItemGroup>

          <Swiper pagination={true} spaceBetween={"30"} className="hero-swiper">
            <SwiperSlide className="hero-swiper__slide">
            <div className="hero-info-box">
              <IonText className="hero-info-box__text">
                ad space
              </IonText>
              <IonText className="hero-info-box__text">
                Special Deals Now!
              </IonText>
              <IonText className="hero-info-box__text">
                ad space
              </IonText>
            </div>
            </SwiperSlide>
            <SwiperSlide className="hero-swiper__slide">
            <div className="hero-info-box">
              <IonText className="hero-info-box__text">
                ad space
              </IonText>
              <IonText className="hero-info-box__text">
                Special Deals Now!
              </IonText>
              <IonText className="hero-info-box__text">
                ad space
              </IonText>
            </div>
            </SwiperSlide>
          </Swiper>
          <form className="home-form">
            <IonInput className="home-form__input ion-margin-bottom ion-margin-top" name="food-search" type="text" placeholder='Search food and restaurants'></IonInput>
            <IonIcon className="home-form__input-icon home-form__input-icon--left" icon={searchOutline}></IonIcon>
            <IonIcon className="home-form__input-icon home-form__input-icon--right" icon={optionsOutline}></IonIcon>
          </form>
          <IonText className="home__headline">one place, all your favorites!</IonText>
          <IonButton fill="clear" className="home__button">
            Send Gift Now!
          </IonButton>
          <IonItemGroup className='home__text-group'>
            <IonText className="section__title ion-padding">Top Restaurants Near By</IonText>
            <IonButton fill="clear">View All</IonButton>
          </IonItemGroup>
          <RestaurantsSlider />
          <IonItemGroup className="home-shortcuts ion-padding">
            <IonImg className="home-shortcuts__icon" src="https://via.placeholder.com/24x24" alt="" />
            <IonImg className="home-shortcuts__icon" src="https://via.placeholder.com/24x24" alt="" />
            <IonImg className="home-shortcuts__icon" src="https://via.placeholder.com/24x24" alt="" />
          </IonItemGroup>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Homepage;