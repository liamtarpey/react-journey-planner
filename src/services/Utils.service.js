/**
 * Ignore seconds
 * @param {String} time | format: 00:00:00
 */
export const humanReadableTime = (time) => {

    const splitTime = time.split(':');
    const hours = parseInt(splitTime[0], 10);
    const minutes = parseInt(splitTime[1], 10);

    if (hours > 0) {
        return `${hours}h${minutes}m`;
    }

    return `${minutes}m`;
};

export default {
    humanReadableTime
}
