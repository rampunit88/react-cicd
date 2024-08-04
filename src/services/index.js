import axios from 'axios';

export const addTodo = async (newTodo) => {
    const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', newTodo);
    return data;
};

export const fetchTodos = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
};