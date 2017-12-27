import AppKeys from '../../appKeys.json';
import Endpoints from 'constants/Endpoints.constant.js';

const baseUrl = 'https://transportapi.com/v3/';

const addApiKeys = (str) => {
    return str += `?app_id=${AppKeys.appId}&app_key=${AppKeys.appKey}&service=tfl`;
};

const build = (endpoint) => {
    const builtEndpoint = baseUrl + Endpoints[endpoint];
    return addApiKeys(builtEndpoint);
};

export default {
    build
};
