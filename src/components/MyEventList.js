import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { eventFetch } from '../actions';
import MyEventItem from './MyEventItem';

class MyEventList extends Component {

  componentWillMount() {
    this.props.eventFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ userEvents }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(userEvents);
  }

  renderRow(userEvent) {
    return <MyEventItem userEvent={userEvent} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const userEvents = _.map(state.userEvents, (val, uid) => {
    return { ...val, uid };
  });

  return { userEvents };
};

export default connect(mapStateToProps, { eventFetch })(MyEventList);
