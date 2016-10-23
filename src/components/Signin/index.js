import { connect } from 'react-redux';
import Logic from './logic';
import SessionActions from '../../actions/sessions';

const mapStateToProps = ({ session }) => ({
  error: session.error,
});

const mapDispatchToProps = dispatch => ({
  signin: data => dispatch(SessionActions.signin(data)),
  signupWithGoogle: () => dispatch(SessionActions.signupWithGoogle()),
  resetSession: () => dispatch(SessionActions.resetSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logic);
