import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Animated,
} from 'react-native';
import * as shape from 'd3-shape';
import Svg, {Path} from 'react-native-svg';

import StaticTab from './StaticTab';
import {AppContext} from '../../AppContext';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const {width} = Dimensions.get('window');
const height = 64;
const tabs = [
  {
    name: 'home',
    type: 'AntDesign',
    title: 'Tab 1',
    screen: 'Tab1',
  },
  {
    name: 'cog-clockwise',
    type: 'MaterialCommunityIcons',
    title: 'Tab 2',
    screen: 'Tab2',
  },
  {
    name: 'cog-clockwise',
    type: 'MaterialCommunityIcons',
    title: 'Tab 3',
    screen: 'Tab3',
  },
  {
    name: 'adduser',
    type: 'AntDesign',
    title: 'Tab 4',
    screen: 'Tab4',
  },
];
const tabWidth = width / tabs.length;

const getPath = (): string => {
  const left = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)([
    {x: 0, y: 0},
    {x: width, y: 0},
  ]);
  const tab = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(shape.curveBasis)([
    {x: width, y: 0},
    {x: width + 15, y: 0},
    {x: width + 30, y: 10},
    {x: width + 40, y: height - 10},
    {x: width + tabWidth - 40, y: height - 10},
    {x: width + tabWidth - 30, y: 10},
    {x: width + tabWidth - 15, y: 0},
    {x: width + tabWidth, y: 0},
  ]);
  const right = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)([
    {x: width + tabWidth, y: 0},
    {x: width * 2, y: 0},
    {x: width * 2, y: height},
    {x: 0, y: height},
    {x: 0, y: 0},
  ]);
  return `${left} ${tab} ${right}`;
};
const d = getPath();

class TabComponent extends React.PureComponent {
  static contextType = AppContext;
  value = new Animated.Value(0);

  render() {
    const {value} = this;
    const translateX = value.interpolate({
      inputRange: [0, width],
      outputRange: [-width, 0],
    });
    const {appTheme} = this.context;
    return (
      <>
        <View {...{height, width, backgroundColor: appTheme.themeColor}}>
          <AnimatedSvg
            width={width * 2}
            {...{height}}
            style={{transform: [{translateX}]}}>
            <Path fill={appTheme.tab} {...{d}} />
          </AnimatedSvg>
          <View style={StyleSheet.absoluteFill}>
            <StaticTab {...{tabs, value}} navigation={this.props.navigation} />
          </View>
        </View>
        <SafeAreaView style={{backgroundColor: appTheme.tab}} />
      </>
    );
  }
}

export default TabComponent;
