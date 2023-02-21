import Input from './components/input';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p>
          Input efect filled within <span className="heart">♥️</span> React
        </p>
      </header>
      <Input type="text"  placeholder='Digite seu nome' />
    </div>
  );
}

export default App;
