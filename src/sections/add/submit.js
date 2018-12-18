import { compose, setDisplayName } from 'recompose';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { create } from '../../store/modules/list/actions';

const mapDispatchToProps = dispatch => ({
  onSubmit: values => {
    dispatch(create(values));
  },
});

export default compose(
  setDisplayName('AddSubmit'),
  connect(
    null,
    mapDispatchToProps,
  ),
  reduxForm({
    form: 'addForm',
  }),
);
