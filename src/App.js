import './App.css';
import Movies from './shared/components/list/Movies';
import Search from './shared/components/searchForm/search';

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <Search/>
        </div>
        <Movies />
      </div>
    </div>
  );
}

export default App;
