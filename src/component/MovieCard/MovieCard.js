import React from 'react'
import Rate from '../Rate'
import './MovieCard.css'

const MovieCard = ({movie : {name, image, date, description, rating,r }}) => {

    return (
        <div className='container'>
        <div className='movie'>
          <div className='movie-rating'>
           <Rate rating={rating}/>
          </div>
          <div className='movie-img'>
            <img src={image} alt='movie poster' />
          </div>
          <div className='text-movie-cont'>
            <div className='mr-grid'>
              <div className='col1'>
                <h2>{name}</h2>
                <ul className='movie-gen'>
                  <p>{date}</p>
                </ul>
              </div>
            </div>
            <div className='mr-grid summary-row'>
              <h5>SUMMARY</h5>
              <p>{description}</p>
            </div>
            <div className='mr-grid action-row'>
              <div className='col2'>
              <button   className='watch-button'
    onClick={(e) => {
      e.preventDefault();
      window.location.href={r};
      }}
> watch trailler</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MovieCard