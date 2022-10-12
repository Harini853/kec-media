import './App.scss';
import {BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './AllRoutes';
import { Provider } from 'react';function App() {
  return (
    <div className="App">
      <Router>
          <AllRoutes />
      </Router>
 
    </div>
  );
}
export default App;
