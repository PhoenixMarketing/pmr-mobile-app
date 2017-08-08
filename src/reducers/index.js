import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SelectionReducer from './SelectionReducer';
import EventReducer from './EventReducer';
import MyEventReducer from './MyEventReducer';

export default combineReducers({
  auth: AuthReducer,
  events: EventReducer,
  selectedEventId: SelectionReducer,
  userEvents: MyEventReducer,
});
