import './Testimonial.css'
import React from 'react'

const Testimonial = ({img, nombre, stars, text}) => {
  return (
    <div className='testimonial__container'>
        <div>
          <img className='testimonial__photo' src={img} alt='foto profile 1'/>
          <h2 className='testimonial__name'>{nombre}</h2>
        </div>
        <div className="testimonial__content">
          <p>{stars}</p>
          <p className='testimonial__text'>{text}</p>
        </div>
    </div>
  )
}

export default Testimonial