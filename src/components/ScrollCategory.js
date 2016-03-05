import React from 'react-native'

let {
  View,
  Component,
  StyleSheet,
  Dimensions,
  Text,
  Image
} = React

let deviceHeight = Dimensions.get('window').height

class ScrollCategory extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View
        style={styles.category}>
        <Image
          style={styles.image}
          source={require('../../assets/action.jpg')}>
          <Text
            style={styles.imageText}>
            ACTION
          </Text>
        </Image>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  category: {
    padding: 2,
    borderBottomWidth: 2,
    borderColor: '#d6d7da',
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    height: (deviceHeight - 50) / 4
  },

  image: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: (deviceHeight - 50) / 4
  },

  imageText: {
    top: 20
  }
});

export default ScrollCategory