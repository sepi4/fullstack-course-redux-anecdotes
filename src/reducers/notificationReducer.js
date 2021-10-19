// action
export const setNotification = (text, time) => {
    return async (dispatch) => {
        const clearNotificationTimeoutId = setTimeout(() => {
            dispatch(clearNotification());
        }, time * 1000);

        const notification = {
            value: text,
            clearNotificationTimeoutId,
        };

        dispatch({
            type: 'SET_NOTIFICATION',
            data: { notification },
        });
    };
};
// action
export const clearNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION',
    };
};

const reducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            if (state) {
                clearTimeout(state.clearNotificationTimeoutId);
            }
            return action.data.notification;
        case 'CLEAR_NOTIFICATION':
            return null;
        default:
            return state;
    }
};

export default reducer;
