import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import PlayButton from '../../others/PlayButton/PlayButton';

import './CategoryCard.css';

function CategoryCard(props) {

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

  const toggleHover = () => {
    setIsCardHover(!isCardHover)
  }

  const onCardClick = (e) => {
    e.preventDefault();
    props.onCardClick({
      ...props.cardCategory,
    });
  }

  const onPlayButtonClick = (e) => {
    e.preventDefault();
    props.onCardPlayButtonClick(props.cardCategory.list);
  }

  return (
    <div 
      className='CategoryCard rounded-2'
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={onCardClick}
    >
      <div 
        className='card-cover rounded-start' 
        style={{backgroundImage: `url('${cardImagePath}')`, backgroundColor: props.coverBackgroundColor}} 
      >
      </div>
      <div className='card-space' >
        <div className="card-name">{props.cardCategory.title}</div>
        <PlayButton
          isDefaultHidden={true}
          show={isCardHover}
          onClick={onPlayButtonClick}
        />
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  cardCategory: PropTypes.shape({
    title: PropTypes.string,
    label: PropTypes.string,
    list: PropTypes.array,
  }),
  coverBackgroundColor: PropTypes.string,
  onCardClick: PropTypes.func,
  onCardPlayButtonClick: PropTypes.func,
}

CategoryCard.defaultProps = {
  cardCategory: {
    title: 'Default category',
    label: '',
    list: [],
  },
  coverBackgroundColor: '#dddddd',
  onCardClick: (e) => {console.log(e)},
  onCardPlayButtonClick: (e) => {console.log(e)}
}

export default CategoryCard