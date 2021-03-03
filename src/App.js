import { BrowserRouter as Router, Switch } from 'react-router-dom';
import IssueList from './components/IssueList';
import './App.css';

function App() {
  return (
    <Router>
      <header className="App-header">
        GitHub Issues Page Clone
      </header>
      <div className="App">
        <Switch>
          <IssueList />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
