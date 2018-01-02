import React from 'react';
import PropTypes from 'prop-types';

// Services
import { humanReadableTime } from 'services/Utils.service.js';

import { IconWalk } from 'statics/SvgIcons.js';

// Styles
import 'components/Results/ResultStep.scss';

const ResultStep = (props) => {
    return (
        <div>
            { props.mode === 'foot' && 
                <div className="icon">
                    <IconWalk />
                </div>
            }
            From: {props.from}<br/>
            To: {props.to}<br/>
            Depart: {humanReadableTime(props.depart)}<br/>
            Arrival: {humanReadableTime(props.arrival)}<br/>
            Duration: {humanReadableTime(props.duration)}
        </div>
    );
};

ResultStep.propTypes = {
    mode: PropTypes.string.isRequired,
    coords: PropTypes.array.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    depart: PropTypes.string.isRequired,
    arrival: PropTypes.string.isRequired,
    tubeLine: PropTypes.string
};

export default ResultStep;
