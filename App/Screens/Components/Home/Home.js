import React, {useState, useContext} from 'react';
import {SafeAreaView, Switch, View} from 'react-native';
import {CustomText} from '../../CommonComponent';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';

const Home = (props) => {
  const {appTheme, setAppTheme} = useContext(AppContext);
  const [darkMode, setDarkMode] = useState(appTheme.type === 'dark');

  const onValueChange = () => {
    setAppTheme((!darkMode && 'dark') || 'light');
    setDarkMode(!darkMode);
  };

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        CommonStyle.center,
        {backgroundColor: appTheme.background},
      ]}>
      <CustomText xlarge style={{color: appTheme.text, marginVertical: 40}}>
        Welcome...
      </CustomText>
      <View style={CommonStyle.rowCenter}>
        <CustomText style={{color: appTheme.text, margin: 10}}>
          Dark Mode
        </CustomText>
        <Switch onChange={onValueChange} value={darkMode} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
