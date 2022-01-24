import { connect } from 'react-redux';
import App from './App';

const mapDispatchToProps = (dispatch) => {
  return {
    storeUserDetails: (userInfo) => {
      dispatch({
          type:"UPDATE_USER_DETAILS",
          payload:userInfo
      });
    },
    logOut:()=>{
        dispatch({type:'RESET_USER_DETAILS'})
    }
  };
};
export default connect(null, mapDispatchToProps)(App);
