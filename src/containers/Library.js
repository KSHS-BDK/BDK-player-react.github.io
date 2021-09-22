import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import LibrarySearch from './LibrarySearch';
import LibraryTopNav from '../components/navs/LibraryTopNav/LibraryTopNav';
import LibraryCard from '../components/cards/LibraryCard/LibraryCard';

import { getRandomColors } from '../utils/colors';

import '../styles/Library.css';

const navs = [
  {
    title: 'Library',
    value: 'all',
  },
  {
    title: 'Artists',
    value: 'artists',
  },
  {
    title: 'Albums',
    value: 'albums',
  },
  {
    title: 'Tags',
    value: 'tags',
  },
]

function Library(props) {
  
  const { categories, categoriesSummary } = props;

  const [selectedNav, setSelectedNav] = useState('all');
  const [currentCategories, setCurrentCategories] = useState([]);
  const [randomColors, setRandomColors] = useState(getRandomColors());
  const [showTempSearch, setShowTempSearch] = useState(false);
  const [searchedCategory, setSearchedCategory] = useState({});

  useEffect(() => {
    setRandomColors(getRandomColors(_.flatMap(categoriesSummary).length));
  }, [categoriesSummary]);

  useEffect(() => {
    if (selectedNav === 'all') {
      setCurrentCategories(_.flatMap(categories));
    } else {
      setCurrentCategories(categories[selectedNav]);
    }
  }, [selectedNav, categories]);

  function onNavClick(navName) {
    setSelectedNav(navName);
    setShowTempSearch(false);
  }

  function onCardPlayButtonClick(category) {
    props.aplayer.list.clear();
    props.aplayer.list.add([...category.list]);
    props.aplayer.play();
  }

  function onCardClick(category) {
    setShowTempSearch(true);
    setSearchedCategory(category);
  }

  const libraryCards = currentCategories.map((category, index) => {
    return (
      <div className='col-4 col-md-3 col-xl-15 col-xxl-2 mb-3' key={`${index}-${category.title}`} >
        <LibraryCard
          cardCategory={category}
          coverBackgroundColor={randomColors[index]}
          onCardClick={onCardClick}
          onCardPlayButtonClick={onCardPlayButtonClick}
        />
      </div>
    );
  });

  return (
    <div className='Library container-fluid' >
      <div className='row content-top-bar pt-2' >
        <LibraryTopNav 
          navs={navs}
          currentNavigation={selectedNav}
          onNavClick={onNavClick}
        />
      </div>
      { showTempSearch
        ? <LibrarySearch {...props} searchTextFromProps={searchedCategory.title}/>
        : (  
          <div className='row categories' >
            {libraryCards}
          </div>
        )
      }
    </div>
  );
}

function mapStateToProps(reduxState) {
  return ({
    categoriesSummary: reduxState.category.categories,
    categories: reduxState.category.categoryMusicList,
    aplayer: reduxState.player.aplayer,
  });
}

export default connect(mapStateToProps, {
  
})(Library);