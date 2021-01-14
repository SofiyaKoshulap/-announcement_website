import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';
import AnnoucementList from './components/announsementList'

function App() {
  return (
    <BrowserRouter >
        <div className="App">
          <Switch>
            <Route exact path='/' component={AnnoucementList} />
            <Route path='/announcement/:announcement_id' component={} />
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
