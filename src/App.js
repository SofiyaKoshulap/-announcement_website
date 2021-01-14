import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css';
import AnnoucementList from './components/announsementList'
import Announcement from './components/announcement'

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Switch>
          <Route exact path='/' component={AnnoucementList} />
          <Route path='/announcement/:announcement_id' component={Announcement} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
