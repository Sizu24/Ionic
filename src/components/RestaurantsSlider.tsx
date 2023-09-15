import React, { useState, useEffect } from 'react';
import { IonCard, IonImg, IonCardHeader, IonCardTitle, IonItemGroup, IonCardContent } from '@ionic/react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

import './restaurantSlider.css';

const RestaurantsSlider: React.FC = () => {
  const [restaurants, setRestaurants] = useState([{
    name: "Koreana",
    logo: "https://via.placeholder.com/72x72",
    image: "https://ionicframework.com/docs/img/demos/card-media.png",
    description: "Basco Bi Bim Bap, Teri...",
    price: "$25-$65",
  },
  {
    name: "Koreana",
    logo: "https://via.placeholder.com/72x72",
    image: "https://ionicframework.com/docs/img/demos/card-media.png",
    description: "Basco Bi Bim Bap, Teri...",
    price: "$25-$65",
  }
]);
  return (
    <Swiper slidesPerView={1.25} spaceBetween={"20"} className="card-swiper">
      {restaurants.map((merchant) => (
      <SwiperSlide>
      <IonCard className="slider-card ion-text-left">
        <div className="slider-card__media">
          <IonImg className="slider-card__image" alt="Silhouette of mountains" src={merchant.image} />
          <div className="slider-card__logo-container">
            <IonImg className="slider-card__logo" src={merchant.logo} alt="" />
          </div>
        </div>
        <div className="slider-card__content">
          <IonCardHeader className='slider-card__header'>
            <IonCardTitle className="slider-card__title">{merchant.name}</IonCardTitle>
          </IonCardHeader>
          <IonItemGroup className="slider__text-group">
            <IonCardContent className="slider-card__body">{merchant.description}</IonCardContent>
            <IonCardContent className="slider-card__data">{merchant.price}</IonCardContent>
          </IonItemGroup>
        </div>
      </IonCard>
    </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default RestaurantsSlider;
