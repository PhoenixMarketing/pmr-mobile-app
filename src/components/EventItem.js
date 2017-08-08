import React, { Component } from 'react';
import {
  Text, View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import * as actions from '../actions';

class EventItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  onButtonPress() {
    const { event } = this.props;
    this.props.addEvent({ event });
  }

  renderButtons() {
    // if (this.props.added) {
    //   return (
    //     <Button>
    //       Remove From My Events
    //     </Button>
    //   );
    // }
    return (
      <Button
      onPress={this.onButtonPress.bind(this)}
      style={{ flex: 1 }}
      >
        Add to My Events
      </Button>
    );
  }


  renderDescription() {
    const { event, expanded } = this.props;
    if (expanded) {
      return (
      <View>
        <View style={{ padding: 3 }}>
          <Text style={{ flex: 1 }}>
            {event.description}
          </Text>
        </View>
        <View style={{ padding: 3 }}>
          {this.renderButtons()}
        </View>
      </View>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.event;

    return (
      <TouchableWithoutFeedback
      onPress={() => this.props.selectEvent(id, this.props.expanded)}
      >
        <View style={styles.EventDetailStyle}>
          <Text style={titleStyle}>
            {title}
          </Text>
          <View>
          {this.renderDescription()}
          </View>
        </View>

      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15
  },
  EventDetailStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedEventId === ownProps.event.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(EventItem);
