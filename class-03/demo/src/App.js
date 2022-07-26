import './App.css';
import Parent from './components/parent';
import Header from './components/header';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>State and props</h1>
      <Parent />
    </div>
  );
}

export default App;
