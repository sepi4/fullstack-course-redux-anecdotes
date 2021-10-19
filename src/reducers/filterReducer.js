// action
export const setFilter = (filterValue) => {
    return {
        type: 'SET_FILTER',
        data: { filterValue },
    };
};

const initialState = '';

const reducer = (state = initialState, action) => {
    console.log('state now: ', state);
    console.log('action', action);
    switch (action.type) {
        case 'SET_FILTER':
            return action.data.filterValue;
        default:
            return state;
    }
};

export default reducer;
