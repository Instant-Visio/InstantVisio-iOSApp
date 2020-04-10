import { connect } from 'react-redux';
import Smart from './smart';

const mapStateToProps = state => ({
  //recuperer la valeur dans le store
  videoCallIdProps: state.homereducer.getIn(['visio', 'videoCallId'])
});

const mapDispatchToProps = dispatch => ({
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Smart);
