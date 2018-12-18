import {
  compose,
  setDisplayName,
  lifecycle,
  branch,
  renderComponent,
} from 'recompose';
import { connect } from 'react-redux';
import { fetch } from '../../store/modules/list/actions';
import { getIsLoading } from '../../store/modules/list/selectors';
import React from 'react';

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetch()),
});

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

export default compose(
  setDisplayName('ListFetch'),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      const { isLoading, fetch } = this.props;

      if (!isLoading) {
        fetch();
      }
    },
  }),
  branch(
    ({ isLoading = false }) => isLoading,
    renderComponent(() => <div>Loading...</div>),
  ),
);
