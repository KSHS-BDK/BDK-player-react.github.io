import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import './PlayButton.css';

function PlayButton(props) {

  const getStyleObject = () => {
    const style = {
      width: `${props.size}px`,
      height: `${props.size}px`,
      fontSize: `${props.size * 0.5}px`,
    }
    return props.isDefaultHidden
      ? {
        ...style,
        opacity: props.show? '1' : '0',
      } 
      : {
        ...style,
      }
  }

  const onButtonClick = (e) => {
    e.preventDefault();
    // e.stopPropagation();
    props.onClick(e);
  }

  return (
    <div 
      className={`PlayButton ${props.className}`}
      style={getStyleObject()}
      name={props.buttonName}
      onClick={onButtonClick}
    >
      <i className="bi bi-play-fill"></i>
    </div>
  );
}

PlayButton.propTypes = {
  isDefaultHidden: PropTypes.bool,
  show: PropTypes.bool,
  size: PropTypes.number,
  buttonName: PropTypes.string,
  onClick: PropTypes.func,
}

PlayButton.defaultProps = {
  isDefaultHidden: false,
  show: true,
  size: 40,
  onClick: (e) => { console.log(e) },
}

export default PlayButton