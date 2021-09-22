import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// import { connect } from 'react-redux';

import './Greeting.css';

function Greeting(props) {

  const { greetingText, greetingHourRange } = props;

  const generateGreeting = () => {
    const currentHour = moment().format("HH");

    if (currentHour >= greetingHourRange.morning.from && currentHour < greetingHourRange.morning.to) {
      return greetingText.morning;
    } else if (currentHour >= greetingHourRange.afternoon.from && currentHour < greetingHourRange.afternoon.to) {
      return greetingText.afternoon;
    } else if (currentHour >= greetingHourRange.evening.from && currentHour < greetingHourRange.evening.to) {
      return greetingText.evening;
    } else if (currentHour >= greetingHourRange.night.from || currentHour < greetingHourRange.night.to) {
      return greetingText.night;
    } else {
      return "Hello"
    }
  }

  return (
    <div className='Greeting' >
      <h2 className='sf-2'>{generateGreeting()}</h2>
    </div>
  );
}

Greeting.propTypes = {
  greetingText: PropTypes.shape({
    morning: PropTypes.string,
    afternoon: PropTypes.string,
    evening: PropTypes.string,
    night: PropTypes.string,
  }),
  greetingHourRange: PropTypes.shape({
    morning: PropTypes.shape({
      from: PropTypes.number,
      to: PropTypes.number,
    }),
    afternoon: PropTypes.shape({
      from: PropTypes.number,
      to: PropTypes.number,
    }),
    evening: PropTypes.shape({
      from: PropTypes.number,
      to: PropTypes.number,
    }),
    night: PropTypes.shape({
      from: PropTypes.number,
      to: PropTypes.number,
    }),
  }),
}

Greeting.defaultProps = {
  greetingText: {
    morning: 'Good morning.',
    afternoon: 'Good afternoon.',
    evening: 'Good evening.',
    night: 'Good night.',
  },
  greetingHourRange: {
    morning: {
      from: 4,
      to: 12,
    },
    afternoon: {
      from: 12,
      to: 17,
    },
    evening: {
      from: 17,
      to: 20,
    },
    night: {
      from: 20,
      to: 4,
    },
  },
}

export default Greeting