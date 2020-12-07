import {connect} from 'react-redux';
import UserProfile from '../../Components/User/UserProfile';
import {userLogout} from '../../../Actions/UserActions';

const mapStateToProps = (state) => {
  const {user} = state.user;
  return {
    user,
  };
};

export default connect(mapStateToProps, {
  userLogout,
})(UserProfile);
