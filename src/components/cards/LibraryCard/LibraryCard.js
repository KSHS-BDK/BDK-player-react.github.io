import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// import { connect } from 'react-redux';

import PlayButton from '../../others/PlayButton/PlayButton';

import './LibraryCard.css';

function LibraryCard(props) {

  const { cardCategory } = props;

  const [isCardHover, setIsCardHover] = useState(false);
  const [cardImagePath, setCardImagePath] = useState('');

  useEffect(() => {
    const categoryMusicImages = cardCategory.list.filter(music => {
      return music.cover? music.cover.length > 0 : false;
    });
    if (categoryMusicImages.length > 0) {
      setCardImagePath(_.shuffle(categoryMusicImages)[0].cover);
    }
  }, [cardCategory]);

  function toggleHover() {
    setIsCardHover(!isCardHover);
  }

  function onPlayButtonClick(e) {
    e.preventDefault();
    e.stopPropagation();
    props.onCardPlayButtonClick(props.cardCategory);
  }

  function onLibraryCardClick(e) {
    e.preventDefault();
    props.onCardClick(props.cardCategory)
  }

  return (
    <div 
      className='LibraryCard rounded-3'
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={onLibraryCardClick}
    >
      <div 
        className='card-image rounded-1' 
        style={{
          backgroundColor: props.coverBackgroundColor,
          backgroundImage: `url('${cardImagePath}')`,
        }}
      >
        <PlayButton 
          isDefaultHidden={true}
          show={isCardHover}
          onClick={onPlayButtonClick}
        />
      </div>
      <div className='card-title'>
        <div className='card-title-main'>{props.cardCategory.title}</div>
        <div className='card-title-sub'>{_.capitalize(props.cardCategory.label)}</div>
      </div>
    </div>
  );
}

LibraryCard.propTypes = {
  coverBackgroundColor: PropTypes.string,
  cardCategory: PropTypes.shape({
    title: PropTypes.string,
    label: PropTypes.string,
    list: PropTypes.array,
  }),
  onCardClick: PropTypes.func,
  onCardPlayButtonClick: PropTypes.func,
}

LibraryCard.defaultProps = {
  cardCategory: {
    title: 'Default category',
    label: 'tags',
    list: [],
  },
  coverBackgroundColor: '#FFF',
  onCardClick: (e) => {console.log(e)},
  onCardPlayButtonClick: (e) => {console.log(e)}
}

export default LibraryCard