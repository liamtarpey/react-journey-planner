const changeRoutes = (state, action) => ({
    ...state,
    options: action.options,
    status: action.status
});

const resetRoutes = (state, action) => ({
    ...state,
    options: action.options,
    status: action.status
});

const initialState = {
    options: [],
    status: 'idle'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_ROUTES':
            return changeRoutes(state, action);
        case 'RESET_ROUTES':
            return resetRoutes(state, action);
        default:
            return state;
    }
};
