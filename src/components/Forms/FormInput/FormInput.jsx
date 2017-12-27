import React from 'react';
import PropTypes from 'prop-types';

// Styles
import 'components/Forms/FormInput/FormInput.scss';

const FormInput = (props) => {
    return (
        <input 
            type="text"
            className="form-input"
            placeholder={ props.placeholder }
            onChange={ props.handleChange }
        />
    );
};

FormInput.propTypes = {
    placeholder: PropTypes.string,
    handleChange: PropTypes.func.isRequired
};

FormInput.defaultProps = {
    placeholder: 'Enter a search term'
};

export default FormInput;
