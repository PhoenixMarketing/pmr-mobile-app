import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EventList from './components/EventList';
import MyEventList from './components/MyEventList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene
        key="login"
        component={LoginForm}
        title="Please Login"
        />
      </Scene>

      <Scene key="main">

        <Scene
          onRight={() => Actions.myEvents()}
          rightTitle="My Events"
          key="eventList"
          component={EventList}
          title="Events"
          style={{ flex: 1 }}
          initial
        />
        <Scene
          key="myEvents"
          component={MyEventList}
          title="My Events"
        />
        </Scene>
    </Router>
  );
};

export default RouterComponent;
