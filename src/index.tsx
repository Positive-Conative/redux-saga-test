import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

// [추가]
import rootReducer, { rootSaga } from './reducers';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어 제작
const store = createStore(rootReducer,  // 스토어에 적용
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga); // 루트 사가 실행

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
