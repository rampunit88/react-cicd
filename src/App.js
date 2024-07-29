import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <h3>Welcome</h3>
      <img src='./logo512.png' alt='' className='App-logo'/>
      <h3>React</h3>
      <Counter/>
    </div>
  );
}

export default App;
