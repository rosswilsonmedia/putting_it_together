import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard.js';

function App() {
  return (
    <div className="App">
      <PersonCard last_name="Doe" first_name="Jane" age={45} hair_color="Black"/>
      <PersonCard last_name="Smith" first_name="John" age={88} hair_color="Brown"/>
      <PersonCard last_name="Fillmore" first_name="Millard" age={50} hair_color="Brown"/>
      <PersonCard last_name="Smith" first_name="Maria" age={62} hair_color="Brown"/>
    </div>
  );
}

export default App;
