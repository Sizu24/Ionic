import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonInput, IonImg, IonButton, IonItemGroup, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

import React from 'react';

import './homepage.css';
import './header.css';
import './section.css';

import logoName from '../assets/logos/nuncmitto-name.png';

const Homepage: React.FC = () => {

  return (
    <IonPage className="home">
      
      <IonHeader>
        <IonToolbar>
          <IonTitle>Homepage</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="home-content">
        <div className="home-container">
          <IonImg className="header__logo" src={logoName} alt="Logo"></IonImg>
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
          </form>
          <IonText className="home__headline">one place, all your favorites!</IonText>
          <IonButton fill="clear" className="home__button">
            Send Gift Now!
          </IonButton>
          <IonItemGroup className='home__text-group'>
            <IonText className="section__title ion-padding">Top Restaurants Near By</IonText>
            <IonButton fill="clear">View All</IonButton>
          </IonItemGroup>

          <Swiper slidesPerView={1.25} spaceBetween={"20"} className="card-swiper">
            <SwiperSlide>
              <IonCard className="home-card ion-text-left">
                <div className="home-card__media">
                  <img className="home-card__image" alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                </div>
                <div className="home-card__content">
                  <IonCardHeader className='home-card__header'>
                    <IonCardTitle className="home-card__title">Koreana</IonCardTitle>
                  </IonCardHeader>
                  <IonItemGroup className="home__text-group">
                    <IonCardContent className="home-card__body">Basco Bi Bim Bap, Teri...</IonCardContent>
                    <IonCardContent className="home-card__data">$25-$65</IonCardContent>
                  </IonItemGroup>
                </div>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard className="home-card ion-text-left">
                <div className="home-card__media">
                  <img className="home-card__image" alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                </div>
                <div className="home-card__content">
                  <IonCardHeader className='home-card__header'>
                    <IonCardTitle className="home-card__title">Koreana</IonCardTitle>
                  </IonCardHeader>
                  <IonItemGroup className="home__text-group">
                    <IonCardContent className="home-card__body">Basco Bi Bim Bap, Teri...</IonCardContent>
                    <IonCardContent className="home-card__data">$25-$65</IonCardContent>
                  </IonItemGroup>
                </div>
              </IonCard>
            </SwiperSlide>
          </Swiper>

          <IonItemGroup className="home-shortcuts ion-padding">
            <img className="home-shortcuts__icon" src="" alt="" />
            <img className="home-shortcuts__icon" src="" alt="" />
            <img className="home-shortcuts__icon" src="" alt="" />
          </IonItemGroup>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Homepage;