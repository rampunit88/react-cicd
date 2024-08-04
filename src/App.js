import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import Todos from './components/counter/todos/Todo';

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
          <h3>Welcome</h3>
          <img src={logo} alt='' className='App-logo' />
          <h3>React</h3>
        </div>
        <Counter />
        <Todos />
        <Todos.AddTodo />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
