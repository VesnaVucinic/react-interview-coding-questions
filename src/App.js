import AstClass from './components/AstClass.js'
import AstFunc from './components/AstFunc.js'
import './App.css';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <AstClass/>
        <br/>
        <AstFunc/>
      </header>
    </div>
  );
}

export default App;
