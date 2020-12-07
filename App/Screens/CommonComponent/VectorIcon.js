import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const VectorIcon = ({name, ...props}) => {
  let {type} = props;
  if (type) {
    type = type.toLowerCase();
    if (type.includes('materialcommunityicon')) {
      return <MaterialCommunityIcons name={name} {...props} />;
    }
    if (type.includes('materialicon')) {
      return <MaterialIcons name={name} {...props} />;
    }
    if (type.includes('fontawesome')) {
      return <FontAwesome name={name} {...props} />;
    }
    if (type.includes('entypo')) {
      return <Entypo name={name} {...props} />;
    }
    if (type.includes('octicon')) {
      return <Octicons name={name} {...props} />;
    }
    if (type.includes('feather')) {
      return <Feather name={name} {...props} />;
    }
    if (type.includes('antdesign')) {
      return <AntDesign name={name} {...props} />;
    }
  }
  return <Ionicons name={name} {...props} />;
};

VectorIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export {VectorIcon};
