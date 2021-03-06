import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './view/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
