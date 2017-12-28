export const updateRoutes = (routes) => (dispatch) => {
    dispatch({
        type: 'CHANGE_ROUTES',
        options: routes,
        status: 'active'
    });
};

export const resetRoutes = () => (dispatch) => {
    dispatch({
        type: 'RESET_ROUTES',
        options: [],
        status: 'idle'
    });
};

export default {
    updateRoutes,
    resetRoutes
}
