import React from 'react';
import PropTypes from 'prop-types';
import styles from './Church.css';

const Church = (props)=> {
  const {
    name,
    location,
    time,
    photo,
    rings,
    poem,
    icons,
  } = props;

  const rightPanelStyles = [styles.side, styles.right, styles.church];

  return ( 
    <div style={{
      backgroundColor: '#7A2D59',
      textAlign: 'center',
    }}>
      <div className={styles['center-module']}>
        <div className={styles['side-by-side']}>
          <div className={styles.side}>
            <div>
              <img src={rings} alt='Anillos' />
            </div>
            <div>
              <blockquote>
                <pre>
                  {poem.text}
                </pre>
              </blockquote>
              <cite>– {poem.author}</cite>
            </div>
          </div>
          <div className={rightPanelStyles.join(' ')}>
            <div>
              <img src={photo} alt='Iglesia' />
            </div>
            <div className={styles.churchText}>Iglesia {name}</div>
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

Church.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.object.isRequired,
  photo: PropTypes.string.isRequired,
  rings: PropTypes.string.isRequired,
  poem: PropTypes.object.isRequired,
  icons: PropTypes.object.isRequired,
}

export default Church;