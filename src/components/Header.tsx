import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemGroup, IonAvatar, IonImg, IonIcon } from '@ionic/react';
import React from 'react';

import logoName from '../assets/logos/nuncmitto-name.png';

interface HeaderProps {
  leftIconType: string;
  leftIcon: string;
  rightIconType: string;
  rightIcon: string;
}

const Header: React.FC<HeaderProps> = ({ leftIconType, leftIcon, rightIconType, rightIcon }) => {

  function handleClick() {
    console.log("hi");
  }

  return (
    <IonItemGroup className="header">
      {leftIconType === 'image' 
        ? <IonImg className="header__icon" src="https://via.placeholder.com/24x24" alt="Logo" slot="start"></IonImg>
        : <IonIcon className="header__icon" slot="start" icon={leftIcon} onClick={handleClick}></IonIcon>
      }
      <IonImg className="header__logo" src={logoName} alt="Logo"></IonImg>
      {rightIconType === 'image' 
        ? <IonImg className="header__icon" src="https://via.placeholder.com/24x24" alt="Logo" slot="end"></IonImg>
        : <IonIcon className="header__icon" slot="end" icon={rightIcon} onClick={handleClick}></IonIcon>
      }
    </IonItemGroup>
  );
}

export default Header;