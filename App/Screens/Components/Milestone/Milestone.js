import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import {CustomText} from '../../CommonComponent';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';

const Milestone = (props) => {
  const {appTheme} = useContext(AppContext);

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        CommonStyle.center,
        {backgroundColor: appTheme.background},
      ]}>
      <CustomText style={{color: appTheme.text, marginVertical: 40}}>
        Tab 2
      </CustomText>
    </SafeAreaView>
  );
};

export default Milestone;
