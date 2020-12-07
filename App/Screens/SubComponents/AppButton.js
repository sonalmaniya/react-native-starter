import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {CustomText, VectorIcon} from '../CommonComponent';
import {AppContext} from '../../AppContext';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyle from '../../Theme/CommonStyle';
import Constant from '../../Utils/Constant';

const styles = StyleSheet.create({
  outer: {
    padding: 12,
    borderRadius: 5,
  },
  gradientBtn: {
    height: 56,
    borderRadius: 28,
    paddingHorizontal: 25,
    minWidth: 160,
    ...CommonStyle.center,
  },
});

const ButtonWithIcon = (props) => {
  const {icon, title, exStyle, onPress} = props;
  const {outer} = styles;
  const {appTheme} = useContext(AppContext);
  return (
    <TouchableOpacity onPress={onPress} style={exStyle && exStyle}>
      <View style={[outer, {backgroundColor: appTheme.themeColor}]}>
        <VectorIcon
          name={icon}
          color={appTheme.tintColor}
          style={{marginHorizontal: 5}}
          size={20}
        />
        <CustomText style={{color: appTheme.tintColor}}>{title}</CustomText>
      </View>
    </TouchableOpacity>
  );
};

const GradientButton = (props) => {
  const {
    title,
    onPress,
    exStyle,
    isProcessing = false,
    textOnly = false,
  } = props;
  const {appTheme} = useContext(AppContext);
  const {gradientBtn} = styles;
  return (
    <View
      style={[
        CommonStyle.shadow,
        {alignSelf: 'center', opacity: (isProcessing && 0.6) || 1},
        exStyle && exStyle,
      ]}>
      <TouchableOpacity onPress={onPress} disabled={isProcessing}>
        <LinearGradient colors={appTheme.gradient} style={gradientBtn}>
          {((!isProcessing || textOnly) && (
            <CustomText
              large
              style={[Constant.fonts.robotoRegular, {color: appTheme.tint}]}>
              {title}
            </CustomText>
          )) || <ActivityIndicator color={appTheme.tint} />}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export {ButtonWithIcon, GradientButton};
