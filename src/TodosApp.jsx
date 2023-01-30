import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './api/todosApis';

export const TodosApp = () => {
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const onNextTodo = () => {
    setTodoId((todoId) => (todoId += 1));
  };

  const onPreviusTodo = () => {
    if (todoId > 1) {
      setTodoId((todoId) => (todoId -= 1));
    }
  };

  return (
    <>
      <div>TodosApp - RTK Querry</div>
      <hr />
      <h4>
        Is Loading todo number:{todoId}: {isLoading ? 'True' : 'False'}
      </h4>

      <pre>{JSON.stringify(todo)}</pre>
      <button style={{ backgroundColor: 'gray' }} onClick={onPreviusTodo}>
        Previus todo
      </button>
      <button style={{ backgroundColor: 'gray' }} onClick={onNextTodo}>
        Next todo
      </button>

      {/* <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <strong>{todo.completed ? 'DONE' : 'PENDING'}: </strong>
              {todo.title}
            </li>
          );
        })}
      </ul> */}
    </>
  );
};
