import { useSelector, useDispatch } from 'react-redux';

import { voteAction } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

function AnecdoteList() {
    const anecdotes = useSelector((state) => state.anecdotes);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const vote = (anecdote) => {
        dispatch(voteAction(anecdote.id));
        dispatch(setNotification(`you voted '${anecdote.content}'`, 3));
    };

    const filtered = anecdotes
        .filter((a) => a.content.indexOf(filter) > -1)
        .map((anecdote) => (
            <div key={anecdote.id}>
                <div>{anecdote.content}</div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
            </div>
        ));
    return <div>{filtered}</div>;
}

export default AnecdoteList;
