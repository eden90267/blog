import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {renderRoutes} from 'Source/utils/react-router-config'; // react-router-config 無法使用的替代方案
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

import reducers from './reducers/index';
import routes from 'Source/router';

require('Source/less/theme.less');

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app')
);

