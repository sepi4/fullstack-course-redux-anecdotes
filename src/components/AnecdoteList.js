// import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import { voteAction } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

function AnecdoteList(props) {
    // const anecdotes = useSelector((state) => state.anecdotes);
    // const filter = useSelector((state) => state.filter);

    const anecdotes = props.anecdotes;
    const filter = props.filter;

    // const dispatch = useDispatch();

    const vote = (anecdote) => {
        // dispatch(voteAction(anecdote.id));
        // dispatch(setNotification(`you voted '${anecdote.content}'`, 3));

        props.voteAction(anecdote.id);
        props.setNotification(`you voted '${anecdote.content}'`, 3);
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

// export default AnecdoteList;
export default connect(
    (state) => ({
        anecdotes: state.anecdotes,
        filter: state.filter,
    }),
    {
        voteAction,
        setNotification,
    }
)(AnecdoteList);
