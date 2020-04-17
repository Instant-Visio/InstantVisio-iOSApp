import { connect } from 'react-redux';
import {onChangeAction} from '../../actions';
import Smart from './smart';

const mapStateToProps = state => ({
  modalVisible: state.homereducer.getIn(['form', 'modalVisible']),
});

const mapDispatchToProps = dispatch => ({
  selectCountryName: value => dispatch(onChangeAction(['form', 'countrySelected','name'])(value)),
  selectCountryFlag: value => dispatch(onChangeAction(['form', 'countrySelected','flag'])(value)),
  selectCountryCode: value => dispatch(onChangeAction(['form', 'countrySelected','code'])(value)),
  selectCountryDialCode: value => dispatch(onChangeAction(['form', 'countrySelected','dial_code'])(value)),

  setModalInVisible: value => dispatch(onChangeAction(['form', 'modalVisible'])(value)),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Smart);
