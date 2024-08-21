import axios from 'axios';

export function debounce(cb, delay) {
	let time;
	return (...args) => {
		clearTimeout(time)
		time = setTimeout(() => {
			cb(...args)
		}, delay)
	}
}

export function throttle(mainFunction, delay) {
	let timerFlag = null; // Variable to keep track of the timer
  
	// Returning a throttled version 
	return (...args) => {
	  if (timerFlag === null) { // If there is no timer currently running
		mainFunction(...args); // Execute the main function 
		timerFlag = setTimeout(() => { // Set a timer to clear the timerFlag after the specified delay
		  timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
		}, delay);
	  }
	};
  }

export const addTodo = async (newTodo) => {
	const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', newTodo);
	return data;
};

export const fetchTodos = async () => {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
	return data;
};