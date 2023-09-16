import React from 'react';
import { IonText, IonButton } from '@ionic/react';

const FloatingCart: React.FC = () => {
  return (
    <div className="floating-cart">
      <IonText className="floating-cart__price">$20.50</IonText>
      <IonButton className="floating-cart__button">Checkout</IonButton>
    </div>
  );
}

export default FloatingCart;