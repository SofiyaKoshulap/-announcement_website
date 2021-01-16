import { Route, BrowserRouter, Switch } from 'react-router-dom'
import AnnoucementList from './components/announsementList'
import Announcement from './components/announcement'
import SearchPage from './components/searchPage'
import './App.css';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Switch>
          <Route exact path='/' component={AnnoucementList} />
          <Route path='/announcement/:announcement_id' component={Announcement} />
          <Route path='/search/:input' component={SearchPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
