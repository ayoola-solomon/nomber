import { connect } from 'react-redux';
import Logic from './logic';
import SessionActions from '../../actions/sessions';

const mapStateToProps = ({ session }) => ({
  error: session.error,
});

const mapDispatchToProps = dispatch => ({
  signup: data => dispatch(SessionActions.signup(data)),
  signupWithGoogle: () => dispatch(SessionActions.signupWithGoogle()),
  resetSession: () => dispatch(SessionActions.resetSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logic);
