import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Greeting from '../components/others/Greeting/Greeting';
import CategoryCard from '../components/cards/CategoryCard/CategoryCard';

import { getRandomColors } from '../utils/colors';

import '../styles/Home.css';

function Home(props) {

  const { categoryMusicList } = props;

  const [homeCategories, setHomeCategories] = useState([]);
  const [randomColors] = useState(getRandomColors(6));

  const getRandomCategories = useCallback((count) => {
    const allCategories = _.flatMap(categoryMusicList);
    return _.shuffle(allCategories).slice(0, count);
  }, [categoryMusicList]);

  useEffect(() => {
    const pickedCategories = getRandomCategories(6);
    setHomeCategories(pickedCategories);
  }, [getRandomCategories]);

  function onCardPlayButtonClick(musicList) {
    props.aplayer.list.clear();
    props.aplayer.list.add([...musicList]);
    props.aplayer.play();
  }

  const categoryCards = homeCategories.map((category, index) => {
    return (
      <div className='col-md-6 col-xl-4 pb-3' key={`${index}-${category}`} >
        <CategoryCard
          cardCategory={category}
          coverBackgroundColor={randomColors[index]}
          onCardPlayButtonClick={onCardPlayButtonClick}
        />
      </div>
    );
  });

  return (
    <div className='Home container-fluid px-4' >
      <div className='row content-top-bar'>
      </div>

      <div className='row greeting pb-2' >
        <Greeting />
      </div>

      <div className='row category-row' >
        { window.innerWidth < 992
          ? categoryCards.slice(0, 4)
          : categoryCards
        }
      </div>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return ({
    aplayer: reduxState.player.aplayer,
    categories: reduxState.category.categories,
    categoryMusicList: reduxState.category.categoryMusicList,
  });
}

export default connect(mapStateToProps, {
  
})(Home);