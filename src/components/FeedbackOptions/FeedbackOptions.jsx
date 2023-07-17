import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  options,
  onLeaveFeedback
}) => {
  return (
    <div>
      <button className={css.button} key='good' type="button" onClick={onLeaveFeedback[0]}>
        Good
      </button>
      
      <button className={css.button} key='neutral' type="button" onClick={onLeaveFeedback[1]}>
        Neutral
      </button>
      
      <button className={css.button} key='bad' type="button" onClick={onLeaveFeedback[2]}>
        Bad
      </button>
      
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func).isRequired,
}
