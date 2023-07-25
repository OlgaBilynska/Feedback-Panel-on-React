import PropTypes from 'prop-types';

import css from './Notification.module.css';


const Notification = ({ message }) => {
    return (
        <div className={css.notifix}>
        {message}    
        </div>
    );
}

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}