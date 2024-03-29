import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Marcio';

  function sum () {
    const a = 1
    const b = 2
    return a + b
  }

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>React</h2>
      <p>My name is {name}</p>
      <p>Sum: {sum()}</p>
      <img src={url} alt="logo" />
      <HelloWorld />
    </div>
  );
}

export default App;
