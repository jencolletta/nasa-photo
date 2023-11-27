import './App.css'
import PropTypes from 'prop-types'
import React from 'react'

const NasaImage = ({ nasaImage: { date, explanation, title, url } }) => {
  return (
    <div>
      <div className='gallery-item'>
        <img src={url} alt={title} className='gallery-image' />
        <div class='gallery-item-info'>
          <ul>
            <li class='gallery-item-explanation'>{explanation}</li>
          </ul>
        </div>
      </div>
      <div className='gallery-item-title'>{title}</div>
      <div className='gallery-item-date'>{date}</div>
    </div>
  )
}

NasaImage.propTypes = {
  nasaImage: PropTypes.shape({
    date: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
}

export default NasaImage
