import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => ({
    userName: state?.userDetails?.userName,
  });
export default connect(mapStateToProps,null)(Header);
