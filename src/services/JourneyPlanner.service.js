import axios from 'axios';

// Services
import EndpointBuilder from 'services/EndpointBuilder.service.js';

const getFromTo = (from, to) => {

    const Endpoint = EndpointBuilder.build('fromTo')
                        .replace(':from', `postcode:${from}`)
                        .replace(':to', `postcode:${to}`);

    const onError = error => (
        Promise.reject(error)
    );

    const onSuccess = (result) => {
        if (!result || !result.data) {
            return onError({
                reason: 'API response incorrectly structured'
            });
        }

        return result.data;
    };

    return axios.get(Endpoint).then(onSuccess).catch(onError);
};

export default {
    getFromTo
}
