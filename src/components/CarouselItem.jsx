import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setFavorite, removeFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import PlayIcon from '../assets/static/play-icon.png';
import PlusIcon from '../assets/static/plus-icon.png';
import RemoveIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({ id, cover, title, year, contentRating, duration });
  };
  const handleRemoveFavorite = (itemId) => {
    props.removeFavorite(itemId);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img className='carousel-item__details--img' src={PlayIcon} alt='Play Icon' />
          </Link>

          {isList ? (
            <img
              className='carousel-item__details--img'
              src={RemoveIcon}
              alt='Plus Icon'
              onClick={() => handleRemoveFavorite(id)}
            />
          ) : (
              <img
                className='carousel-item__details--img'
                src={PlusIcon}
                alt='Plus Icon'
                onClick={handleSetFavorite}
              />
            )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setFavorite,
  removeFavorite,
};

// export default CarouselItem;
export default connect(null, mapDispatchToProps)(CarouselItem);
