import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import ResultItem from 'components/Results/ResultItem.jsx';

// Styles
import 'containers/SearchResults.scss';

class SearchResults extends Component {
    render() {
        const { routes } = this.props;
        return (
            <div className="search-results__wrap">
                { routes.status !== 'idle' && 
                    <div className="search-results">
                        <h1 className="search-results__title">Search Results</h1>
                        { routes.options.map((route, index) => {
                                return (
                                    <ResultItem
                                        key={index}
                                        route={route}
                                    />
                                );
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    routes: state.routes
});

SearchResults.propTypes = {
    routes: PropTypes.object
}

export default connect(mapStateToProps, null)(SearchResults);
