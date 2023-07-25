import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.feedback}>
      <div className={css.feedbackOptions}>
        <span className={css.option}>
          <span>Good:</span>
          <span>{good}</span>
        </span>
        <span className={css.option}>
          <span>Neutral:</span>
          <span>{neutral}</span>
        </span>
        <span className={css.option}>
          <span>Bad:</span>
          <span>{bad}</span>
        </span>
      </div>
      <div className={css.totalFeedback}>
        <span className={css.option}>
          <span>Total:</span>
          <span>{total}</span>
        </span>
        {total ? (
          <span className={css.option}>
            <span>Positive:</span>
            <span>{positivePercentage} %</span>
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
