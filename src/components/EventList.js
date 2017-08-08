import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import EventItem from './EventItem';

class EventList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.events);
  }

  renderRow(event) {
    return <EventItem event={event} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { events: state.events };
};

export default connect(mapStateToProps)(EventList);
