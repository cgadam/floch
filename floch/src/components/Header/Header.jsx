import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

class Header extends React.Component {
  render() {
    var settings = {
      fade: true,
      arrows: false,
      speed: 300,
      autoplay: true,
    };
    const images = this.props.images.map((image) => {
      return (
        <div className={styles.tile}>
          <img src={image} alt='Header Hero' />
        </div>
      );
    });
    return (
      <Slider {...settings}>
        { images }
      </Slider>
    );
  };
}

Header.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Header;
