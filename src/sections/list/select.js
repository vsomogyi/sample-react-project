import { compose, setDisplayName } from 'recompose';
import { connect } from 'react-redux';
import { getEntries } from '../../store/modules/list/selectors';

const mapStateToProps = state => {
  return {
    entries: getEntries(state),
  };
};

export default compose(
  setDisplayName('ListSelect'),
  connect(mapStateToProps),
);

export const __test__ = {
  mapStateToProps,
};
