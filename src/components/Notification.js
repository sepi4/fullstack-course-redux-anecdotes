// import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

const Notification = (props) => {
    // const notification = useSelector((state) => state.notification);
    const notification = props.notification;

    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1,
        margin: '1em',
    };
    if (notification) {
        return <div style={style}>{notification.value}</div>;
    }
    return null;
};

// export default Notification;

export default connect(
    (state) => ({
        notification: state.notification,
    }),
    null
)(Notification);
