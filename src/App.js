import './App.css';
import { List } from './List';

function App() {
const list = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

  return (
    <div className="App">
    <List data={list}/>
      
    </div>
  );
}

export default App;
