import React from 'react';
import PropTypes from 'prop-types';
import styles from './Salon.css';

const Salon = (props)=> {
  const {
    name,
    location,
    time,
    photo,
    icons,
  } = props;

  const rightPanelStyles = [styles.side, styles.right, styles.salon];

  return ( 
    <div className={styles.module}>
      <div className={styles['center-module']}>
        <div className={styles['side-by-side']}>
          <div className={styles.side}>
            <img src={photo} alt='La Cautiva' />
          </div>
          <div className={rightPanelStyles.join(' ')}>
            <div className={styles.salonText}>{name}</div>
            <div>{`${time.format('HH:mm')} hs`}</div>
            <div>
              <a target='_blank' rel='noopener noreferrer' className='location' href={location}>
                <img src={icons.gmaps} alt='Google Maps' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Salon.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.object.isRequired,
  photo: PropTypes.string.isRequired,
  icons: PropTypes.object.isRequired,
}

export default Salon;