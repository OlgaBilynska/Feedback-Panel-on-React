import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  options,
  onLeaveFeedback
}) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button className={css.button} type="button" onClick={() => onLeaveFeedback(option)}>
            {option === 'good' && "Good"}
            {option === 'neutral' && "Neutral"}
            {option === 'bad' && "Bad"}
          </button>
        </li>))}

    </ul>)
};
   
      
      
      {/* <button className={css.button} key='neutral' type="button" onClick={onLeaveFeedback[1]}>
        Neutral
      </button>
      
      <button className={css.button} key='bad' type="button" onClick={onLeaveFeedback[2]}>
        Bad
      </button> */}
    

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func).isRequired,
}
