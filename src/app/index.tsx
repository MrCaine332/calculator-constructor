import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";

import "../styles/globals.scss"
import {DndProvider} from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {Provider} from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <DndProvider backend={HTML5Backend}>
                    <App />
                </DndProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
