import React from 'react';
import { QueryClient, useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchTodos, addTodo } from '../../../services';

const Todos = () => {
  // Queries
  const { data, error, isLoading } = useQuery({ queryKey: ['todos'], queryFn: fetchTodos })

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

const AddTodo = () => {
  const queryClient = useQueryClient();
  // Mutations
  const mutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = { 
      id: Date.now(),
      title: event.target.elements.title.value
     };
    mutation.mutate(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

Todos.AddTodo = AddTodo;

export default Todos;
