import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => ({
    userName: state?.userDetails?.userName,
    name:state?.userDetails?.displayName,
    myEmail:state?.userDetails?.userEmail,
    imgSrc:state?.userDetails?.imgSrc
  });
export default connect(mapStateToProps,null)(Home);
