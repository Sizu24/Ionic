import React from 'react';
import { IonText, IonButton } from '@ionic/react';

import './floatingCart.css';

const FloatingCart: React.FC = () => {
  return (
    <div className="floating-cart">
      <IonText>$20.50</IonText>
      <IonButton>Checkout</IonButton>
    </div>
  );
}

export default FloatingCart;