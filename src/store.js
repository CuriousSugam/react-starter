import reduxCatch from 'redux-catch';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import epic from './epics';
import rootReducer from './reducers';
import todoServices from './services/todoServices';
import { composeWithDevTools } from 'redux-devtools-extension';

const epicMiddleware = createEpicMiddleware(epic, {
    dependencies: {
        todoServices
    },
  });
  
// const errorHandler = (err, getState, lastAction) => {
//     if (process.env.NODE_ENV === 'development') {
//         console.error('Error in reducer');
//         console.error(lastAction);
//         console.error(err);
//     }
// };

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        // applyMiddleware(
            // reduxCatch(errorHandler).
            // epicMiddleware
        // )
    )
);

export default store;