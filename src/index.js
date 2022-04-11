import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/es/integration/react"
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from "connected-react-router"
import history from "./services/history"
import { store, persist } from "./store"

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback="">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persist}>
                    <ConnectedRouter history={history}>
                        <App />
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        </Suspense>
    </React.StrictMode>, document.getElementById('root'));

serviceWorker.unregister();
