import * as todoActions from '../actions/todoActions';

const INITIAL_STATE = {
    todo: []
}

const todoReducer = (state = INITIAL_STATE.todo, action) => {
    switch(action.type) {
        case todoActions.TODO_ADD: {
            return state;
        }
        case todoActions.TODO_REMOVE: {
            return state;            
        }
        case todoActions.TODO_EDIT: {
            return state;            
        }
        default: return state;
    }
}

export default todoReducer;