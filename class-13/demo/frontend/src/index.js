import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import App from './App';
import UpdateCat from './components/UpdateCat';
// import {
//   BrowserRouter as Router
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={ <App />} />
        <Route path='/cat/:id' element={<UpdateCat />} />
      </Routes>

    </Router>
  </React.StrictMode>
);