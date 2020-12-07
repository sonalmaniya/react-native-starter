import {connect} from 'react-redux';
import LoginScreen from '../../Components/Login/Login';
import {setUserDetail} from '../../../Actions/UserActions';

export default connect(null, {
  setUserDetail,
})(LoginScreen);
