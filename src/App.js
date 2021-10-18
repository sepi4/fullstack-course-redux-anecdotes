import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeAnecdotes, sortAnecdotes } from './reducers/anecdoteReducer';

import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Filter from './components/Filter';
import Notification from './components/Notification';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeAnecdotes());
    }, [dispatch]);

    return (
        <div>
            <h2>Anecdotes</h2>
            <AnecdoteForm />
            <hr />
            <Notification />
            <Filter />
            <AnecdoteList />
        </div>
    );
};

export default App;