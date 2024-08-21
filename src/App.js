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
import Test from './components/rnd/Test';
import Compound from './components/patters/compound/Compound';
import Calculator from './components/patters/render-prop/Calculator';
import Book from './components/screens/book/Book';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/pages/Home';
import Page404 from './screens/pages/Page404';
// Create a client
const queryClient = new QueryClient()

function App() {

  const eh = () => {
    log.error("Error test")
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
      {/* <QueryClientProvider client={queryClient}>
        <Header />
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
            <button
              type="button"
              onClick={() => {
                throw new Error("Sentry Test Error");
              }}
            >
              Break the world
            </button>;
          </div>
          <ErrorBoundary>
            <Book />
          </ErrorBoundary>
          <ErrorBoundary>
            <Compound />
          </ErrorBoundary>
          <ErrorBoundary>
            <Calculator />
          </ErrorBoundary>
          <ErrorBoundary>
            <Test />
          </ErrorBoundary>
          <ErrorBoundary>
            <Counter />
          </ErrorBoundary>
          <ErrorBoundary>
            <Todos.AddTodo />
          </ErrorBoundary>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider> */}

    </BrowserRouter>
  );
}

export default App;
