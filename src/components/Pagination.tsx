import { IonItemGroup, IonIcon } from '@ionic/react';
import React from 'react';

import chevronLeft from '../assets/icons/chevron-back.svg';
import chevronRight from '../assets/icons/chevron-forward.svg';

const Pagination: React.FC = () => {

  return (
    <IonItemGroup className="pagination">
      <IonIcon className={"pagination-list__left-arrow"} icon={chevronLeft}></IonIcon>
        <ul className="pagination-list">
          <li className="pagination-list__item">1</li>
          <li className="pagination-list__item">2</li>
          <li className="pagination-list__item">3</li>
        </ul>
      <IonIcon className={"pagination-list__right-arrow"} icon={chevronRight}></IonIcon>
    </IonItemGroup>
  );
};

export default Pagination;