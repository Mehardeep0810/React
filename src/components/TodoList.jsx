import React from 'react'
//adding lists dynamically in react
const TodoList = () => {
    const todos = [ //array of ojects
        {
            todoText: "Go to Gym",
            isCompleted: true
        },
        {
            todoText: "Go to University",
            isCompleted: false
        },
        {
            todoText: "Go to Grocery",
            isCompleted: true
        },
        {
            todoText: "Go to Library",
            isCompleted: true
        },
        {
            todoText: "Revise react",
            isCompleted: false
        },
    ]
    return (
        <ul>
            {todos.map((todos) => {
                // eslint-disable-next-line react/jsx-key
                return <li>
                    {todos.todoText}
                    <input type='checkbox' 
                    defaultChecked={todos.
                    isCompleted} />
                </li>
            })}
        </ul>
    )
}

export default TodoList