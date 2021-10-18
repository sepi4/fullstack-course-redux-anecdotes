import { useDispatch } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = () => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        // input-kentän arvo muuttujassa event.target.value
        console.log(event.target.value);
        const value = event.target.value.trim();
        dispatch(setFilter(value));
    };
    const style = {
        marginBottom: 10,
    };

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    );
};

export default Filter;
