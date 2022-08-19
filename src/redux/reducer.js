const initState = {
  filters: {
    search: '',
    status: 'All',
    priority: [],
  },
  todoList: [
    { id: 1, name: 'learn Yoga', complete: false, priority: 'Medium' },
    { id: 2, name: 'learn Redux', complete: false, priority: 'High' },
    { id: 3, name: 'learn Javascript', complete: false, priority: 'Low' },
  ],
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      }
    default:
      return state
  }
}

export default rootReducer 