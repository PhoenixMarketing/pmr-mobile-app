import React, { Component } from 'react';
import {
  Text, View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';
import * as actions from '../actions';

class MyEventItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  onRemove() {
    const { uid } = this.props.userEvent;
    this.props.removeEvent({ uid });
  }

  renderButtons() {
    const { containerStyle } = styles;
    const { expanded } = this.props;
    if (expanded) {
      return (
        <View style={containerStyle}>
          <Button>
            Info
          </Button>

          <Button
          onPress={this.onRemove.bind(this)}
          >
            Remove
          </Button>
        </View>
      );
    }
  }

  render() {
    const { id, title } = this.props.userEvent.event;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectEvent(id, this.props.expanded)}
      >
        <View style={styles.EventDetailStyle}>
          <Text style={styles.titleStyle}>
            {title}
          </Text>
          <View>
            {this.renderButtons()}
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
  },
  RemoveButtonStyle: {
    borderColor: '#b8003f',
    color: '#b8003f'
  },
  containerStyle: {
    padding: 5,
    flexDirection: 'row',
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-start'
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedEventId === ownProps.userEvent.event.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(MyEventItem);
