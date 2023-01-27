import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { fetchTodos } from "./features/todos/todosSlice";
import "./api/server";

store.dispatch(fetchTodos());

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

//import store from './store';

/* //Log the initial state 
console.log('Initial state: ', store.getState())
// {todos: [...], filters: {status, colors}}

//Every time the state changes, log it
const unsubscribe = store.subscribe(() => {
  console.log('State after dispatch: ', store.getState())
}) */

//Now dispatch some actions
/* console.log('Dispatching actions')
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions'})
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers'})
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores'})
console.log('Dispatch completed')

store.dispatch({ type: 'todos/todoToggled', payload: 0})
store.dispatch({ type: 'todos/todoToggled', payload: 1})

store.dispatch({ type: 'filters/statusFiltersChanged', payload: 'Active'})

store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: {color: 'red', changeType: 'added'}
})
 */
//Stop listening to state updates
//unsubscribe();

//Disptach one more action to see what happens
//store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating store'})

/* import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
 */
