import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return ( 
<div className={css.feedback}>
            <span>Good:{good}</span>
            <span>Neutral:{neutral}</span>
            <span>Bad:{bad}</span>
            <span>Total:{total}</span>
           {total ? <span>Positive: {positivePercentage} %</span> : null}             
      </div>
  )
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
