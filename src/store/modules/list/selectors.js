const rootSelector = state => state.list;

export const getIsLoading = state => rootSelector(state).getIn(['isLoading']);
export const getEntry = (state, id) => rootSelector(state).getIn(['items', id]);
export const getEntries = (state, id) => rootSelector(state).getIn(['items']);
