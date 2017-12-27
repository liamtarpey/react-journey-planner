import React, { Component } from 'react';

// Components
import FormInput from 'components/Forms/FormInput/FormInput.jsx';
import Button from 'components/Forms/Button/Button.jsx';

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
        this.stateSetter = this.stateSetter.bind(this);
    }

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

        const onSuccess = (response) => {
            console.log('RES:', response);
            // update map
        };

        const onError = (error) => {
            console.log('ERR:', error);
            // throw error
        };  

        JourneyPlanner.getFromTo(this.state.depart, this.state.end).then(onSuccess).catch(onError);
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
            </div>
        );
    }
}

export default SearchBar;
