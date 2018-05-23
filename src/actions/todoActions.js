export const TODO_ADD = 'TODO_ADD';
export const TODO_REMOVE = 'TODO_REMOVE';
export const TODO_EDIT = 'TODO_EDIT';

export const addTodo = (todo, userId) => ({
    type: TODO_ADD,
    payload: {
      todo,
      userId,
    }
});

export const removeTodo = todo => ({
    type: TODO_REMOVE,
    payload: todo
});

export const editTodo = todo => ({
    type: TODO_EDIT,
    payload: todo
})

