import { connect } from 'react-redux';
import Smart from './smart';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Smart);
