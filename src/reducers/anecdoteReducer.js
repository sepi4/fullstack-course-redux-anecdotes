import anecdoteService from '../services/anecdotes';

// action
export const voteAction = (id) => {
    return async (dispatch) => {
        const anecdote = await anecdoteService.vote(id);
        dispatch({
            type: 'VOTE',
            data: { id: anecdote.id },
        });
        dispatch(sortAnecdotes());
    };
};
// action
export const newAnecdote = (content) => {
    return async (dispatch) => {
        const anecdote = await anecdoteService.createNew(content);
        dispatch({
            type: 'ADD',
            data: {
                anecdote,
            },
        });
        dispatch(sortAnecdotes());
    };
};

// action
export const sortAnecdotes = () => {
    return {
        type: 'SORT',
    };
};

// action
export const initializeAnecdotes = () => {
    return async (dispatch) => {
        const anecdotes = await anecdoteService.getAll();
        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdotes,
        });
        dispatch(sortAnecdotes());
    };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'VOTE':
            return state.map((a) => {
                if (a.id === action.data.id) {
                    a.votes++;
                    return a;
                }
                return a;
            });
        case 'ADD':
            return [...state, action.data.anecdote];
        case 'SORT':
            let newState = JSON.parse(JSON.stringify(state));
            newState.sort((a, b) => b.votes - a.votes);
            return newState;
        case 'INIT_ANECDOTES':
            console.log('init', action);
            return action.data;
        default:
            return state;
    }
};

export default reducer;
