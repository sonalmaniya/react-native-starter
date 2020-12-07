import React, {Component} from 'react';
import {View} from 'react-native';
import {store, persistor} from './App/Stores';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import axios from 'axios';
import Routes from './App/Routes/index';
import NetInfo from '@react-native-community/netinfo';
import Config from './App/Config';
import Helper from './App/Utils/Helper';
import Storage from './App/Utils/Storage';
import {AppContextProvider} from './App/AppContext';
import {NoConnection} from './App/Screens/SubComponents';
import CommonStyle from './App/Theme/CommonStyle';

axios.interceptors.request.use(
  async (config) => {
    let request = config;
    let token = Config.token;
    if (!token) {
      token = await Storage.get('token');
    }
    request.headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    request.url = Helper.configureUrl(config.url);
    return request;
  },
  (error) => error,
);

class App extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
      isConnected: true,
    };
  }

  componentDidMount() {
    this.retryConnection();
    this.NetInfoSubscription = NetInfo.addEventListener(
      this.handleConnectivityChange,
    );
  }

  componentWillUnmount() {
    if (this.NetInfoSubscription) {
      this.NetInfoSubscription();
    }
  }

  // Managed internet connection
  handleConnectivityChange = (info) => {
    if (info.type === 'none' || !info.isConnected) {
      this.setState({isConnected: false});
    } else {
      this.setState({isConnected: true});
    }
  };

  // Check network connection
  retryConnection = () => {
    NetInfo.fetch().then((info) => {
      if (info.type === 'none' && !info.isConnected) {
        this.setState({isConnected: false});
      } else {
        this.setState({isConnected: true});
      }
    });
  };

  render() {
    const {isConnected} = this.state;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContextProvider>
            <View style={CommonStyle.flexContainer}>
              <Routes />
              {(!isConnected && (
                <NoConnection retryConnection={this.retryConnection} />
              )) ||
                null}
            </View>
          </AppContextProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
