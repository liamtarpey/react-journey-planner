import React from 'react';
import PropTypes from 'prop-types';

// Components
import ResultStep from 'components/Results/ResultStep.jsx';

// Services
import { humanReadableTime } from 'services/Utils.service.js';

// SVG
import { IconTrain } from 'statics/SvgIcons.js';

// Styles
import 'components/Results/ResultItem.scss';

const ResultItem = (props) => {
    return (
        <div className="result-item">
            <div className="result-item__header">
                <div className="result-item__duration">
                    <div className="icon">
                        <IconTrain />
                    </div>
                    {humanReadableTime(props.route.duration)}
                </div>
                <div className="result-item__schedule">
                    {props.route.departure_time} - {props.route.arrival_time}
                </div>
            </div>
            <div className="result-item__steps">
                {props.route.route_parts.map((step, index) => {
                        return(
                            <ResultStep
                                key={index}
                                mode={step.mode}
                                coords={step.coordinates}
                                from={step.from_point_name}
                                to={step.to_point_name}
                                duration={step.duration}
                                depart={step.departure_time}
                                arrival={step.arrival_time}
                                tubeLine={step.line_name}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

ResultItem.propTypes = {
    route: PropTypes.object.isRequired
};

export default ResultItem;
