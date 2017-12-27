const changeCoordinates = (state, action) => ({
    ...state,
    current: action.payload
});

const initialState = {
    long: 1,
    lat: 56
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_COORDINATES':
            return changeCoordinates(state, action);
        default:
            return state;
    }
};
