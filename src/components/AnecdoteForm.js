import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { sortAnecdotes, newAnecdote } from '../reducers/anecdoteReducer';

import {
    setNotification,
    clearNotification,
} from '../reducers/notificationReducer';

function AnecdoteForm() {
    const newAnecdoteInput = useRef(null);
    const dispatch = useDispatch();

    const addNewAnecdote = async (event) => {
        event.preventDefault();
        const content = newAnecdoteInput.current.value.trim();
        newAnecdoteInput.current.value = '';
        if (content.length > 0) {
            dispatch(newAnecdote(content));
            dispatch(sortAnecdotes());

            let clearNotificationTimeoutId = setTimeout(() => {
                dispatch(clearNotification());
            }, 5000);

            dispatch(
                setNotification({
                    value: `New added: "${content}"`,
                    clearNotificationTimeoutId,
                })
            );
        }
    };

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={(e) => addNewAnecdote(e)}>
                <div>
                    <input ref={newAnecdoteInput} />
                </div>
                <button>create</button>
            </form>
        </div>
    );
}

export default AnecdoteForm;
