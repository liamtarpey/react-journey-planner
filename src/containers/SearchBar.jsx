import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import FormInput from 'components/Forms/FormInput/FormInput.jsx';
import Button from 'components/Forms/Button/Button.jsx';

// Actions
import { updateRoutes, resetRoutes } from 'actions/routes.actions.js';

// Services
import JourneyPlanner from 'services/JourneyPlanner.service.js';

// Styles
import 'containers/SearchBar.scss';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            depart: null,
            end: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.stateSetter = this.stateSetter.bind(this);
    }

    /**
     * Handles updating of form fields
     * @param {Event}
     * @param {String} field | field we want to update in state
     */
    handleInputChange(e, field) {
        
        if (e) {
            e.preventDefault();
        }

        this.stateSetter(field, e.target.value);
    }

    /**
     * Handles form submission
     * @param {Event}
     */
    submitForm(e) {

        if (e) {
            e.preventDefault();
        }

        const onError = (error) => {
            console.log('ERR:', error);
        };  

        const onSuccess = (response) => {
            console.log('RES:', response);
            if (!response.routes || !response.routes.length) {
                onError('No routes found!');
                return false;
            }

            this.props.dispatchUpdateRoutes(response.routes);
        };

        JourneyPlanner.getFromTo(this.state.depart, this.state.end).then(onSuccess).catch(onError);
    }

    resetForm() {
        this.props.dispatchResetRoutes();
    }

    /**
     * Updates (sets) the state of the component
     * @param {String} field - the field to update
     * @param {String} value - the value to update the field with
     */
    stateSetter(field, value) {
        if (this.state[field] !== value) {
            this.setState({
                [field]: value
            });
        }
    }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={ this.submitForm }>
                    <FormInput 
                        placeholder="Depart"
                        handleChange={ e => this.handleInputChange(e, 'depart') }
                    />
                    <FormInput 
                        placeholder="End"
                        handleChange={ e => this.handleInputChange(e, 'end') }
                    />
                    <Button 
                        value="Search"
                        handleClick={ this.submitForm }
                    />
                </form>
                <Button 
                        value="Reset"
                        handleClick={ this.resetForm }
                    />
            </div>
        );
    }
}

SearchBar.propTypes = {
    dispatchUpdateRoutes: PropTypes.func.isRequired,
    dispatchResetRoutes: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    dispatchUpdateRoutes: routes => dispatch(updateRoutes(routes)),
    dispatchResetRoutes: () => dispatch(resetRoutes())
});

export default connect(null, mapDispatchToProps)(SearchBar);
