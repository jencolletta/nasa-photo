import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const NasaImage = ({
  nasaImage: {
    date, url, explanation, title,
  },
}) => {

  return (
    <div>
      <div className="gallery-item">
        <img src={url} alt="Nasa Image" className="gallery-image" />
        <div class="gallery-item-info">
          <ul>
            <li class="gallery-item-explanation">{explanation}</li>
          </ul>
        </div>
      </div>
      <div className="gallery-item-title">{title}</div>
      <div className="gallery-item-date">{date}</div>
    </div>
  )
};

NasaImage.propTypes = {
  nasaImage: PropTypes.shape({
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired
  }),
};

export default NasaImage;