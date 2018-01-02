const swichView = (state, action) => ({
    status: action.status
});

export default (state = { status: 'results' }, action) => {
    switch (action.type) {
        case 'SWITCH_VIEW':
            return swichView(state, action);
        default:
            return state;
    }
};
