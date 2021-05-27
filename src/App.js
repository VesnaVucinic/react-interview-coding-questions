import AstClass from './components/AstClass.js'
import AstFunc from './components/AstFunc.js'
import AxAsAw from './components/AxAsAw.js'
import './App.css';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <AstClass/>
        <br/>
        <AstFunc/>
        <br/>
        <AxAsAw/>
      </header>
    </div>
  );
}

export default App;

// https://illusionalcoder.medium.com/fetch-and-display-data-on-react-frontend-4ab9bccd00b6
