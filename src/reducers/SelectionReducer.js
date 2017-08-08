const INITIAL_STATE = null;

export default (state = null, action) => {
  switch (action.type) {
    case 'select_event':
      return action.payload;
    default:
      return INITIAL_STATE;
  }
};
