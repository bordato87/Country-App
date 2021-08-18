import './App.css';
import {Route} from 'react-router-dom';
import Landing from './components/Landing.js';
import Detail from './components/Detail.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Nav from './components/Nav.js';
import NewActivity from './components/NewActivity.js';
import Abaut from './components/Abaut.js';
import Filters from './components/Filters.js';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/country" component={Nav} />
      <Route path="/country/:id" component={Detail} />
      <Route path="/country" component={Footer} />
      <Route path="/home" component={Nav} />
      <Route path="/home" component={Filters} />
      <Route path="/home" component={Home} />
      <Route path="/home" component={Footer} />
      <Route path="/add" component={Nav} />
      <Route path="/add" component={NewActivity} />
      <Route path="/add" component={Footer} />
      <Route path="/abaut" component={Nav} />
      <Route path="/abaut" component={Abaut} />
      <Route path="/abaut" component={Footer} />
    </div>
  );
}

export default App;