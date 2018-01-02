export const updateView = (action) => (dispatch) => {
    dispatch({
        type: 'SWITCH_VIEW',
        status: action
    });
};

export default {
    updateView
}
