import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <div style={{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center'
      }}>
      <h3>Welcome</h3>
      <img src={logo} alt='' className='App-logo'/>
      <h3>React</h3>
      </div>
      <Counter/>
    </div>
  );
}

export default App;
