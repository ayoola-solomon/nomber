import { connect } from 'react-redux';
import Logic from './logic';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

export default connect(mapStateToProps)(Logic);
