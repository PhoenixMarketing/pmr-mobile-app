import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  ADD_EVENT,
  EVENT_FETCH_SUCCESS
} from './types';

export const selectEvent = (eventId, expanded) => {
  return {
    type: 'select_event',
    payload: expanded ? null : eventId
  };
};

export const addEvent = ({ event }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/userEvents`)

      .push({ event })
      .then(() => {
        dispatch({ type: ADD_EVENT });
      });
  };
};

export const eventFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/userEvents`)
      .on('value', snapshot => {
        dispatch({ type: EVENT_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const removeEvent = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/userEvents/${uid}`)
      .remove()
      .then(() => {
        Actions.myEvents({ type: 'reset' });
      });
  };
};
