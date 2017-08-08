import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAOrWL2DrRwgf-bdLSHMCqH6f9baycjWEo',
      authDomain: 'pmrapp-a4467.firebaseapp.com',
      databaseURL: 'https://pmrapp-a4467.firebaseio.com',
      projectId: 'pmrapp-a4467',
      storageBucket: 'pmrapp-a4467.appspot.com',
      messagingSenderId: '822636726791'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
