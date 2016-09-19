import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  indigo700, indigo500, indigo100,
  lightGreen500
} from 'material-ui/styles/colors';

import App from './components/App';
import appStore from './stores/AppStore';
import './styles/index.css';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo700,
    primary2Color: indigo500,
    primary3Color: indigo100,
    accent1Color: lightGreen500
  },
});

render(
  <Provider stores={{appStore}}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
