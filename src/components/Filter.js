// import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = (props) => {
    // const dispatch = useDispatch();

    const handleChange = (event) => {
        const value = event.target.value.trim();
        // dispatch(setFilter(value));
        props.setFilter(value);
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

// export default Filter;

export default connect(null, { setFilter })(Filter);
