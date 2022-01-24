import { connect } from 'react-redux';
import JsonComponent from './JsonComponent';

const mapStateToProps = (state) => ({
    userName: state?.userDetails?.userName,
});
const mapDispatchToProps = (dispatch) => {
    return {
        storeUserDetails: (userInfo) => {
            dispatch({
                type: "UPDATE_USER_DETAILS",
                payload: userInfo
            });
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(JsonComponent);
