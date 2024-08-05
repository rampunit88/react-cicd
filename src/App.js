import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import Todos from './components/counter/todos/Todo';
import log from '../src/services/log.services'
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/header/Header';
// Create a client
const queryClient = new QueryClient()

function App() {

  const eh = () => {
    log.error("Error test")
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Header/>
      <div className="App">
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
          
          <h3>Welcome</h3>
          <img src={logo} alt='' className='App-logo' />
          <h3>React</h3>
          <button onClick={() => eh()}>click</button>
        </div>
        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>
        <ErrorBoundary><Todos /></ErrorBoundary>
        <ErrorBoundary><Todos.AddTodo /></ErrorBoundary>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
