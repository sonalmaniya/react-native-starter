import * as React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
} from 'react-native';
import {CustomText, VectorIcon} from '../../Screens/CommonComponent';
import {AppContext} from '../../AppContext';

const {width} = Dimensions.get('window');

class StaticTab extends React.PureComponent {
  static contextType = AppContext;

  values: Animated.Value[] = [];

  constructor(props) {
    super(props);
    const {tabs} = this.props;
    this.values = tabs.map(
      (tab, index) => new Animated.Value(index === 0 ? 1 : 0),
    );
  }

  onPress = (index, screen) => {
    const {value, tabs} = this.props;
    const tabWidth = width / tabs.length;
    Animated.sequence([
      Animated.parallel(
        this.values.map((v) =>
          Animated.timing(v, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
          }),
        ),
      ),
      Animated.parallel([
        Animated.spring(value, {
          toValue: tabWidth * index,
          useNativeDriver: true,
        }),
        Animated.spring(this.values[index], {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
    this.props.navigation.navigate(screen);
  };

  render() {
    const {appTheme} = this.context;
    const {onPress} = this;
    const {tabs, value} = this.props;
    return (
      <View style={styles.container}>
        {tabs.map((tab, key) => {
          const tabWidth = width / tabs.length;
          const cursor = tabWidth * key;
          const opacity = value.interpolate({
            inputRange: [cursor - tabWidth, cursor, cursor + tabWidth],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp',
          });
          const translateY = this.values[key].interpolate({
            inputRange: [0, 1],
            outputRange: [64, 0],
            extrapolate: 'clamp',
          });
          const opacity1 = this.values[key].interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          });
          return (
            <React.Fragment {...{key}}>
              <TouchableWithoutFeedback
                onPress={() => onPress(key, tab.screen)}>
                <Animated.View style={[styles.tab, {opacity}]}>
                  <VectorIcon
                    name={tab.name}
                    type={tab.type}
                    color={appTheme.themeColor}
                    size={22}
                  />
                  <CustomText
                    small
                    numberOfLines={1}
                    style={{
                      marginTop: 3,
                      color: appTheme.lightText,
                    }}>
                    {tab.title}
                  </CustomText>
                </Animated.View>
              </TouchableWithoutFeedback>
              <Animated.View
                style={[
                  styles.animatedOuter,
                  {
                    left: tabWidth * key,
                    width: tabWidth,
                    opacity: opacity1,
                    transform: [{translateY}],
                  },
                ]}>
                <View style={styles.activeIcon}>
                  <VectorIcon
                    name={tab.name}
                    type={tab.type}
                    color={appTheme.themeColor}
                    size={25}
                  />
                </View>
              </Animated.View>
            </React.Fragment>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
  },
  activeIcon: {
    backgroundColor: 'white',
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedOuter: {
    position: 'absolute',
    top: -8,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StaticTab;
