import React, { Component, PropTypes } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

export default class ItemGallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    console.log('item', item);
    return (
      <View sytle={{ flex: 0.5 }}>
        <Image source={{ uri: item.url }} style={{ width: 150, height: 75 }} />
        <Text> - </Text>
      </View>
    );
  }
}

ItemGallery.propTypes = {
  item: PropTypes.object
};
ItemGallery.defaultProps = {
  item: { },
};
