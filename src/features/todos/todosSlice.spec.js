import todosReducer from "./todosSlice";

test('Toggles a todo based on id', () => {
    initialState = [{id: 0, text: 'Test text', completed: false}]

    const action = { type: 'todos/todoToggled', payload: 0}
    const result = todosReducer(initialState, actino)
    expect(result[0].completed).toBe(true);
})