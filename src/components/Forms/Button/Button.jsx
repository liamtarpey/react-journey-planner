import React from 'react';
import PropTypes from 'prop-types';

// Styles
import 'components/Forms/Button/Button.scss';

const Button = (props) => {
    return (
        <button 
            type="submit" 
            className="button"
            onClick={ props.handleClick }>
            { props.value }
        </button>
    );
};

Button.propTypes = {
    value: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Button;
