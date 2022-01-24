import { connect } from 'react-redux';
import TableComponent from './TableComponent';

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
export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
