import { connect } from 'react-redux';
import {onChangeAction} from '../actions';
import Smart from './smart';


const mapStateToProps = state => ({
  Name: state.homereducer.getIn(['form', 'Name']),
  PhoneNumer: state.homereducer.getIn(['form', 'PhoneNumer']),
  Email: state.homereducer.getIn(['form', 'Email'])
});

const mapDispatchToProps = dispatch => ({
  onChangeeName: value => dispatch(onChangeAction(['form', 'Name'])(value)),
  onChangeePhoneNumber: value => dispatch(onChangeAction(['form', 'PhoneNumer'])(value)),
  onChangeEmail: value => dispatch(onChangeAction(['form', 'Email'])(value)),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {

  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
  };
};
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Smart);
